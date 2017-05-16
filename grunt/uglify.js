module.exports = function() {

var uglify;

uglify = {
  options: {
    banner: '<%= banner %>',
    codegen: { ascii_only: true },
    report: 'min',
    sourceMap: false,
    preserveComments: false,
    //sourceMapIncludeSources: true,
  },
  main: {
    src: [
      'assets/js/libs/jquery-1.12.3.min.js',
      'assets/js/libs/bootstrap.min.js',
      'assets/js/libs/MooTools-More-1.6.0-compressed.js',
      'assets/js/perldoc.js',
      'assets/js/search.js',
      'assets/js/libs/highlight.pack.js',
      'assets/js/main.js',
    ],
    dest: 'static/js/main.min.js'
  },
};

return uglify;

};
