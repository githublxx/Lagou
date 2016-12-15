module.exports = function(grunt){
    //任务配置
    grunt.initConfig({
        //读取package.json
        pkg :grunt.file.readJSON("package.json"),
        uglify: {
          options: {
            banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n',
                footer : "\n/*最后修改人:<%=pkg.author%>*/",
                mangle : true,
                preserveComments : false
            },
            build: {
                src: ['app/controller/*.js',
                      'app/service/*.js',
                      'app/directive/footer/footer.js',
                      'app/directive/swiper/swiper.js'
                     ],
                dest: "public/<%=pkg.name%>-<%=pkg.version%>.min.js"
            }
        },
        watch: {
            build: {
                files: ['app/controller/*.js',
                      'app/service/*.js',
                      'app/directive/footer/footer.js',
                      'app/directive/swiper/swiper.js'],
                tasks: ['uglify'],
                options: { spawn: false }
            }
        }

    });
    // 装载插件
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    //注册任务（也就是在终端输入grunt后要执行的任务）
    grunt.registerTask("default",["uglify","watch"]);
}