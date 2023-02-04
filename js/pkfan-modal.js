const pkfanModel = document.querySelector("#pkfan-model");
const pkfanClose = document.querySelector("#pkfan-close");

pkfanClose.addEventListener("click", () => {
  pkfanModel.classList.add("scale-0");
});

setTimeout(() => {
  pkfanModel.classList.remove("scale-0");
}, 8000);
