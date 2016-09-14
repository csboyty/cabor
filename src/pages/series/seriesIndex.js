requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
     //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
     },*/
    paths: {
        app: '../app',
        page:'../../../pages/series'
    },
    //引入没有用define定义的库
    shim:{
        juicer:{
            exports: 'juicer'
        },
        'jquery.cookie': ['jquery']
    }
});

// Start the main app logic.
requirejs(["page/series"],
    function (series) {
        //do something here
        series.init();
    });