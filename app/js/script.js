// $(document).ready(function(){
//   $('.center_slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// })
   

    $(function(){
            $('.selector_2').click(function(){
                $('.selector_2').toggleClass('selected');
                $('.selector_1').removeClass('selected');
            });
            $('.selector_1').click(function(){
              $('.selector_1').toggleClass('selected');
              $('.selector_2').removeClass('selected');
            });
        });

$(function(){
            $('.free').click(function(){
                $('.free').toggleClass('changed');
                $('.pro').removeClass('changed');
            });
            $('.pro').click(function(){
              $('.pro').toggleClass('changed');
              $('.free').removeClass('changed');
            });
        });



   
