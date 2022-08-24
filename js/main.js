'use strict';

{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',

  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main'); // mainのidを取得するため必要
  mainImage.src = images[currentIndex]; // メインイメージを映すためにcurrentIndexを代入

  images.forEach((image, index) => { // サムネイルのイメージを映すために使用
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) { // メイン選択中の画像のサムネの色が常時濃くなる
      li.classList.add('current');
    }
    li.addEventListener('click', () => { // liをクリックするとmainに画像反映
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current'); // サムネイルからcurrentクラスを取り除く(別でcurrentを使用するため)
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current'); // 改めてこちらでcurrentをあたえる
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  // nextボタンの設定
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) { // ここを入れると7の位置でnextを押すと0に戻る
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // prevボタンの設定
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) { // ここを入れると0の位置でprevを押すと7に移動する
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // playボタンでスライドショーを再生させ、pauseで停止させる設定
  let timeoutId; // clearTimeoutするのに必要

  function playSlideshow() { // クリックすると1秒(1000ミリ秒)後にスライドショーを実行
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if (isPlaying === false) { // クリックするとplayからpauseに表示が切り替わる設定
      playSlideshow();
      play.textContent = 'Pause';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'Play'; // pauseを押すとplayになるように設定

    }
    isPlaying = !isPlaying; // ボタンがクリックされるたびにisPlayingをtrueかfalseで切り替える
  });
}
