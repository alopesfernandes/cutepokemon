// var allPokemonApi = 'https://pokeapi.co/api/v2/pokemon/'
var jigglypuffApi = "https://pokeapi.co/api/v2/pokemon/39/"
var pikachuApi = "https://pokeapi.co/api/v2/pokemon/25/"
var eeveeApi = "https://pokeapi.co/api/v2/pokemon/133/"
var mewApi = "https://pokeapi.co/api/v2/pokemon/151/"
var sylveonApi = "https://pokeapi.co/api/v2/pokemon/700/"

async function llamadaApi(pokemonUrl){
    let pokemon = await fetch(pokemonUrl)
    pokemon = await pokemon.json()
    console.log(pokemon)
    represent(pokemon)
}
const pintame = document.getElementById('content')

function represent(pokemon){

    pintame.innerHTML += `<b>${pokemon.name}</b> name: ${pokemon.abilities.name} <br>`
}

let jigglypuff = document.getElementById('Jigglypuff')

jigglypuff.addEventListener('click',function(){
  llamadaApi(jigglypuffApi)
})

let pikachu = document.getElementById('Pikachu')

pikachu.addEventListener('click',function(){
  llamadaApi(pikachuApi)
})

let eevee = document.getElementById('Eevee')

eevee.addEventListener('click',function(){
  llamadaApi(eeveeApi)
})

let mew = document.getElementById('Mew')

mew.addEventListener('click',function(){
  llamadaApi(mewApi)
})

let sylveon = document.getElementById('Sylveon')

sylveon.addEventListener('click',function(){
  llamadaApi(sylveonApi)
})



/*let jigglypuffApi = document.getElementById('Jigglypuff')
let pikachuApi = document.getElementById('Pikachu')
let eeveeApi = document.getElementById('Eevee')
let mewApi = document.getElementById('Mew')
let sylveonApi = document.getElementById('Sylveon')*/