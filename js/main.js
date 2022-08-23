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

  images.forEach(image => { // サムネイルのイメージを映すために使用
    const img = document.createElement('img');
    image.src = image;

    const li = document.createElement('li');
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  })
}
