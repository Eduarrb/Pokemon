
// function mostrar(pos)
// {
// 	document.write(pos.coords.latitude  + "," + pos.coords.longitude + "</br>");
// }
// navigator.geolocation.getCurrentPosition(mostrar);



function Pokemon(g,n,v,a,img)
{
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.imagen = img;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

var pikachu = new Pokemon("Pika!!","Pikachu",100,25,"<img src='Pikachu.png' width=200 height=200>");
var bulbasour = new Pokemon("Bulbasour!!","Bulbasour", 90, 20,"<img src='bulbasaur.jpg' width=200 height=200>");
var charmander = new Pokemon("Char Char!!","Charmander", 110, 23,"<img src='charmander.jpg' width=200 height=200>");

var listaPoke = [pikachu,bulbasour,charmander];

var selecccion = prompt("Escoge un Pokemon \nPikachu = 0 \nBulbasour = 1 \nCharmander = 2",0);

function mostrar ()
{
	listaPoke[selecccion].gritar();
	document.getElementById("imagenPokemon").innerHTML = listaPoke[selecccion].imagen;
	nombrePokemon.innerText = "Nombre: "+listaPoke[selecccion].nombre +"\n"+ 
							  "Vida: " + listaPoke[selecccion].vida +"\n"+
							  "Ataque: " + listaPoke[selecccion].ataque;
	// if(selecccion == 0)
	// {
	// 	pikachu.gritar();
	// }
	// else if(selecccion == 1)
	// {
	// 	bulbasour.gritar();
	// 	document.getElementById("imagenPokemon").innerHTML = bulbasour.imagen;
	// 	nombrePokemon.innerText = "Nombre: "+bulbasour.nombre +"\n"+ "Vida: " + bulbasour.vida;
	// }
}


// function inicio()
// {
	
// }

// function Pokemon(nombrePoke, tipoPoke, vidaPoke, ataPoke)
// {
// 	var estructuraPokemon = 
// 	{
// 		nombre: nombrePoke,
// 		tipo: tipoPoke,
// 		vida: vidaPoke,
// 		ataque: ataPoke
// 	};
// 	return estructuraPokemon;
// }

// var pikachu = Pokemon("Pikachu", "Eléctrico", 100, 55);
// var bulbasour = Pokemon("Bulbasour", "Agua", 90, 50);
// console.log(pikachu);