window.onload = function() {
fetch('http://trampos.co/api/oportunidades.json')
 .then(response => response.json())
 .then(data => console.log(data))
}
