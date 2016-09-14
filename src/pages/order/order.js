define(["jquery","juicer", "app/config", "jquery.cookie"],
    function($,juicer,config){

        return {
            init:function(){
                var storeInfo=JSON.parse($.cookie("storeInfo"));
                var style,series,tpl,html,data,totalMoney,cTotalMoney;

                style=storeInfo.style.value;
                series=storeInfo.style.series.value;
                totalMoney=storeInfo.style.series.totalMoney;
                cTotalMoney=storeInfo.custom?storeInfo.custom.totalMoney:0;
                $("#totalMoney").text(Number(totalMoney)+Number(cTotalMoney));

                tpl=$("#baseInfoTpl").html();
                html=juicer(tpl,{
                    style:config.allData.style[style].name,
                    series:config.allData.style[style].series[series].name,
                    shape:storeInfo.style.series.shape,
                    totalM:storeInfo.style.series.totalM
                });
                $("#baseInfo").html(html);

                tpl=$("#normalInfoTpl").html();
                html=juicer(tpl,{
                    totalMoney:storeInfo.style.series.totalMoney,
                    menXing:storeInfo.style.series.menXing,
                    menSe:storeInfo.style.series.menSe,
                    taiSe:storeInfo.style.series.taiSe,
                    laShou:storeInfo.style.series.laShou
                });
                $("#normalInfo").html(html);

                tpl=$("#customInfoTpl").html();
                html=juicer(tpl,{
                    totalMoney:storeInfo.custom?storeInfo.custom.totalMoney:0,
                    taiMian:storeInfo.custom?storeInfo.custom.taiMian:"",
                    shangFan:storeInfo.custom?storeInfo.custom.shangFan:""
                });
                $("#customInfo").html(html);

            }
        }
    });