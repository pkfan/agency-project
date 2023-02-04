// get all image after window loaded fully to improve performance
function loadSrcImages() {
  const allDataSource = document.querySelectorAll("img[data-src]");
  allDataSource.forEach((dataSource) => {
    const dataSrc = dataSource.getAttribute("data-src");
    dataSource.setAttribute("src", dataSrc);
  });
}

window.addEventListener("load", () => {
  loadSrcImages();
});
