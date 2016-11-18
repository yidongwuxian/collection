var setting = {
    view: {
        showLine: false,
        showIcon: false,
        selectedMulti: false,
        dblClickExpand: false,
        addDiyDom: addDiyDom
    },
    edit: {
        enable: true
    },
    data: {
    	key:{
    		name: "industryTypeName"
    	},
        simpleData: {
            enable: true,
            idKey: "industryTypeCd",
			pIdKey: "parentIndustryTypeCd",
			rootPId: 0
        }
    }
};
//点击span添加到投资意向的value里
function addDiyDom(treeId, treeNode) {
    $("#" + treeNode.tId + "_span").click(function(){
    	$('#loansIntos').val($(this).text());
    	$(".treeMask").hide();  
		$(".hideZbox").hide();
    })

};
//MUI滚动插件
(function($) {
	$.init();
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005,
		indicators: true
	});
})(mui); 

$(function(){
	//初始化zTree start
	var treeObj = $("#invest_to");
        treeObj.addClass("showIcon");
        var zNodes = null;
        $.ajax({
            type: "GET",
            url: "json/getAllIndustry.json",
            dataType: "json",
            success: function (res) { 
                zNodes = res;
                $.fn.zTree.init(treeObj, setting, zNodes);
            }
    	});
    //zTree end
    
    //点击input,触发弹层
    $('#loansIntos').click(function(){
		popCenterWindow();
	});
});