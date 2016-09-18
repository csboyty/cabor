requirejs.config({
    baseUrl: 'static/js/lib',
    /*config:{
     //这里面可以防止全局配置，有多种语法，详见requirejs.cn文档
     },*/
    paths: {
        app: '../app',
        page:'../../../pages/custom'
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
requirejs(["page/custom"],
    function (custom) {

        custom.init();

        $(".taiMianType").click(function(){
            custom.changeTaiMianList($(this).data("type"));
            $(".taiMianType").addClass("btnGray");
            $(this).removeClass("btnGray");
        });

        $("#taiMianList").on("click","input[type='radio']",function(){
            custom.taiMianItemSelect($(this).val());
        });

        $("#shangFanList").on("click","input[type='radio']",function(){
            custom.shangFanItemSelect($(this).val());
        });

        $("#nextStep").click(function(){
            custom.storeInfo();
        });
    });