document.getElementById("send").onclick = function() {

    let adatok = {
      name: document.getElementById("name").value,
      kepURL: document.getElementById("kepURL").value,
      isGlutenFree: document.getElementById("isGlutenFree").checked ? 1 : 0
    }

    console.log(adatok);

    fetch("https://pizza.kando-dev.eu/Pizza", {
        method: "Post",
        body: JSON.stringify(adatok),
        headers: {
            "Content-Type": "application/json"
        }
    })
}  