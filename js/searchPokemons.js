const url = 'https://pokeapi.co/api/v2/pokemon/'
let namePokemon = document.getElementById('name_pokemon')
const boton = document.getElementById("boton")
let id_pokemon = document.getElementById("id_pokemon").value
let elementInput = document.getElementsByTagName('input')
let elementParagraph = document.getElementsByTagName('p')
let arraypokemon = []

id_pokemon = addEventListener('change', function () {
    id_pokemon = document.getElementById("id_pokemon").value
})

boton.addEventListener('click', function (event) {
    event.preventDefault()
    for (var i = 0; i < elementInput.length; i++) {
        id_pokemon = elementInput[i].value
        buscar(id_pokemon)
    }
    vaciar()
})

function buscar(id_pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id_pokemon)
        .then(res => res.json())
        .then(data => {
            arraypokemon.push(data.name)
            llenar(elementParagraph)
        })
}

function llenar(elementParagraph) {
    arraypokemon.forEach(function (pokemon, index) {
        namePokemon = elementParagraph[index]
        namePokemon.innerHTML = arraypokemon[index]
})
}

function vaciar() {
    arraypokemon = []
}