// modal svg
let bgBlack = document.querySelector(".backgaround-black");
let sideBarItem = document.querySelector("#sidebar-list-item");
let modalBox = document.querySelector(".modal");
let closeSvg = document.querySelector(".close-svg");
let checkSvg = document.querySelector(".check-svg");


sideBarItem.addEventListener("click", () => {
  modalBox.style.display = "block";
  bgBlack.style.backgroundColor = "rgba(" + "0," + "0," + "0," + "0.447";
  bgBlack.style.display = "block";
});
closeSvg.addEventListener("click", () => {
  modalBox.style.display = "none";
  bgBlack.style.display = "none";
  
  

});
checkSvg.addEventListener("click", () => {
  modalBox.style.display = "none";
  bgBlack.style.display = "none";
  modalBox.style.transition = "1s";
  bgBlack.style.transition = "1s";

});
bgBlack.addEventListener("click", () => {
  modalBox.style.display = "none";
  bgBlack.style.display = "none";
});
// modal box end