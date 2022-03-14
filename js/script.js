$(document).ready(function(){
    $('.slick-slider').slick({
      dots: true ,
    //   autoplay: true,
    //   autoplaySpeed:2000 ,
      prevArrow: $('.btn-prev'),
      nextArrow: $('.btn-next'),
    });
  });

  $(document).ready(function(){

    $(".edu-info").click(function(){
      var thisIndex = $(this).index();
      
      if( $(".hide-edu-wrap").eq(thisIndex).hasClass("active") ){
       
        $(".wrap>.hide-side").removeClass("active");
        
      } else {
        
        $(".hide-edu-wrap").addClass("active")
        $(".hide-side").addClass("active")
      }
    });
    
    $(".hide-side").click(function(){
      $(".hide-edu-wrap").removeClass("active")
      $(".hide-side").removeClass("active")
    })
  });

$(document).ready(function(){
  $('.slider-box').slick({
    dots:true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

})

$(document).ready(function(){
  $(".tab-btn").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var indexNum = $(this).index()
    $(".write-list").eq(indexNum).addClass("active")
    $(".write-list").eq(indexNum).siblings().removeClass("active")
    console.log(indexNum);
  });
  
});