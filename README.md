# rn-slide-switch

A simple React Native switch with effects

[![Version](https://img.shields.io/npm/v/open-source-npm-package-template.svg)](https://www.npmjs.com/package/rn-slide-switch)
[![Downloads/week](https://img.shields.io/npm/dw/open-source-npm-package-template.svg)](https://www.npmjs.com/package/rn-slide-switch)
[![License](https://img.shields.io/npm/l/open-source-npm-package-template.svg)](https://github.com/rafaelmrdyn/rn-slide-switch/blob/master/package.json)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

## Getting Started

### Installation

- with NPM
  
  ```$ npm install rn-slide-switch```

### Usage

<!-- usage --->

<p align="center">
    <img src="https://i.imgur.com/91tu3hz.gif" />
</p>

# Getting started

## How to use it
It's a pretty easy to use this library. This is the usage example :
```javascript

import React from 'react'
import SlideSwitch from 'rn-slide-switch'

const Preview = () => {
  return (
    <SlideSwitch 
        list={['option 1', 'option 2', 'option 3']} 
        initialIndex={2}
        activeViewStyle={{backgroundColor: 'blue'}} 
        activeTextStyle={{color: 'white'}}
        onChange={(i) => console.log(i)}
      />
  )
}

```

# Props
| propsName | propsType | isRequired | defaultProps |
| --------- | :-------: | :--------: | :----------: |
| list | `array` | `true` | [] |
| initialIndex | `number` | `false` | 0 |
| activeViewStyle | `object` | `false` | {backgroundColor: 'blue'} |
| activeTextStyle | `object` | `false` | {color: 'white'} |
| passiveViewStyle | `object` | `false` | {backgroundColor: 'white'} |
| passiveTextStyle | `object` | `false` | {color: 'black'} |

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/rafaelmrdyn"><img src="https://avatars3.githubusercontent.com/u/33260974?s=460&u=ca2b0f7882cdba1d90481ae471301b95181289d7&v=4" width="100px;" alt="Rafael Muradyan"/><br /><sub><b>Rafael Muradyan</b></sub></a><br /><a href="https://github.com/rafaelmrdyn" title="Code">💻</a></td>
  </tr>
</table>
