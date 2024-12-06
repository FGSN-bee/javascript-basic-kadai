// 要素取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// イベント処理
button.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
