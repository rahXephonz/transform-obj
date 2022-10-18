import _ from "lodash";
import {
  CamelCasedPropertiesDeep,
  KebabCasedPropertiesDeep,
  SnakeCasedPropertiesDeep,
  PascalCasedPropertiesDeep,
} from "type-fest";

const transformToCamelCase = <T extends object>(obj: T): CamelCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.camelCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToCamelCase(value) : value;
  });

  return result as CamelCasedPropertiesDeep<T>;
};

const transformToKebabCase = <T extends object>(obj: T): KebabCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.kebabCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToKebabCase(value) : value;
  });
  return result as KebabCasedPropertiesDeep<T>;
};

const transformToSnakeCase = <T extends object>(obj: T): SnakeCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.snakeCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToSnakeCase(value) : value;
  });
  return result as SnakeCasedPropertiesDeep<T>;
};

const transformToPascalCase = <T extends object>(obj: T): PascalCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.upperCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToPascalCase(value) : value;
  });
  return result as PascalCasedPropertiesDeep<T>;
};

export { transformToSnakeCase, transformToKebabCase, transformToCamelCase, transformToPascalCase };

export default {
  transformToSnakeCase,
  transformToKebabCase,
  transformToCamelCase,
  transformToPascalCase,
};
