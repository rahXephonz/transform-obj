<div align="center">
<h1 id="toc">🛠 transform-obj</h1>
<p>Allows you transform entire object data or datum</p>
</div>

<div align="center">

<!-- prettier-ignore-start -->

[![npm downloads](https://img.shields.io/npm/dw/transform-obj)](https://www.npmjs.com/package/transform-obj/v/latest)
[![License](https://img.shields.io/github/license/ioofy/transform-obj)](https://github.com/ioofy/transform-obj/blob/main/LICENSE)
<img id="build-badge" alt="Build badge" src="https://deno.bundlejs.com/badge?q=transform-obj%401.1.1">

<!-- prettier-ignore-end -->

</div>

## Usage

Run one of the following command inside your project directory to install the package:

    $ npm i transform-obj
    or
    $ yarn add transform-obj

<table>
<tr>
<td>Input</td>
<td>Output</td>
</tr>
<tr>
<td>

```typescript
import { transformToCamelCase } from "transform-obj";

const someData = [
  {
    id: 1,
    status_avaliable_online: true,
  },
];

const transform = transformToCamelCase(someData);
```

</td>

<td>

```typescript
const someData = [
  {
    id: 1,
    statusAvaliableOnline: true,
  },
];
```

</td>
</tr>
</table>

and support for nested objects or nested arrays.

## License

[MIT](./LICENSE)
