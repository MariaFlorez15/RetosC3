//////// tabla room ///////
function VerHabitacion(){

  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room',
    type : 'GET',
    dataType: 'json',

    success : function(json) {
      console.log(json);
    },
  

    error : function(xhr, status){
        alert('ha sucedido un problema');
    }
  }); 

}


function GuardarHabitacion(){

  let idH=$("#idhabi").val();
  let nombreH=$("#nombrehabi").val();
  let estrella=$("#estrellas").val();
  let cate=$("#categoria").val();
  let descrip=$("#descripcion").val();

  let data={
    id:idH,
    room: nombreH,
    stars: estrella,
    category_id: cate,
    description:descrip,
  };
  let enviaraservidor=JSON.stringify(data);
  console.log(data);

  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room',
    type : 'POST',
    dataType: 'json',
    data: enviaraservidor,
    contentType:'application/Json',

    complete: function(response) {
      if (response.status == 555) {
          alert("Registro Existe!!")
      } else if (response.status == 201) {
          alert("Guardo con Exito!!")
      }
      console.log(response.status)
  }
 
  }); 
  }

  function ActualizarHabitacion(){

    let idH=$("#idhabi").val();
    let nombreH=$("#nombrehabi").val();
    let estrella=$("#estrellas").val();
    let cate=$("#categoria").val();
    let descrip=$("#descripcion").val();
  
    let data={
      id:idH,
      room: nombreH,
      stars: estrella,
      category_id: cate,
      description:descrip,
    };
    let enviaraservidor=JSON.stringify(data);
    console.log(data);

    $.ajax({
      url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room',
      type : 'PUT',
      dataType: 'json',
      data: enviaraservidor,
      contentType:'application/Json',
  
      complete: function(response) {
  
        if (response.status == 201) {
          alert("Actualizado con Exito!!")
        }
        console.log(response.status)
    }
   
    }); 

  }


function EliminarHabitacion(){
  
  let idH=$("#idhabi").val();

  let data={
    id:idH,

  };
 
  let enviaraservidor=JSON.stringify(data);
  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room',
    type : 'DELETE',
    dataType: 'json',
    data: enviaraservidor,
    contentType:'application/Json',
    complete: function(response) {
      if (response.status == 204) {
          alert("Elimino con Exito!!")
      }
      console.log(response.status)
      }
  });
  console.log(json)

}


//////////// tabla client ///////////
function leerClient(){

  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
    type : 'GET',
    dataType: 'json',

    success : function(json) {
      console.log(json);
    },
  

    error : function(xhr, status){
        alert('ha sucedido un problema');
    }
  }); 

}


function GuardarClient(){

  let idC=$("#idcliente").val();
  let nombreC=$("#nombrecliente").val();
  let correoC=$("#correocliente").val();
  let edadC=$("#edadcliente").val();

  let data={
    id:idC,
    name: nombreC,
    email: correoC,
    age: edadC,
  };
  let enviaraservidor=JSON.stringify(data);
  console.log(data);

  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
    type : 'POST',
    dataType: 'json',
    data: enviaraservidor,
    contentType:'application/Json',

    complete: function(response) {
      if (response.status == 555) {
          alert("Registro Existe!!")
      } else if (response.status == 201) {
          alert("Guardo con Exito!!")
      }
      console.log(response.status)
  }
 
  }); 
  }

  function ActualizarClient(){

    let idC=$("#idcliente").val();
    let nombreC=$("#nombrecliente").val();
    let correoC=$("#correocliente").val();
    let edadC=$("#edadcliente").val();

    let data={
       id:idC,
       name: nombreC,
       email: correoC,
       age: edadC,
    };
    let enviaraservidor=JSON.stringify(data);
    console.log(data);

    $.ajax({
      url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
      type : 'PUT',
      dataType: 'json',
      data: enviaraservidor,
      contentType:'application/Json',
  
      complete: function(response) {
  
        if (response.status == 201) {
          alert("Actualizado con Exito!!")
        }
        console.log(response.status)
    }
   
    }); 

  }


function EliminarClient(){
  let idC=$("#idcliente").val();
  let data={
    id:idC,
  };
  let enviaraservidor=JSON.stringify(data);
  $.ajax({
    url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
    type : 'DELETE',
    dataType: 'json',
    data: enviaraservidor,
    contentType:'application/Json',
    complete: function(response) {
      if (response.status == 204) {
          alert("Elimino con Exito!!")
      }
      console.log(response.status)
      }
  });
  console.log(json)

}

///////////  tabla menssage //////////////

function leerMen(){
    $.ajax({
      url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
      type : 'GET',
      dataType: 'json',
  
      success : function(json) {
        console.log(json);
      },
    
      error : function(xhr, status){
          alert('ha sucedido un problema');
      }
    }); 
  
  }
  
  
  function GuardarMen(){
  
    let idM=$("#idmen").val();
    let men=$("#mensaje").val();

    let data={
      id:idM,
      messagetext: men,
    };
    let enviaraservidor=JSON.stringify(data);
    console.log(data);
  
    $.ajax({
      url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
      type : 'POST',
      dataType: 'json',
      data: enviaraservidor,
      contentType:'application/Json',
  
      complete: function(response) {
        if (response.status == 555) {
            alert("Registro Existe!!")
        } else if (response.status == 201) {
            alert("Guardo con Exito!!")
        }
        console.log(response.status)
    }
   
    }); 
    }
  
    function ActualizarMen(){

      let idM=$("#idmen").val();
      let men=$("#mensaje").val();

      let data={
        id:idM,
        messagetext: men,
      };

      let enviaraservidor=JSON.stringify(data);
      console.log(data);
  
      $.ajax({
        url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        dataType: 'json',
        data: enviaraservidor,
        contentType:'application/Json',
    
        complete: function(response) {
    
          if (response.status == 201) {
            alert("Actualizado con Exito!!")
          }
          console.log(response.status)
      }
     
      }); 
  
    }
  
  
  function EliminarMen(){
    let idM=$("#idmen").val();
    let data={
      id:idM,
    };
    let enviaraservidor=JSON.stringify(data);
    $.ajax({
      url : 'https://g1ca5c6ac97d08d-apexreto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
      type : 'DELETE',
      dataType: 'json',
      data: enviaraservidor,
      contentType:'application/Json',
      complete: function(response) {
        if (response.status == 204) {
            alert("Elimino con Exito!!")
        }
        console.log(response.status)
        }
    });
    console.log(json)
  
  }