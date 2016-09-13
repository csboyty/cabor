requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
     //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
     },*/
    paths: {
        app: '../app'
    },
    //引入没有用define定义的库
    shim:{
        juicer:{
            exports: 'juicer'
        }
    }
});

// Start the main app logic.
requirejs(['jquery', "juicer", "app/config"],
    function ($, juicer, config) {
        console.log(juicer);
        console.log(config.version);
    });