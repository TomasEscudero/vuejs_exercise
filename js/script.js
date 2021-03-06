// Sample data
// We are going to simulate that it has been returned from a web API (web server)
var server_data = {
  collection :
  {
    title : "Movie List",
    type : "movie",
    version : "1.0",

    items : [
	    {
        href : "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)",
        data : [
		      {name : "name", value : "The Lord of the Rings", prompt : "Name"},
          {name : "description", value : "The Lord of the Rings is a film series consisting of three high fantasy adventure films directed by Peter Jackson. They are based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). They are a New Zealand-American venture produced by WingNut Films and The Saul Zaentz Company and distributed by New Line Cinema.", prompt : "Description"},
		      {name : "director", value : "Peter Jackson", prompt : "Director"},
          {name : "datePublished", value : "2001-12-19", prompt : "Release Date"},
          {name : "image", value : "http://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/89/67/45/20061512.jpg", prompt : "Image"}
        ]
	    },
	    {
        href : "https://en.wikipedia.org/wiki/The_Hunger_Games_(film_series)",
        data : [
		      {name : "name", value : "The Hunger Games", prompt : "Name"},
          {name : "description", value : "The Hunger Games film series consists of four science fiction dystopian adventure films based on The Hunger Games trilogy of novels, by the American author Suzanne Collins. Distributed by Lionsgate and produced by Nina Jacobson and Jon Kilik, it stars Jennifer Lawrence as Katniss Everdeen, Josh Hutcherson as Peeta Mellark, Woody Harrelson as Haymitch Abernathy, Elizabeth Banks as Effie Trinket, Philip Seymour Hoffman as Plutarch Heavensbee, Stanley Tucci as Caesar Flickerman, Donald Sutherland as President Snow, and Liam Hemsworth as Gale Hawthorne. Gary Ross directed the first film, while Francis Lawrence directed the next three films.", prompt : "Description"},
		      {name : "director", value : "Gary Ross", prompt : "Director"},
          {name : "datePublished", value : "2012-03-12", prompt : "Release Date"},
          {name : "image", value : "http://www.apositivar.com/wp-content/uploads/2012/05/los-juegos-del-hambre-poste-castellano.jpg", prompt : "Image"}
        ]
	    },
	    {
        href : "https://en.wikipedia.org/wiki/Game_of_Thrones",
        data : [
		      {name : "name", value : "Game of Thrones", prompt : "Name"},
          {name : "description", value : "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. It is filmed in Belfast and elsewhere in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, Spain, and the United States. The series premiered on HBO in the United States on April 17, 2011, and its seventh season ended on August 27, 2017. The series will conclude with its eighth season premiering in 2019.", prompt : "Description"},
		      {name : "director", value : "Alan Taylor et al", prompt : "Director"},
          {name : "datePublished", value : "2011-04-17", prompt : "Release Date"},
          {name : "image", value : "http://www.elmulticine.com/imagenes/noticias/7/juego-de-tronos-poster3558.jpg", prompt : "Image"}
        ]
	    }
    ]
  }  
};

// Create a Vue app and pass the server data to the app
var app = new Vue({
  el: '#app',
  data: {
    d: server_data
  },

  methods: 
  {    
    obtenerPropiedad: function (pelicula, propiedad) 
    {  
      //Version Funcional del codigo.
      //var filtrado = pelicula.data.filter(function(e) {return e.name == campo})[0];
      //return filtrado ? filtrado.value : "";
      
      for(var i = 0; i < pelicula.data.length; i++)
      {
        if(pelicula.data[i].name == propiedad)
        {
          resultado = pelicula.data[i].value;
        }
      }   
      return resultado;
    },

    buttonClick: function(event)
    {
      var boton = event.target;

      var lista = boton.nextElementSibling;

      if(boton.innerText == "Show")
      {
        boton.innerText = "Hide";
        lista.style.display = "block";
      }
      else
      {
        boton.innerText = "Show";
        lista.style.display = "none";
      }
    }
  }
});
