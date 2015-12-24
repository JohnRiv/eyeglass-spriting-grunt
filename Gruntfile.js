module.exports = function(grunt) {

  var path = require("path");
  var eyeglass = require("eyeglass");

  var options = {
    sourceMap: true
  };

  grunt.initConfig({
    sass: {
      options: eyeglass(options),
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/sass/',
          src: '**/*.scss',
          dest: 'assets/css/',
          ext: '.css'
       }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};
