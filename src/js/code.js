module.exports = function() {
  $('.lulu-code .lulu-code-content').each(function() {
    var html = $(this).html();
    $(this).empty();

    // 转义后的 html
    var htmlEncode = (function HTMLEncode(html) {
      var temp = $('<div></div>');
      temp.text(html);
      return temp.html();
    })(html);
    
  });
};