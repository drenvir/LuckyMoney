jQuery(function($){
    var r = $('.results');

    $('.trigger-show-results').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if( r.is(':visible') ){
            r.slideUp();
        }else{
            r.slideDown();
        }
    });

    $('.main-part, .trigger-close').on('click', function(event) {
        event.preventDefault();
        r.slideUp();
    });
	
	$('#submit').on('click', function(){
		var myVar = setInterval(function(){ 
			document.getElementById("n1").innerHTML = Math.floor((Math.random() * 6));
			document.getElementById("n2").innerHTML = Math.floor((Math.random() * 10));
			document.getElementById("n3").innerHTML = Math.floor((Math.random() * 10));
		}, 10);
		
		setTimeout(function(){
			clearInterval(myVar);
		}, 1000);
	});
	
	$('.chonGiai').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("giaiDangQuay").innerHTML = event.toElement.innerHTML;
    });

});