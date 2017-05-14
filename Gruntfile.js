/*global module:true*/
'use strict';

module.exports = function(grunt) {

  var uglify = require('./grunt/uglify')(),
      less   = require('./grunt/less')(),
      watch  = require('./grunt/watch')();

  grunt.initConfig({
      banner: '/* Perldoc - http://perdoc.perl.org */\n',
      uglify: uglify,
      less: less,
      watch: watch
  });

  [
    'grunt-contrib-uglify',
    'grunt-contrib-less',
    'grunt-contrib-watch',
  ].forEach( grunt.loadNpmTasks );

  // Tasks
  grunt.registerTask( 'default', ['uglify','less'] );

};
