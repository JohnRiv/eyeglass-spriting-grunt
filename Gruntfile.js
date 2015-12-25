module.exports = function(grunt) {

  var path = require("path");
  var eyeglass = require("eyeglass");

  var assetsDir = path.join(__dirname, "assets");

  grunt.initConfig({
    sass: {
      options: eyeglass({
        sourceMap: true,
        eyeglass: {
          buildDir: path.join(assetsDir, "images"),
          httpRoot: '../images',
          assets: {
            sources: [{
              directory: assetsDir,
              pattern: "images/**/*.png"
            }]
          }
        }
      }),
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
