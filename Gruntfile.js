module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
            },
            dist: {
                files: {
                    'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'wwwroot/assets/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register tasks
    grunt.registerTask('default', ['sass', 'cssmin']);
};
