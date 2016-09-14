requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
     //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
     },*/
    paths: {
        app: '../app',
        page:'../../../pages/order'
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
requirejs(["page/order"],
    function (order) {
        //do something here
        order.init();

    });