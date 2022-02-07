var calendar = document.querySelector('#calendar')

const traerDatos = () => {
  fetch('./assets/js/calendar.json')
 
  /* fetch('https://randomuser.me/api/') */
  .then(res => res.json())
  .then(datos => {
     /* console.log(datos.results['0'].picture.large) */
     console.log(datos)
     calendar.innerHTML = `
<p>Dia: ${datos.monday['0'].name}</p>
     `
     /* <img src="${datos.results['0'].picture.large}" width="100px"> */
      
  })
};

traerDatos()

function tabla(datos){
    console.log(datos)
    calendar.innerHTML=''
    for(let valor of datos){
        console.log(valor)
    }
}