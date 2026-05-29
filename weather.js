let apikey = "4f1262fc1ee0a4eb5da23ed2ec39bcb3"

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");

searchBtn.addEventListener("click", async() => {
    let cityName = document.querySelector("#city-name").value.trim();

    if(cityName === ""){
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `<h3>plese enter a city name </h3>`;
        return;
    }

       try{

       }catch (error){
        console.log(error);
        resultBox.innerHTML=  '<h3>error in fetching weather data... </h3>';
        
       }
});