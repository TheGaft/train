import { FC } from 'react';
import z from 'zod';
import { pickByProps, PickByPropsSchema } from './utils/pickByProps';

const zodSchema = z.object({
  a: z.any(),
  c: z.object({
    c1: z.any(),
    c3: z.object({
      c31: z.any(),
    }),
  }),
  d: z.any(),
  e: z.any(),
});
const schema: PickByPropsSchema = {
  a: true,
  c: { c1: true, c3: { c31: true } },
  d: true,
  e: true,
  f: { f1: true },
  y: true,
  z: { z1: true },

  null: true,
  NaN: true,
  true: true,
  false: true,
};

export const Cleaner: FC = () => {
  const data = {
    // a: 'qwe',
    // b: 'asd',
    c: {
      c1: 'ert',
      c2: 'dfg',
      c3: {
        c31: 'c31',
        c32: 'c32',
      },
    },
    d: {
      d1: 'tyu',
      d2: 'ghj',
    },
    e: [1, 2, 3, 4],
    f: [1, 2, 3, 4],

    null: null,
    NaN: NaN,
    true: true,
    false: false,
  };

  const cleanDataZod = zodSchema.parse(data);

  const cleanData = pickByProps(schema, data);

  console.table({
    data,
    cleanData,
  });

  return (
    <table border={1}>
      <colgroup>
        <col style={{ width: '400px' }} />
        <col style={{ width: '400px' }} />
      </colgroup>
      <tbody>
        <tr>
          <td>source</td>
          <td>pickProps</td>
        </tr>
        <tr>
          <td>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </td>
          <td>
            <pre>{JSON.stringify(cleanData, null, 2)}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
