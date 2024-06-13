function check() {
  let city=document.getElementById('place').value
  let apikey='cb0ef0fc0e484406c9b3a84db7213940'
  let name=document.getElementById('name')
  let degrees=document.getElementById('degrees')
  let windspeed=document.getElementById('wind')
  let humidity=document.getElementById('humidity')

let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      name.innerHTML=data.name
      degrees.innerHTML=Math.floor(data.main.feels_like-273)+"°C"
      windspeed.innerHTML=data.wind.speed+"km/h"
      humidity.innerHTML=data.main.humidity+"%"
    });
}
