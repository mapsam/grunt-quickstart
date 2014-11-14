'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: {
        src: ['src/js/*.js']
      }
    },
    jshint: {
      files: ['src/js/*.js']
    },
    browserify: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'dest/static/js/<%= pkg.name%>-<%= pkg.version%>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version%> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>-<%= pkg.version%>.min.js': ['js/<%= pkg.name%>-<%= pkg.version%>.js']
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
        tasks: ['build-css'],
        options: {
          event: [ 'changed', 'added', 'deleted'],
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('build-css',['sass']);
  grunt.registerTask('build', ['clean','uglify','sass']);
  grunt.registerTask('package', ['build']);
  grunt.registerTask('default', ['build-css']);
  grunt.registerTask('watcher', ['watch']);

};
