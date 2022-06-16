$("#btn-cargar").click(function (event) {
    event.preventDefault();
   
    var url = "https://api.thedogapi.com/v1/images/search?api_key=50ebed43-2b9a-4c3a-96ce-020b7419e525";
   
     fetch(url)
    .then((response) => {
        return response.json();
       })
       .then((data) => {
         console.log(data);
       })
       .catch((error) => {
         console.error(error);
       });
   
      fetch(url)
          .then(response => response.json())
          .then(data => 
              {
                  var $nombre_perro = $('<h1>').text(data[0].breeds.name);
                  var $id_perro = $('<p>').text(data[0].id);
   
                  var $foto_perro = $("<p><img src='"+data[0].url+"'>");
   
                  $("#info").empty();
                  $('#info')
                      .append($nombre_perro)
                      .append($id_perro)
                      .append($foto_perro);
   
              })
        .catch(error => console.error(error));
   
  });
  