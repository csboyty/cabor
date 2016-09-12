requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
        //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
    },*/
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery',"app/config"],
    function   ($,config) {
        console.log(config.version);
    });