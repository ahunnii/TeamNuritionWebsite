$(document).ready(function(){

    /*App Variables*/
    var currentpage = 0;
	var pagewidth = $('.page').width();
	var position = 0;
	var marginnew = 0;
	
	/*Default Background Position*/
	$('#teamnutrition').css({backgroundPosition: '50% 0px'});


	$("div.frame a").click(function()
	{
	            /*Strip the link identifier to form just the ID*/
	            var id = this.id.replace("link", "");
				var currentLink = $(this);
				/*ID based hiding of the other frames*/
				position = -165*id;
				/*Define the offset at which the page for this frame is present*/
				marginnew =  pagewidth * id * -1;
				

				/*Animate the Page Slider to the new offset*/
				$('.pageslider').stop().animate({marginLeft: marginnew}, 800);
			
				/*Animate the header background*/
				$('#teamnutrition').stop().animate({backgroundPosition: '(50% ' + position +'px )'}, 500, function()
				{
				  var distance = 0;
				  var topdis   = -190;
				  var text     = currentLink.attr('alt');
				  var infoframe  = $('#infoframe');
				  

				  infoframe.html(text);
				  infoframe.css('margin-left', distance + 'px');
				  infoframe.css('margin-top', topdis + 'px');
				  infoframe.fadeIn();
				});
				
				

	           
				
	}, function()
	{
	   
	   $('#infoframe').hide();
				var id = this.id.replace("link", "");
				$('#teamnutrition').stop().animate({backgroundPosition: '(50% 0px)'}, 500 );	
				showTheRest();
	
	});
	


	function hideTheRest(id){
	
		 for (var i=1; i<5; i++){
			if (i!=id)
			{
				$('#frame' + i + ' a').css('display', 'block'); 
				$('#frame' + i).css('filter', 'alpha(opacity=90)');
				$('#frame' + i).stop().fadeTo("fast",0);
				$('#frame' + i + ' a').css('display', 'none');
				
				}
			}
			$('#infoframe').css('visibility','visible');				
		}
		

	function showTheRest(){
	    
		for (var i=1; i<5; i++){
				$('#frame' + i).stop().fadeTo("fast",0.9);
				$('#frame' + i).css('filter', 'alpha(opacity=90)');
			     $('#frame' + i + ' a').css('display', 'inline');
			      $('#frame' + i + ' a').css('display', 'block');    
			}
			
			
			$('#infoframe').css('visibility','visibility');
						
		}
});