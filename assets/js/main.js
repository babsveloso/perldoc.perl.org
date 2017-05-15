$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('body').on('click', '.js-show-sidebar', function(e) {
    $('.sidebar').addClass('showSidebar');
  })
})
