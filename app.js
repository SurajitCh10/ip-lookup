const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const loader = document.querySelector(".loader-container");
const geoDisplay = document.querySelector(".geo-display");

lookupBtn.addEventListener("click", () => {
    loader.style.display = "flex";
    axios.get("https://ipapi.co/json").then((response) =>{
        loader.style.display = "none";
        ipDisplay.textContent = `Ip : ${response.data.ip}`;
        locationDisplay.textContent = `Location : ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geoDisplay.textContent = `Latitude : ${response.data.latitude}, Longitude : ${response.data.longitude}`;
    });
});


