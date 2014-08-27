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
	
}
