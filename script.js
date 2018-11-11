window.onload = function() {
  function chamada(){
    let data =  fetch('http://trampos.co/api/oportunidades.json')
     .then(response => response.json())
     .then(data => {
       return data;
      })
     .catch(error => {
       console.error(error);
      });
      return data;
  }
  const resposta = chamada();
  console.table(resposta);
  function template(){
    
  }


}
