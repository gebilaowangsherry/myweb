const images = document.querySelectorAll(".container .cell img");
// 为每张图片添加点击事件
images.forEach((img) => {
  img.addEventListener("click", function () {
    // 获取模态框和图片元素
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    // 设置模态框中的图片源为当前点击的图片
    modalImg.src = this.src;
    // 显示模态框
    modal.style.display = "block";
  });
});

// 点击模态框外部关闭模态框
window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};
