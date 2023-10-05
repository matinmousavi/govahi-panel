// SIDEBAR TOGGLE

const usersData = [
  {
    id: 1,
    full_name: "متین موسوی",
    certificate_name: "مسابقات",
    phone_number: "09158745049",
    participate: "1401/05/12",
    social_id: "3611141410",
  },
  {
    id: 2,
    full_name: "هانیه شریعتمداری",
    certificate_name: "وردپرس",
    phone_number: "09015874826",
    participate: "1399/02/20",
    social_id: "3611216321",
  },
  {
    id: 3,
    full_name: "سلمان حق نوازی",
    certificate_name: "گرافیک",
    phone_number: "09910324192",
    participate: "1400/11/05",
    social_id: "3690541255",
  },
  {
    id: 4,
    full_name: "رضا پودینه",
    certificate_name: "پایتون پیشرفته",
    phone_number: "09151413530",
    participate: "1401/06/31",
    social_id: "3611422029",
  },
  {
    id: 5,
    full_name: "هدیه شریعتمداری",
    certificate_name: "Html Css",
    phone_number: "09059054426",
    participate: "1398/01/01",
    social_id: "3611863092",
  },
];

let sidebar = document.getElementById("sidebar");
let searchBtn = document.querySelector(".search-btn");
let searchInput = document.querySelector("#search");
let tableBody = document.querySelector(".table-body");

// radio btn

let lagal = document.querySelector("#lagal");
let genuine = document.querySelector("#genuine");
let spanGenuine = document.querySelector("#span-genuine");
let divGenuine = document.querySelector("#div-genuine");
let spanLagal = document.querySelector("#span-lagal");
let divLagal = document.querySelector("#div-lagal");
let sidebarOpen = false;

// radio btn

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

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

let clickHandler = (event) => {
  event.preventDefault();
  let searchValue = searchInput.value;
  let mainUser = usersData.find((user) => searchValue == user.social_id);
  if (mainUser) {
    tableBody.innerHTML = "";
    tableBody.insertAdjacentHTML(
      "afterbegin",
      `<tr class="table-row"><td class="table-content">${mainUser.full_name}</td><td class="table-content">${mainUser.certificate_name}</td><td class="table-content">${mainUser.phone_number}</td><td class="table-content">${mainUser.participate}</td><td class="table-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="table-icon2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></td></tr>`
    );
    searchInput.value = "";
  } else {
    tableBody.innerHTML = "";
    tableBody.insertAdjacentHTML(
      "afterbegin",
      '<tr class="table-row"><td class="table-content"></td><td class="table-content"></td><td class="table-content">اطلاعات موردنظر یافت نشد.</td><td class="table-content"></td><td class="table-content"></td></tr >'
    );
  }
};

searchBtn.addEventListener("click", clickHandler);