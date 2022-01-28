// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
const baseurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for( i =1;i<150;i++)
{
    const pokemon =document.createElement('div');
    const num = document.createElement('span');
    num.innerText = '#'+i;
    const newelement = document.createElement('img');
    newelement.src = baseurl+i+'.png'
    pokemon.appendChild(newelement);
    pokemon.appendChild(num);
    container.appendChild(pokemon);
}
