let adatok = []

fetch("https://pizza.kando-dev.eu/Pizza")
.then((res) => res.json())
.then((datas) => {
    console.log(datas);
    let content = document.getElementById("pizza");
    for(const data of datas) {
        const glutenFreeText = data.isGlutenFree ? "igen" : "nem";
        content.innerHTML += `<div class="zoom1" style="width: 18rem;">
        <img src="${data.kepURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <hr>
          <p class="card-text">Gluténmentes: ${glutenFreeText}</p>
          <hr>
          <a href="#" class="btn btn-outline-success">Kosárba</a>
          <a href="#" class="btn btn-outline-info" onclick="Reszletek(${data.id})">Részletek</a>
          <button onclick="Delete(${data.id})">Törlés</button>
        </div>
      </div>`;
    }
})

function Delete(id) {
  fetch("https://pizza.kando-dev.eu/Pizza/" + id,{
    method: "DELETE",
    headers: {
      "Content-Type" : "application/json"
    }
  })
  .then(function() {
    location.reload()
  })
}

function Reszletek(id) {
  fetch("https://pizza.kando-dev.eu/Pizza"+id)
.then(function(res) {
  return res.json();
})
.then(function(res) {
  console.log(res);
  let content = document.getElementById("pizza");
  {
    content.innerHTML = `<div class="zoom1" style="width: 18rem;">
        <img src="${data.kepURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <hr>
          <p class="card-text">Gluténmentes: ${glutenFreeText}</p>
          <hr>
          <a href="#" class="btn btn-outline-success">Kosárba</a>
        </div>
      </div>`;
  }
})
}