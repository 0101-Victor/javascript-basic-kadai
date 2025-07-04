// ボタン要素とテキスト要素を取得する
const button = document.getElementById('btn');
const textElement = document.getElementById('text');

// ボタンにクリックイベントを設定する
button.addEventListener('click', function () {
  textElement.textContent = 'ボタンをクリックしました';
});
