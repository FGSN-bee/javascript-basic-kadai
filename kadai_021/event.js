// 要素を取得して代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// イベント処理
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
