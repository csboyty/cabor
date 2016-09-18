define(["jquery","juicer", "app/config", "jquery.cookie"],
    function($,juicer,config){


        var totalMoney=0;
        var taiMianPrice=config.allData.custom.taiMian.price;
        var shangFanPrice=config.allData.custom.shangFan.price;
        var totalCustomMoney=0;
        var taiMian,shangFan;

        return {
            init:function(){
                var data,tpl,html,style,series;
                var storeInfo=JSON.parse($.cookie("storeInfo"));
                style=storeInfo.style.value;
                series=storeInfo.style.series.value;
                totalMoney=storeInfo.style.series.totalMoney;


                $("#selectStyle").text(config.allData.style[style].name);
                $("#selectSeries").text(config.allData.style[style].series[series].name);
                $("#selectShape").text(storeInfo.style.series.shape);
                $("#selectTotalM").text(storeInfo.style.series.totalM);
                $("#selectBaseTotalMoney").text(storeInfo.style.series.totalMoney);
                $("#selectTotalMoney").text(storeInfo.style.series.totalMoney);

                data={
                    list:config.allData.custom.taiMian["1"].child
                };
                tpl=$("#taiMianTpl").html();
                html=juicer(tpl,data);
                $("#taiMianList").html(html);
            },

            changeTaiMianList:function(type){
                var data,tpl,html;
                data={
                    list:config.allData.custom.taiMian[type].child
                };
                tpl=$("#taiMianTpl").html();
                html=juicer(tpl,data);
                $("#taiMianList").html(html);

                if(taiMian){
                    totalCustomMoney-=taiMianPrice;
                    totalMoney-=taiMianPrice;
                    $("#selectCustomTotalMoney").text(totalCustomMoney);
                    $("#selectTotalMoney").text(totalMoney);
                }
                taiMian="";
            },

            taiMianItemSelect:function(value){
                if(!taiMian){
                    totalCustomMoney+=taiMianPrice;
                    totalMoney+=taiMianPrice;
                    $("#selectCustomTotalMoney").text(totalCustomMoney);
                    $("#selectTotalMoney").text(totalMoney);
                }
                taiMian=value;
            },

            shangFanItemSelect:function(value){
                shangFan=value;
                totalCustomMoney+=shangFanPrice;
                totalMoney+=shangFanPrice;
                $("#selectCustomTotalMoney").text(totalCustomMoney);
                $("#selectTotalMoney").text(totalMoney);
            },

            storeInfo:function(){
                var storeInfo=JSON.parse($.cookie("storeInfo"));
                storeInfo.custom={
                    taiMian:taiMian,
                    shangFan:shangFan,
                    totalMoney:totalCustomMoney
                };
                $.cookie("storeInfo",JSON.stringify(storeInfo));
            }
        }
    });