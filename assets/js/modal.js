'use strict';

const rightData = [
  ['つくえした', '9'],
  ['1231', '2'],
  ['黄色い飾りのある部屋', '1'],
  ['ばつ', '8'],
  ['ばつ', '7'],
  ['こんぼう', '6'],
  ['おおかみ']
];

$('#answer').on('show.bs.modal', (e) => {
  const num = Number($('main').data('num')) - 1;
  if ($('input').val() == rightData[num][0] || $('.checked').text() == rightData[num][0]) {
    $('#result').text('正解！');
    if (num < 6) {
      $('#hint').text('紙切れが落ちていた…　犯人の手がかりになるかもしれない');
      $('#hint-img').html(`<img src="./assets/images/${rightData[num][1]}.png" alt="" class="w-50 d-block mx-auto my-5 shadow">`);
      document.cookie = `stage${num + 1}=1`;
    } else {
      $('.modal-body').html(`<div class="mx-auto mt-3 mb-5 shadow w-50 text-center" style="background-color: #c3c6e4; color: rgb(109, 82, 84);">
      <a href="end.html" class="text-reset"><h5 class="p-3">おおかみのところへ行こう！</h5></a>
    </div>`)
    }
  }
});

$('.list-group-item').click((e) => {
  $('.list-group-item').removeClass('checked');
  $(e.target).addClass('checked');
});