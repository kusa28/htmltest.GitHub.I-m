// ゲーム要素の取得
const game = document.getElementById('game');

// スコアの初期化
let score = 0;

// クリックイベントの設定
game.addEventListener('click', (event) => {
  // 青いボールをクリックした場合
  if (event.target.classList.contains('blue-ball')) {
    // スコアを加算
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;

    // ボールを削除
    event.target.remove();
  }
});

// ボールの作成
function createBall() {
  // ボール要素の作成
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // ランダムな位置と色を設定
  const x = Math.floor(Math.random() * 450);
  const y = Math.floor(Math.random() * 450);
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
  if (Math.random() < 0.5) {
    ball.classList.add('blue-ball');
  } else {
    ball.classList.add('red-ball');
  }

  // ボールを追加
  game.appendChild(ball);
}

// ボールの自動生成
setInterval(createBall, 1000);
