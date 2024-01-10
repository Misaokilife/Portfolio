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

//メインビジュアル画像の切り替え

  // JavaScript コード
  document.addEventListener('DOMContentLoaded', function() {
  // ボタン要素を取得
  var button = document.querySelector('.scroll-btn');
  // 新しいボタンコンテナ要素を取得
  var newButtons = document.querySelector('.new-buttons');
  // 画像要素を取得
  var image = document.querySelector('.mv-container img');

  // 最初は新しいボタンコンテナを非表示にする
  newButtons.style.display = 'none';

  // ボタンがクリックされたときのイベントリスナーを設定
  button.addEventListener('click', function() {
      // 画像のsrc属性を 'main2.png' に変更
      image.src = 'img/main2.png';
      // 元のボタンを非表示にする
      button.style.display = 'none';
      // 新しいボタンコンテナを表示する
      newButtons.style.display = 'flex';
  });
  });

  // JavaScript コード
document.addEventListener('DOMContentLoaded', function() {
  // 各要素を取得
  var button = document.querySelector('.scroll-btn');
  var image = document.querySelector('.mv-container img');
  var newButtons = document.querySelector('.new-buttons'); // 新たなボタンのコンテナ

// .mv-containerの高さを取得し、.new-buttonsに適用
  var mvContainer = document.querySelector('.mv-container');
  var mvContainerHeight = mvContainer.clientHeight;
  newButtons.style.height = mvContainerHeight + 'px';

  // 元のボタンがクリックされたときのイベントリスナー
  button.addEventListener('click', function() {
      // 画像のsrc属性を 'main2.png' に変更
      image.src = 'img/main2.png';
      
      // 元のボタンを非表示にする
      button.style.display = 'none';
      
      // 新たなボタンを表示する
      newButtons.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // 'VIEW MY WORKS' ボタン要素を取得
  var viewWorksButton = document.querySelector('.button-1');

  // 'ABOUT' ボタン要素を取得
  var aboutButton = document.querySelector('.button-2');

  // 'VIEW MY WORKS' ボタンがクリックされたときのイベントリスナー
  viewWorksButton.addEventListener('click', function() {
    // 'works' セクションにスクロールする
    var worksSection = document.getElementById('works');
    worksSection.scrollIntoView({behavior: 'smooth'});
  });

  // 'ABOUT' ボタンがクリックされたときのイベントリスナー
  aboutButton.addEventListener('click', function() {
    // 'about' セクションにスクロールする
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({behavior: 'smooth'});
  });
});
