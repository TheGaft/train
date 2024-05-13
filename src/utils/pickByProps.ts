import { isBoolean, isEmpty, isObject, isPlainObject, reduce } from 'lodash';

export type PickByPropsSchema = { [key: string]: boolean | PickByPropsSchema };

export const pickByProps = (props: PickByPropsSchema, object?: object) => {
  if (isEmpty(props)) {
    return {};
  }

  return reduce(
    props,
    (acc, value, index) => {
      const objectValue: unknown = object[index];

      let propValue = objectValue;
      if (
        !isBoolean(value) &&
        isObject(objectValue) &&
        isPlainObject(objectValue)
      ) {
        propValue = pickByProps(value, objectValue);
      }

      acc[index] = propValue;
      return acc;
    },
    {}
  );
};