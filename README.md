# Doge Gold Floki Finance UIkit

[![Version](https://img.shields.io/npm/v/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit)

Doge Gold Floki Finance UIkit is a set of React components and hooks used to build pages on Doge Gold Floki Finance's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @Doge_Gold_Floki-finance/uikit`

## Setup

### Theme

Before using Doge Gold Floki Finance UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@Doge_Gold_Floki-finance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@Doge_Gold_Floki-finance/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
