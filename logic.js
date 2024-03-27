let container = document.querySelector(".container");
let h1Tag = document.querySelector("h1");
let getBtn = document.querySelector("button");
let input = document.querySelector("input");

getBtn.addEventListener("click",() => {
  input.click();
});
container.addEventListener("dragover",(e) => {
  e.preventDefault();
  h1Tag.innerHTML = "Drop Image";
});
container.addEventListener("dragleave", () => {
  h1Tag.innerHTML = "Drag & Drop";
});

container.addEventListener("change", (upload));
container.addEventListener("drop",(e) => {
  e.preventDefault();
  input.files = e.dataTransfer.files;
  upload();
});

function upload() {
  let imageLink = URL.createObjectURL(input.files[0]);
  container.style.backgroundImage = `url(${imageLink})`;
  container.textContent = "";
}