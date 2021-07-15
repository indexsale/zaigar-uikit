# Zaigar Finance UIkit

[![Version](https://img.shields.io/npm/v/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit)

Zaigar Finance UIkit is a set of React components and hooks used to build pages on Zaigar Finance's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @zaigar-finance/uikit`

## Setup

### Theme

Before using Zaigar Finance UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@zaigar-finance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@zaigar-finance/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
