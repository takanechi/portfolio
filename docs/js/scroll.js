$(function(){
	let scrollStart = $('.apper').offset().top; //ページ上部からの距離を取得
	let scrollEnd = $('.scroll_end').offset().top; //ページ上部からの距離を取得
	let distance = 0;
   
	$(document).scroll(function(){
	  distance = $(this).scrollTop(); //スクロールした距離を取得

	  if (scrollStart <= distance) { 
		$('.btn__potision').addClass('active_btn'); //class『fixed』を追加
	  } else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
		$('.btn__potision').removeClass('active_btn'); //class『fixed』を削除
	  }

	  if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
		$('.btn__potision').addClass('none'); //class『none』を追加
	  } else{
		$('.btn__potision').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
	  }
	});      
  });
