
const loadPhone = async (searchPhone) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};
const displayPhone = (phones) => {
  
  const phoneContainer = document.getElementById("phone_card_container");
  phones =phones.slice(0,12)
  phoneContainer.innerText = ''
  phones.forEach((phone) => {
    
    const div = document.createElement("div");
   
    div.classList = `card w-96 bg-base-100 shadow-xl`;
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
 toggleLoading(false)
};
const searchHandle = () => {
  toggleLoading(true)
  const searchInputText = document.getElementById("input_field").value;
  loadPhone(searchInputText);
};
// spinner Loading 
const toggleLoading = (isLoading) => {
      const toggleLoading = document.getElementById('toggle_loading');
      if(isLoading){
        toggleLoading.classList.remove('hidden')
      }
      else{
        toggleLoading.classList.add('hidden')
      }
      
  }
// loadPhone();
