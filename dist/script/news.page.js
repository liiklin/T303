;(function ($) {
  var $list = $('#js-news-list');
  
  $.getJSON('../data.json')
    .success(function(data) {
      var html = [];
      
      for (var i = 0; i < data.length; i += 1) {
        html.push('<li class="f-cb">');
        html.push('<a href="' + data[i].url + '">');
        html.push(data[i].title);
        html.push('<span class="date">');
        html.push(data[i].date);
        html.push('</span>');
        html.push('</a>');
        html.push('</li>');
      }
      
      $list.html(html.join(''));
    })
  
})(jQuery);