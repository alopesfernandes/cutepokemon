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
    console.log(pokemon.abilities)
    var abilities = ""
    for (i = 0; i < pokemon.abilities.length; i++) {
        abilities += `${pokemon.abilities[i].ability.name} `
    }
    console.log(pokemon.types)
    var types = ""
    for (i = 0; i < pokemon.types.length; i++) {
        types += `${pokemon.types[i].type.name} `
    }
    pintame.innerHTML += `<br><br>${capitalize(pokemon.name)} <br> ${capitalize('abilities')}: ${abilities} <br> ${capitalize('types')}: ${types}`
}

function capitalize(string) {
    return `<b>${string.charAt(0).toUpperCase() + string.slice(1)}</b>`
}

let jigglypuff = document.getElementById('Jigglypuff') //querySelector('#Jigglipuff')

jigglypuff.addEventListener('click',function(){
    //event.preventDefault()
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