module.exports = function() {

var less;

less = {
    options: {
        compress : true,
        sourceMap: false,
    },
    style: {
      files: {
        'static/css/main.min.css': 'assets/less/main.less'
      }
    },
  };

return less;

};
