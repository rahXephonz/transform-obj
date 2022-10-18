import { transformToCamelCase, transformToKebabCase, transformToSnakeCase, transformToPascalCase } from "../main";

const dataSampleOne = [
  {
    id: 1,
    status_avaliable_online: true,
  },
];

const dataSampleTwo = [
  {
    id: 1,
    statusAvaliable: true,
  },
];

describe("transform-obj utility", () => {
  test("Transform To CamelCase", () => {
    const expectedResult = [
      {
        id: 1,
        statusAvaliableOnline: true,
      },
    ];

    expect(transformToCamelCase(dataSampleOne)).toEqual(expectedResult);
  });

  test("Transform To SnakeCase", () => {
    const expectedResult = [
      {
        id: 1,
        status_avaliable: true,
      },
    ];

    expect(transformToSnakeCase(dataSampleTwo)).toEqual(expectedResult);
  });

  test("Transform To KebabCase", () => {
    const expectedResult = [
      {
        id: 1,
        "status-avaliable": true,
      },
    ];

    expect(transformToKebabCase(dataSampleTwo)).toEqual(expectedResult);
  });

  test("Transform To PascalCase", () => {
    const expectedResult = [
      {
        ID: 1,
        STATUS_AVALIABLE_ONLINE: true,
      },
    ];

    expect(transformToPascalCase(dataSampleOne)).toEqual(expectedResult);
  });
});
