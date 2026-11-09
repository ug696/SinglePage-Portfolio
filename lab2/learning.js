$(function() {
  const answers = ["git add index.html", "main", ".card", "6", "notes.json", "toggleClass"];
  const feedback = ["git add 只暫存內容，git commit 才建立提交。", "main 表示頁面主要內容，nav 是導覽區。", "class 使用 .，id 使用 #。", "count 是數字 6，ready 是布林值 true。", "$.getJSON 以 HTTP GET 取得 JSON，成功後執行 done。", "toggleClass 會在類別不存在時新增，存在時移除。"];
  let passed = {};
  try { passed = JSON.parse(localStorage.getItem('lab2-selfcheck-v1') || '{}'); } catch(e) { passed = {}; }
  function update() {
    let count=0;
    answers.forEach((answer,i) => {
      if(passed[i] === true) { count++; $('#result'+i).text('自我檢核通過。'+feedback[i]); }
    });
    $('#progress').text('謝宥祺 · 自我檢核 ' + count + ' / 6' + (count === 6 ? ' · 六項基礎題已通過' : ''));
  }
  $('.check').on('click',function() {
    const i=Number($(this).attr('data-index'));
    const value=$('#answer'+i).val().trim();
    if(value === answers[i]) {
      passed[i]=true;
      try { localStorage.setItem('lab2-selfcheck-v1',JSON.stringify(passed)); } catch(e) {}
      update();
    } else { $('#result'+i).text('再想一下：請重新閱讀本節範例，檢查大小寫與空格。'); }
  });
  update();
});