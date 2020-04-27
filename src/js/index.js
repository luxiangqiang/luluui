/**
 * Created by hasee on 2020/4/17
 * 功能:入口文件
 */
import $ from 'expose-loader?$!jQuery';


// 引入 CSS 样式
require('../less/layout.less'); // 布局样式

// 引入 JS
require('./test.js');

console.log($);