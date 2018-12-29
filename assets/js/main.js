

$("#block1").css("background",'url("images/home1.jpg")');
$("#block2").css("background",'url("images/home3.jpg")');
// $("#block4").css("background",'url("images/ray-zhuang-1249999-unsplash.jpg")');

$(window).scroll(function(){

        var velocity = 0.01;
        var scrollVal = $(this).scrollTop();

        
        $('#content1').css('transform','translate(0px,-'+scrollVal/7+'%)');
        var height = $('#block1').height();
        $('#block1').css('backgroundPosition', '0% ' + -Math.round((height - scrollVal)/5 ) +  'px');
        
        

        if($(window).scrollTop() > $("#block2").offset().top){
                $('#content2').css('transform','translate(0px,-'+(scrollVal-$("#block2").offset().top)/7+'%)');
                var height = $('#block2').height();
                $('#block2').css('backgroundPosition', '0% ' + -Math.round((height - scrollVal)/5 ) +  'px');
        }
        
        if($(window).scrollTop() > $("#block3").offset().top){
		$('#content3').css('transform','translate(0px,-'+(scrollVal-$("#block3").offset().top)/7+'%)');
                var height = $('#block3').height();
                $('#block3').css('backgroundPosition', '0% ' + -Math.round((height - scrollVal)/5 ) +  'px');
        }
        
        if($(window).scrollTop() > $("#block4").offset().top){
                $('#content4').css('transform','translate(0px,-'+(scrollVal-$("#block4").offset().top)/7+'%)');
                var height = $('#block4').height();
                $('#block4').css('backgroundPosition', '0% ' + -Math.round((height - scrollVal)/5 ) +  'px');
        }
        
        if($(window).scrollTop() > $("#block5").offset().top){
                $('#content5').css('transform','translate(0px,-'+(scrollVal-$("#block5").offset().top)/7+'%)');
                var height = $('#block5').height();
                $('#block5').css('backgroundPosition', '0% ' + -Math.round((height - scrollVal)/5 ) +  'px');
	}
});

(function($) {
        $(function() {
         $('.btn-toggle').click(function() {
                 var status = $(this).attr('status');
                 if(status == '0'){
                      $('.menu').show();
                      $(this).attr('status','1');
                 }
                 else{
                      $('.menu').hide();
                      $(this).attr('status','0');
                 }
                
              });
        });
})(jQuery);