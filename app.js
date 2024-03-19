// const URL = "https://api.unsplash.com/search/photos?query=India&client_id=RcutCODXU1LaAd4vpb4Cvj-4Rj1uBg0K3pvw5wOGZCw"
// https://api.unsplash.com/search/photos?query=flower&client_id=RcutCODXU1LaAd4vpb4Cvj-4Rj1uBg0K3pvw5wOGZCw
const URL = "https://api.unsplash.com/search/photos?query=";
const apikey = "RcutCODXU1LaAd4vpb4Cvj-4Rj1uBg0K3pvw5wOGZCw";

const city = document.querySelector(".cityName");
const btn = document.querySelector(".search button");
const img = document.querySelector(".img");


const updateImg = async (cityy,num) => {
    let newUrl = `${URL}${cityy}&client_id=${apikey}`;
    let response = await fetch(newUrl);
    let data = await response.json();
    console.log(data);
    img.src = data.results[num].urls.full;
    console.log(img.src);
    console.log(num);
};
// updateImg("Ram");

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 10);
  updateImg(city.value,randomNumber);
  img.style.display = "block";
});

