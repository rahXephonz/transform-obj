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

const transformToSnakeCase = <T extends object>(obj: T): KebabCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.snakeCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToSnakeCase(value) : value;
  });
  return result as KebabCasedPropertiesDeep<T>;
};

export default {
  transformToSnakeCase,
  transformToCamelCase,
};
