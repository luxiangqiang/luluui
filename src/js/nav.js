/**
 * 2020/5/14
 * 导航栏
 */

const Util = require('../utils/utils.js').Util;

function Navigation(options) {
  this.options = $.extend({}, options);
  this.init();
}

// ->初始化
Navigation.prototype.init = function() {
  // 验证参数
  methods.dataValidata(this);
  // 拿到 nav 实例
  methods.adapterDOMByNav(this);
};

// ->私有方法
var methods = {
  /**
   * 数据验证
   * @param {*} nav
   */

  dataValidata: function(nav) {
    var { ele } = nav.options;
    if (!ele) {
      $.error('ele 属性不存在！');
    } else {
      if (Util.isJQuery(ele)) ele = $(ele);
      if ($(ele).length < 1) {
        $.error('页面不存在 ele 节点');
      }
    }
  },
  adapterDOMByNav: function() {},

  catalogue: function() {}
};

module.exports = {
  nav: Navigation
};
