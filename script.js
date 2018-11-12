window.onload = function() {
  function chamada(){
    let data =  fetch('http://trampos.co/api/oportunidades.json')
      .then((response) => response.json())
      .then((responseData) => {
        let template =
        `<table class="table_oportunity">
         <th class="table_th_oportunity table_th_oportunity--header">Vagas Trampos.co</th>
        `;
        const resposta = responseData;
        resposta.map(function(resposta) {
        template +=
        `
       <tr>
          <td class="table_td_oportunity">
            <a href="${resposta.opportunity.permalink}">
              <div class="opportunity__name">${resposta.opportunity.name}</div>
              <div class="company__name">${resposta.opportunity.company_name}</div>
            </a>
          </td>
        </tr>`;


        });
        template +=
       `<th class="table_th_oportunity table_th_oportunity--footer">Trampos.co</th>
       </table>
       `;
        const widget = document.querySelector("#widget");
        widget.innerHTML = template;
      })
      .catch((error) => { console.warn(error); });

  }
  chamada();
}
