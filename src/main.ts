import { camelCase, snakeCase, paramCase, pascalCase } from "change-case";

export function transformKeys<T, DataType = T>(
  itemObj: T,
  transformFn: (key: string) => string,
): T {
  if (Array.isArray(itemObj)) {
    return (itemObj as Array<DataType>).map(item =>
      transformKeys<DataType>(item, transformFn),
    ) as unknown as T;
  } else if (typeof itemObj === "object" && itemObj !== null) {
    const newObj = {} as Record<string, unknown>;
    for (const key in itemObj) {
      const newKey = transformFn(key);
      newObj[newKey] = transformKeys(
        (itemObj as Record<string, unknown>)[key],
        transformFn,
      );
    }
    return newObj as T;
  }

  return itemObj;
}

/**
 * Transforms an object from snake_case to camelCase.
 *
 * @param {Object} obj - The object to be transformed
 * @returns {Object} Any Data Type - The transformed object
 */

export function transformToCamelCase<T>(obj: T): T {
  return transformKeys(obj, camelCase);
}

/**
 * Transforms an object from camelCase to snake_case.
 *
 * @param {Object} obj - The object to be transformed
 * @returns {Object} Any Data Type - The transformed object
 */

export function transformToSnakeCase<T>(obj: T): T {
  return transformKeys(obj, snakeCase);
}

/**
 * Transforms an object from camelCase to kebab-case.
 *
 * @param {Object} obj - The object to be transformed
 * @returns {Object} Any Data Type - The transformed object
 */

export function transformToKebabCase<T>(obj: T): T {
  return transformKeys(obj, paramCase);
}

/**
 * Transforms an object from any case into PascalCase.
 *
 * @param {Object} obj - The object to be transformed
 * @returns {Object} Any Data Type - The transformed object
 */

export function transformToPascalCase<T>(obj: T): T {
  return transformKeys(obj, pascalCase);
}
