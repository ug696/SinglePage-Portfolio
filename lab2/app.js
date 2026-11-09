$(function () {
  let notes = [];
  function render() {
    const topic = $('#filter').val();
    const visible = notes.filter(n => topic === 'all' || n.topic === topic);
    $('#cards').empty();
    visible.forEach(n => {
      const card = $('<article>').addClass('card');
      $('<span>').addClass('tag').text(n.topic).appendTo(card);
      $('<h3>').text(n.title).appendTo(card);
      $('<p>').text(n.body).appendTo(card);
      card.appendTo('#cards');
    });
    $('#status').text('Ajax 載入成功：共 ' + notes.length + ' 則，目前顯示 ' + visible.length + ' 則。');
  }
  $('#theme').on('click', function () {
    const dark = $('body').toggleClass('dark').hasClass('dark');
    $(this).attr('aria-pressed', String(dark)).text(dark ? '切換淺色模式' : '切換深色模式');
  });
  $('#load').on('click', function () {
    const button = $(this).prop('disabled', true);
    $('#status').text('正在讀取 notes.json…');
    $.getJSON('notes.json').done(function(data) {
      if (!Array.isArray(data) || !data.every(n => typeof n.topic === 'string' && typeof n.title === 'string' && typeof n.body === 'string')) {
        $('#status').text('資料格式錯誤，請檢查 notes.json。'); return;
      }
      notes = data; render();
    }).fail(function () {
      $('#status').text('載入失敗，請確認網路與 notes.json 路徑，再按一次重試。');
    }).always(function () { button.prop('disabled', false); });
  });
  $('#filter').on('change', function () {
    if (notes.length) render();
  });
});