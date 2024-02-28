const loadPhone = async (searchText=12) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones)
  displayPhone(phones);
};
const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone_card_container");
  phones= phones.slice(0,12)
  phoneContainer.innerText=''
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
   
    phoneCard.classList = `card card-compact w-96 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `<figure><img src='${phone.image}' alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title text-black font-semibold">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p class ='text-2xl font-bold'>$996</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;
    phoneContainer.appendChild(phoneCard);
  });
};
// searchHandle
const searchHandle = () => {
    const searchText =document.getElementById('input_field').value;
    console.log(searchText);
    loadPhone(searchText);
};
// loadPhone();
function scrollToSection() {
    const section = document.getElementById("phone_card_container");
    section.scrollIntoView({ behavior: "smooth" });
  }