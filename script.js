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
          <a href="#" class="btn btn-outline-info">Kosárba</a>
        </div>
      </div>`;
    }
})
