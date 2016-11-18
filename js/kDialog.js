 var windowHeight; 
 var windowWidth; 
 var popWidth; 
 var popHeight; 
 function popInit(){ 	
    windowHeight=$(window).height(); 
    windowWidth=$(window).width(); 
    $('.hideZbox .in').css('height',windowHeight);
    popHeight=$(".hideZbox").height(); 
    popWidth=$(".hideZbox").width(); 
    newTop=$(document).height()/2-300;
    console.log(newTop);
 } 

function popCenterWindow(){ 
    popInit(); 
 	$(".treeMask").show();
 	$(".hideZbox").show();
 	
 	if($(".hideZbox").css('display','block')){
		$(".treeMask").click(function(){
			$(".treeMask").hide();
 			$(".hideZbox").hide();
		});
	}
} 