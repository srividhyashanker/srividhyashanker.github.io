
$(document).ready(function() {
		$("#picDiv").hide();
		$("#picDiv1").hide();
		$("#picDiv2").hide();

 });

    $("#home").click(function(){
		$("#homepic").show();
		$("#picDiv").hide();
		$("#picDiv1").hide();
		$("#picDiv2").hide();
		
		$("#picDiv3").hide();
    });
	 $("#a").click(function(){
		$("#homepic").hide();
		$("#picDiv").show();
		$("#picDiv1").hide();
		$("#picDiv2").hide();
		
		$("#picDiv3").hide();
    });
	 $("#b").click(function(){
		$("#homepic").hide();
		$("#picDiv").hide();
		$("#picDiv1").show();
		$("picDiv2").hide();
		
		$("#picDiv3").hide();
    });
	 $("#c").click(function(){
		$("#homepic").hide();
		$("#picDiv").hide();
		$("#picDiv1").hide();
		$("#picDiv2").show();
		$("#picDiv23").hide();
    });
	$("#d").click(function(){
		$("#homepic").hide();
		$("#picDiv").hide();
		$("#picDiv1").hide();
		$("#picDiv2").hide();
		$("#picDiv3").show();
		
    });

