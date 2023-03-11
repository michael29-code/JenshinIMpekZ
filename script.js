
// setInterval(() => {
    
// }, 5000)

function openNav() {
  document.getElementById("navigation-mobile").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("navigation-mobile").style.width = "0";
  document.body.style.overflow = "scroll";
}

const character = document.getElementById('character')
const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

const textCharacter = document.getElementById('text-character')
const textnamaCharacter = document.getElementById('characterName')


let namecharactersUrl = [
  'Kele',
  'ayaaa'
]

let charactersUrl = [
  '/assets/new-character-1.svg',
  '/assets/new-character-2.svg'
]

let charactersText = [
  'A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongst her fellow Eremites',
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatibus odit id, iste consequuntur sit, fugiat excepturi molestias a aut rerum fugit amet maxime ea nobis perspiciatis nam sed in.'
]

character.style.backgroundImage = 'url('+ charactersUrl[0]+')';
textCharacter.innerHTML = charactersText[0];
textnamaCharacter.innerHTML = namecharactersUrl[0];
let posisi = 0;

const moveRight = () =>
{
  if(posisi >= charactersUrl.length - 1)
  {
    posisi = 0
    character.style.backgroundImage = 'url('+ charactersUrl[posisi]+')'
    textCharacter.innerHTML = charactersText[posisi];
    textnamaCharacter.innerHTML = namecharactersUrl[posisi]
    return
  }
  character.style.backgroundImage = 'url('+ charactersUrl[posisi+1]+')'
  textCharacter.innerHTML = charactersText[posisi+1];
  textnamaCharacter.innerHTML = namecharactersUrl[posisi+1];
  posisi++
}

const moveLeft = () => 
{
  if(posisi < 1)
  {
    posisi = charactersUrl.length - 1
    character.style.backgroundImage = 'url('+ charactersUrl[posisi]+')'
    textCharacter.innerHTML = charactersText[posisi];
    textnamaCharacter.innerHTML = namecharactersUrl[posisi];
    return
  }
  character.style.backgroundImage = 'url('+ charactersUrl[posisi-1]+')'
  textCharacter.innerHTML = charactersText[posisi-1];
  textnamaCharacter.innerHTML = namecharactersUrl[posisi-1];
  posisi--;
}

btnRight.addEventListener("click", moveRight);
btnLeft.addEventListener("click", moveLeft);