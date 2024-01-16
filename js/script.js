$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

// MVボタン
  document.addEventListener('DOMContentLoaded', function() {
      // '.scroll-btn' ボタンがクリックされたときのイベントリスナー
    var scrollBtn = document.querySelector('.scroll-btn');
    scrollBtn.addEventListener('click', function() {
      // 'works' セクションにスムーズスクロールする
      var worksSection = document.getElementById('works');
      worksSection.scrollIntoView({ behavior: 'smooth'});
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.querySelector('.scroll-btn');
  
    scrollBtn.addEventListener('mouseover', function() {
      scrollBtn.textContent = 'View My Works'; // マウスオーバー時のテキストに変更
    });
  
    scrollBtn.addEventListener('mouseout', function() {
      scrollBtn.textContent = 'ここをクリック！'; // マウスアウト時のテキストに戻す
    });
  });
  