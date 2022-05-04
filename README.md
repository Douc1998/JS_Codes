# EventEmitter-Wheel

## 介绍
`EventEmitter` 可以提供我们实现**事件的发布和订阅**。

`Node.js` 已经提供了封装好的 `EventEmitter` 供我们使用，通过 `events` 模块可以使用。
```
const eventEmitter = require('events').EventEmitter;
```

**下面我们自己实现了一个简易的[EventEmitter]()。**

## 依赖
+ JavaScript
+ ES6

## 使用
```js
import { eventEmitter } from 'path/EventEmitter.js';
```
或
```html
<script src='path/eventEmitter.js'></script>
```

## 功能

### on
添加一个事件并发布。
```js
eventEmitter.on(eventName, func)
```
+ eventName 事件名称
+ func 监听函数

### emit
触发某个事件。
```js
eventEmitter.emit(eventName, ...args)
```
+ eventName 事件名称
+ args 监听函数的形参

### off
删除已发布的一个事件。
```js
eventEmitter.off(eventName, func)
```
+ eventName 事件名称
+ func 监听函数

### once
添加一个只能触发一次的事件，执行后将自动被删除。
```js
eventEmitter.once(eventName, func)
```
+ eventName 事件名称
+ func 监听函数

### clear
清除一个事件或所有事件。
```js
eventEmitter.clear(eventName)
```
+ eventName 事件名称
