/**
 * 工具类
 */

function Util() {}

/* 判断 jQuery 对象 */
Util.isJQuery = function(obj){
  return obj instanceof jQuery;
};

module.exports = {
  Util
};