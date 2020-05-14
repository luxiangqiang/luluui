/**
 * Created by hasee on 2020/4/17
 * 功能:入口文件
 */
import $ from 'expose-loader?$!jQuery';


// 引入 CSS 样式
require('../less/other.less');  // 其他样式
require('../less/layout.less'); // 布局样式
require('../less/nav.less');    // 导航样式

// 引入功能函数
var htmlEncode = require('./code.js');          // 代码块
var Navigation = require('./nav.js');    // 导航组件

// 挂载组件
window.Nav = Navigation.nav;


// 引入 JS
require('./test.js');

// 执行函数
htmlEncode();

// 渲染后加载
// $(function(){
//   Navigation.methods.catalogue();
// });