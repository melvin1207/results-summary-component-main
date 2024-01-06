const summary = document.querySelector('.summary_points_container')

fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
    createElement(data)
    })
    .catch((err) => console.error(err));

function createElement(data){
    data.forEach((element) => {
        const point = document.createElement("div");
        point.classList.add('points')
        point.innerHTML += `
            <img src="${element.icon}" alt="icono de habilidad" class="points_icon"/>
            <h5 class="points_title">${element.category}</h5>
            <p>${element.score} <span class="points_percentage">/100</span></p>
        `
        summary.appendChild(point)
    })
    const button = document.createElement("button")
    button.classList.add('summary_btn')
    button.textContent = 'Continue'
    summary.appendChild(button)
}
