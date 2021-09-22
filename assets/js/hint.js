'use strict';

const cookies = document.cookie;

const img = ['9', '2', '1', '8', '7', '6'];

for (let i = 1; i <= 9; i++) {
  if (cookies.includes(`stage${i}=1`)) {
    $(`#${img[i - 1]}`).css('opacity', '1');
    $(`#stage${i}`).removeClass('shadow');
  }
}