window.onload = function() {
  function chamada(){
    let data =  fetch('http://trampos.co/api/oportunidades.json')
      .then((response) => response.json())
      .then((responseData) => {
        let template =
        `<table cellspacing="0" cellpadding="0" class="table_oportunity">
         <th class="table_th_oportunity table_th_oportunity--header">Vagas Trampos.co</th>
         <tbody class="table_oportunity_body">
        `;
        const resposta = responseData;
        resposta.map(function(resposta) {
        template +=
        `
       <tr class="table_tr_oportunity">
          <td class="table_td_oportunity table_td_oportunity--border-${Math.floor(Math.random() * 4) + 1  }">
            <a href="${resposta.opportunity.permalink}">
              <div class="opportunity__name">${resposta.opportunity.name.toUpperCase()}</div>
              <div class="company__name">${resposta.opportunity.company_name}</div>
            </a>
          </td>
        </tr>`;


        });
        template +=
       `</tbody>
       <th class="table_th_oportunity table_th_oportunity--footer">Trampos.co</th>
       </table>
       `;
        const widget = document.querySelector("#widget");
        widget.innerHTML = template;
      })
      .catch((error) => { console.warn(error); });

  }
  chamada();
}
