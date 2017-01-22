module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['/public/**/*.jsx'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            options: {
                // Override defaults
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['express','watch']);
};
