requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
     //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
     },*/
    paths: {
        app: '../app',
        page:'../../../pages/shape'
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
requirejs(["page/shape"],
    function (shape) {
        //do something here
        shape.init();

        $(".nextStep").click(function(){
            shape.storeInfo();
        });

        $("#shape input:radio").click(function(){
            var value=$(this).val();
            shape.selectShape(value);
        });

        $("#size input").keyup(function(){
            shape.getTotalM();
        });

        $("#menXingList input:radio").click(function(){
            shape.storeValue("menXing",$(this).val());
        });
        $("#menSeList input:radio").click(function(){
            shape.storeValue("menSe",$(this).val());
        });
        $("#taiSeList input:radio").click(function(){
            shape.storeValue("taiSe",$(this).val());
        });
        $("#laShouList input:radio").click(function(){
            shape.storeValue("laShou",$(this).val());
        });
    });