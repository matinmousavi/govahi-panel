// radio btn

let lagal = document.querySelector("#lagal");
let genuine = document.querySelector("#genuine");
let spanGenuine = document.querySelector("#span-genuine");
let divGenuine = document.querySelector("#div-genuine");
let spanLagal = document.querySelector("#span-lagal");
let divLagal = document.querySelector("#div-lagal");

genuine.checked = true;

let handelGenuie = () => {
  divGenuine.classList.remove("display-none");
  spanGenuine.classList.remove("display-none");
  divLagal.classList.add("display-none");
  spanLagal.classList.add("display-none");
};
genuine.addEventListener("change", handelGenuie);

let handelLagal = () => {
  divGenuine.classList.add("display-none");
  spanGenuine.classList.add("display-none");
  divLagal.classList.remove("display-none");
  spanLagal.classList.remove("display-none");
};
lagal.addEventListener("change", handelLagal);