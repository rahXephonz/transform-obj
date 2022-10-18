import _ from "lodash";
import * as typeFest from "type-fest";

const transformToCamelCase = <T extends object>(obj: T): typeFest.CamelCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.camelCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToCamelCase(value) : value;
  });

  return result as typeFest.CamelCasedPropertiesDeep<T>;
};

const transformToKebabCase = <T extends object>(obj: T): typeFest.KebabCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.kebabCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToKebabCase(value) : value;
  });
  return result as typeFest.KebabCasedPropertiesDeep<T>;
};

const transformToSnakeCase = <T extends object>(obj: T): typeFest.SnakeCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.snakeCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToSnakeCase(value) : value;
  });
  return result as typeFest.SnakeCasedPropertiesDeep<T>;
};

const transformToPascalCase = <T extends object>(obj: T): typeFest.PascalCasedPropertiesDeep<T> => {
  const result: T = _.transform<T, any>(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.upperCase(key as string);

    acc[camelKey] = _.isObject(value) ? transformToPascalCase(value) : value;
  });
  return result as typeFest.PascalCasedPropertiesDeep<T>;
};

export { transformToSnakeCase, transformToKebabCase, transformToCamelCase, transformToPascalCase };

export default {
  transformToSnakeCase,
  transformToKebabCase,
  transformToCamelCase,
  transformToPascalCase,
};
