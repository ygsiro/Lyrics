"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-mode");

  toggleBtn.addEventListener("click", () => {
    // bodyのクラスを切り替えるだけ！
    const isHiragana = document.body.classList.toggle("mode-vocal");

    // ボタンのテキスト更新
    toggleBtn.textContent = isHiragana ? "Default" : "Vocal";
  });
});
