define(["jquery","juicer", "app/config", "jquery.cookie"],
    function($,juicer,config){

        var totalM=0;
        var totalMoney=0;
        var style=1;
        var series=1;
        var shape="";
        var menXing=1;
        var menSe=1;
        var taiSe=1;
        var laShou=1;

        return {
            init:function(){
                var hash=location.hash;
                var storeInfo=JSON.parse($.cookie("storeInfo"));
                var tpl,html,data;

                style=storeInfo.style.value;
                series=hash.substr(1);

                $("#selectStyle").text(config.allData.style[style].name);
                $("#selectSeries").text(config.allData.style[style].series[series].name);

                data={
                    list:config.objToArray(config.allData.style[style].series[series]["menXing"])
                };
                tpl=$("#menXingTpl").html();
                html=juicer(tpl,data);
                $("#menXingList").html(html);

                data={
                    list:config.objToArray(config.allData.style[style].series[series]["menSe"])
                };
                tpl=$("#menSeTpl").html();
                html=juicer(tpl,data);
                $("#menSeList").html(html);

                data={
                    list:config.objToArray(config.allData.style[style].series[series]["taiSe"])
                };
                tpl=$("#taiSeTpl").html();
                html=juicer(tpl,data);
                $("#taiSeList").html(html);

                data={
                    list:config.objToArray(config.allData.style[style].series[series]["laShou"])
                };
                tpl=$("#laShouTpl").html();
                html=juicer(tpl,data);
                $("#laShouList").html(html);

                $("#size li").hide();

            },

            storeInfo:function(){
                var storeInfo=JSON.parse($.cookie("storeInfo"));
                storeInfo.style.series={
                    value:series
                };
                storeInfo.style.series.shape=shape;
                storeInfo.style.series.totalM=totalM;
                storeInfo.style.series.totalMoney=totalMoney;
                storeInfo.style.series.menSe=menSe;
                storeInfo.style.series.menXing=menXing;
                storeInfo.style.series.taiSe=taiSe;
                storeInfo.style.series.laShou=laShou;

                $.cookie("storeInfo",JSON.stringify(storeInfo));
            },

            storeValue:function(type,value){
                switch(type){
                    case "menXing":
                        menXing=value;
                        break;
                    case "menSe":
                        menSe=value;
                        break;
                    case "taiSe":
                        taiSe=value;
                        break;
                    case "laShou":
                        laShou=value;
                        break;
                }
            },

            selectShape:function(value){
                $("#size input").val("");
                $("#totalMValue").text("");
                switch(value){
                    case "一字型":
                        $("#size li").hide();
                        $("#size li:eq(0)").show();
                        break;
                    case "L字型":
                        $("#size li").show();
                        $("#size li:eq(2)").hide();
                        break;
                    case "U字型":
                        $("#size li").show();
                        break;
                }

                shape=value;
                $("#selectShape").text(value);
            },

            getTotalM:function(){
                totalM=0;
                $("#size input").each(function(index,el){
                    totalM+=Number($(this).val());
                });
                totalMoney=totalM*Number(config.allData.style[style].series[series].price);
                $("#selectTotalM").text(totalM);
                $(".selectTotalMoney").text(totalMoney);
                $("#totalMValue").text(totalM);
            }
        }
    });