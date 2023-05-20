# Vite Plugin - Remove Attributes

This Vite plugin is specifically designed for Vue.js projects. It allows the removal of specified attributes in
production builds, supporting a variety of options like file extensions, attributes, ignored folders, and files.

<p align="center">

[![vue version](https://img.shields.io/npm/v/remove-attr.svg)](https://www.npmjs.com/package/remove-attr)
[![vue version](https://img.shields.io/badge/vite-4.3.2-brightgreen.svg)](https://www.npmjs.com/package/remove-attr)

</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Prerequisites](#prerequisites)
    - [Examples](#examples)
- [License](#license)

## Features

1. Removes specified attributes in production builds of Vue.js projects.
2. Allows you to specify the file extensions to be considered.
3. Can ignore certain folders or files based on configuration.
4. Ensures clean production code by removing unnecessary attributes, like 'data-testid' used in testing.

## Installation

You can install this plugin through npm:

```sh
npm install --save-dev remove-attr
```

## Usage

### Prerequisites

To use this plugin, you need to have a Vite project set up. Import and use the plugin in your vite.config.js or
vite.config.ts file.

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeAttr from 'remove-attr'

export default defineConfig({
    plugins: [
        vue(),
        removeAttr({
            extensions: [ 'vue' ],
            attributes: [ 'data-testid' ]
        })
    ]
})

```
<br /> 

## Examples

#### Example 1: Removing 'data-testid' attributes from '.vue' files

This configuration will remove 'data-testid' attributes from all '.vue' files in the production build.

```typescript
export default defineConfig({
    plugins: [
        vue(),
        removeAttr({
            extensions: [ 'vue' ],
            attributes: [ 'data-testid' ]
        })
    ]
})
```
<br /> 

#### Example 2: Ignoring specific folders and files

This configuration will remove 'data-testid' and 'data-id' attributes from all '.vue', '.ts', and '.js' files, with the exception of those in the 'src/tests' and 'src/utilities' folders, as well as the 'Home.vue', 'src/components/Modal.vue', and 'src/layouts/LayoutAuth.vue' files.
```typescript
export default defineConfig({
    plugins: [
        vue(),
        removeAttr({
            extensions: [ 'vue', "ts", "ts" ],
            attributes: [ 'data-testid', "data-id" ],
            ignoreFolders: [ 'src/tests', "src/utilities" ],
            ignoreFiles: [ 'Home.vue', 'src/components/Modal.vue', "src/layouts/LayoutAuth.vue" ]
        })
    ]
})
```

<br /> 

## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/remove-attr/blob/main/LICENSE)


