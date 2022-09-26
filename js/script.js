
//ヘッダーメニューバー
let $header = $('.header-inner'),
    PositionSet = 680

$(window).scroll(function () {
  var ScrollPos = $(window).scrollTop();
  if (ScrollPos > PositionSet) {
          $header.css('top', '0px');
  } else {
    $header.css('top','-80px')
      }
  });

//アクセスナビ開閉
$('.nav-access').click(function () {
  $('.access-outer').toggleClass('open');
  $('.all-blur , main , footer').toggleClass('active');
})

$('.access-close').click(function () {
  $('.access-outer').removeClass('open');
  $('.all-blur , main , footer').removeClass('active');
})

//アクセス部分の要素以外の所クリックで消えるやつ
$(document).on('click', function(e) {
	if(!$(e.target).closest('.access-outer , .menu-outer').length && !$(e.target).closest('.nav-access , .nav-menu').length){
		$('.access-outer , .menu-outer').removeClass('open');
    $('.all-blur , main , footer').removeClass('active');
	}
});

//ナビバージョン

$('.nav-menu').click(function () {
  $('.menu-outer').toggleClass('open');
  $('.all-blur , main , footer').toggleClass('active');
})

$('.menu-close').click(function () {
  $('.menu-outer').removeClass('open');
  $('.all-blur , main , footer').removeClass('active');
})

// $(document).on('click', function(e) {
// 	if(!$(e.target).closest('.menu-outer').length && !$(e.target).closest('.nav-menu').length){
// 		$('.menu-outer').removeClass('open');
//     $('.all-blur').removeClass('active');
// 	}
// });

