window.onload = function() {
  function chamada(){
    let data =  fetch('http://trampos.co/api/oportunidades.json')
      .then((response) => response.json())
      .then((responseData) => {
        let template =
        `<table>
         <th class="">Vagas Trampos</th>
        `;
        const resposta = responseData;
        resposta.map(function(resposta) {
        template +=`<tr><td class="">${resposta.opportunity.name}</td></tr>`;





          console.log(resposta.opportunity.name);
        });
        template +=
       `<th class="">Vagas Trampos</th>
       </table>
       `;
        const widget = document.querySelector("#widget");
        widget.innerHTML = template;
      })
      .catch((error) => { console.warn(error); });

  }
  chamada();
}
