'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      target: {
        src: 'dest/index.html'
      }
    },
    jshint: {
      files: ['src/js/*.js']
    },
    uglify: {
      dist: {
        files: {
          'dest/static/js/main.js': ['src/js/main.js']
        }
      }
    },
    sass: {                              
      dist: {                            
        options: {                       
          style: 'compact'
        },
        files: {
          'dest/static/css/site.css': 'src/sass/site.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/sass/*.scss',
        tasks: ['css'],
        options: {
          event: [ 'changed', 'added', 'deleted'],
        },
      },
    }
  });

  // Loading tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wiredep');

  // Tasks.  
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['wiredep', 'jshint', 'sass', 'uglify']);
  grunt.registerTask('bower', ['wiredep'])
  grunt.registerTask('css',['sass']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('watcher', ['watch']);

};
