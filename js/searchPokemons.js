const url = 'https://pokeapi.co/api/v2/pokemon/'
let namePokemon = document.getElementById('name_pokemon')
const boton = document.getElementById("boton")
const botonRandom = document.getElementById("boton_random")
let id_pokemon = document.getElementsByClassName("id_pokemon").value
let elementInput = document.getElementsByTagName('input')
let elementParagraph = document.getElementsByTagName('p')
image = document.getElementById("img_pokemon");
boton.addEventListener('click', function (event) {
    for (var i = 0; i < elementInput.length; i++) {
        if(elementInput[i].textLength){
            id_pokemon = elementInput[i].value
            buscar(id_pokemon,i)
        }
    }
})
botonRandom.addEventListener('click', function(){
    for (var i = 0; i < elementInput.length; i++) {
        buscar(parseInt(Math.random()*898),i);
    }
});
function buscar(id_pokemon,position) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id_pokemon)
        .then(res => res.json())
        .then(data => {
            let nameP = data.name;
            let imageP = data.sprites.front_shiny;
            let id_pokemon = data.id;
            llenar(elementParagraph,nameP,imageP,position,id_pokemon)
        })
}

function llenar(elementParagraph, nameP, image, position, id) {
    namePokemon = elementParagraph[position]
    namePokemon.innerHTML = nameP;
    document.getElementsByClassName("id_pokemon")[position].value=id
    image = document.getElementsByClassName("img_pokemon")[position].setAttribute('src',image);
}
