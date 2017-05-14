module.exports = function() {

var watch;

watch = {
  options: {
    spawn: false
  },
  configFiles: {
    files: [ 'Gruntfile.js', 'grunt/*.js' ],
    options: {
      reload: true
    }
  },
  css: {
    files: [ 'assets/less/*.less', 'assets/less/**/*.less','assets/less/**/**/*.less' ],
    tasks: [ 'less' ]
  },
  js: {
    files: [ 'assets/js/*.js', 'assets/js/**/*.js' ],
    tasks: [ 'uglify' ]
  },
};

return watch;

};
