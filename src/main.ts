import { transform, isArray, camelCase, isObject, kebabCase, snakeCase, upperCase } from "lodash-es";
import * as typeFest from "type-fest";

export const transformToCamelCase = <T extends object>(obj: T): typeFest.CamelCasedPropertiesDeep<T> => {
  const result: T = transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key as string);

    acc[camelKey] = isObject(value) ? transformToCamelCase(value) : value;
  });

  return result as typeFest.CamelCasedPropertiesDeep<T>;
};

export const transformToKebabCase = <T extends object>(obj: T): typeFest.KebabCasedPropertiesDeep<T> => {
  const result: T = transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : kebabCase(key as string);

    acc[camelKey] = isObject(value) ? transformToKebabCase(value) : value;
  });
  return result as typeFest.KebabCasedPropertiesDeep<T>;
};

export const transformToSnakeCase = <T extends object>(obj: T): typeFest.SnakeCasedPropertiesDeep<T> => {
  const result: T = transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : snakeCase(key as string);

    acc[camelKey] = isObject(value) ? transformToSnakeCase(value) : value;
  });
  return result as typeFest.SnakeCasedPropertiesDeep<T>;
};

export const transformToPascalCase = <T extends object>(obj: T): typeFest.PascalCasedPropertiesDeep<T> => {
  const result: T = transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : upperCase(key as string).replace(/ /g, "_");

    acc[camelKey] = isObject(value) ? transformToPascalCase(value) : value;
  });
  return result as typeFest.PascalCasedPropertiesDeep<T>;
};
