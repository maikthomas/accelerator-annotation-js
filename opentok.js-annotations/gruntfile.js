module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
      blanket_mocha: {
            options: {
                run: true,
                reporter: 'Min',
                threshold: 70
            },
            files: {
                src: 'test/*.html'
            }
      },
      karma : {
          options: {
              configFile: 'karma.conf.js',
              files: [
                  'node_modules/chai/chai.js',
                  'https://static.opentok.com/v2/js/opentok.min.js',
                  'https://code.jquery.com/jquery-1.10.2.js',
                  'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
                  'node_modules/opentok-solutions-logging/src/opentok-solutions-logging.js',
                  'src/acc-pack-annotation.js',
                  'src/annotation-widget.js',
                  'test/components/accelerator-pack.js',
                  'test/acc-pack-annotation-test.js',
                  'test/index.html'
              ]
          },
          dev: {
              browsers: ['Chrome', 'Firefox']
          },
          prod: {
              singleRun: true,
              browsers: ['sl_chrome']
          }
      }
    });
    grunt.registerTask('default', ['blanket_mocha']);
};
