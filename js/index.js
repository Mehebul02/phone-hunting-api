const loadPhone = async (searchPhone = '12', isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
};
const displayPhone = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone_card_container");
  phoneContainer.innerText = "";
  const showAllContainer = document.getElementById("show_all_containet");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  console.log("is show", isShowAll);
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    const div = document.createElement("div");

    div.classList = `card  bg-base-100  shadow-xl`;
    div.innerHTML = `<figure><img src='${phone.image}'alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button  class="btn btn-primary ">Details</button>
      </div>
    </div>`;
    phoneContainer.appendChild(div);
  });
  toggleLoading(false);
};
const searchHandle = (isShowAll) => {
  toggleLoading(true);
  const searchInputText = document.getElementById("input_field").value;
  loadPhone(searchInputText, isShowAll);
};
// show All
const showAll = () => {
  searchHandle(true);
};
// spinner Loading
const toggleLoading = (isLoading) => {
  const toggleLoading = document.getElementById("toggle_loading");
  if (isLoading) {
    toggleLoading.classList.remove("hidden");
  } else {
    toggleLoading.classList.add("hidden");
  }
};
// show all

// scroll
function scrollToSection() {
  const section = document.getElementById("search_section");
  section.scrollIntoView({ behavior: "smooth" });
}

loadPhone();
