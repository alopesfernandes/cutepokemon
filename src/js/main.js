var allPokemonApi = 'https://pokeapi.co/api/v2/pokemon/'
var jigglypuffApi = "https://pokeapi.co/api/v2/pokemon/39/"
var pikachuApi = "https://pokeapi.co/api/v2/pokemon/25/"
var eeveeApi = "https://pokeapi.co/api/v2/pokemon/133/"
var mewApi = "https://pokeapi.co/api/v2/pokemon/151/"
var sylveonApi = "https://pokeapi.co/api/v2/pokemon/700/"

async function llamadaApi(pokemonUrl){
    let pokemon = await fetch(pokemonUrl)
    pokemon = await pokemon.json()
    console.log(pokemon)
    representar(pokemon)
}

llamadaApi()

const pintame = document.getElementById('content')

function representar(pokemon){

    pintame.innerHTML += `<b>${pokemon.name}</b> cute: ${pokemon.abilities} <br>`

}
jigglypuffApi.addEventListener('click',function(){
  let jigglypuffApi = document.getElementById('Jigglypuff')
})

/*let jigglypuffApi = document.getElementById('Jigglypuff')
let pikachuApi = document.getElementById('Pikachu')
let eeveeApi = document.getElementById('Eevee')
let mewApi = document.getElementById('Mew')
let sylveonApi = document.getElementById('Sylveon')*/