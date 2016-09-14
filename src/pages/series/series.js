define(["jquery","juicer", "app/config", "jquery.cookie"],
    function($,juicer,config){
        return {
            init:function(){
                var style=location.hash;
                var tpl=$("#tpl").html();
                var storeInfo,html,data;

                style=style.substr(1);
                storeInfo={
                    style:{
                        value:style
                    }
                };
                $.cookie("storeInfo",JSON.stringify(storeInfo));

                data={
                    list:config.objToArray(config.allData.style[style].series)
                };
                html=juicer(tpl,data);
                $("#list").html(html);
            }
        }
});