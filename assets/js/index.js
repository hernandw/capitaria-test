var calendar = document.querySelector('#calendar')

const traerDatos = () => {
  fetch('./assets/js/calendar.json')
 
  /* fetch('https://randomuser.me/api/') */
  .then(res => res.json())
  .then(datos => {
     /* console.log(datos.results['0'].picture.large) */
     console.log(datos)
     calendar.innerHTML = `
     <div class="container">
     <div class="horario">
       <div>
         <div class="hora box2"><<</div>
         <div class="hora box1">8:00</div>
         <div class="hora box1">8:20</div>
         <div class="hora box1">8:40</div>
         <div class="hora box1">9:00</div>
         <div class="hora box1">9:20</div>
         <div class="hora box1">9:40</div>
         <div class="hora box1">10:00</div>
         <div class="hora box1">10:20</div>
         <div class="hora box1">10:40</div>
         <div class="hora box1">11:00</div>
         <div class="hora box1">11:20</div>
         <div class="hora box1">11:40</div>
         <div class="hora box1">12:00</div>
       </div>
       <div>
         <div class="hora box2">Lunes</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div></div>
       </div>
       <div>
         <div class="hora box2">Martes</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">Miercoles</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">Jueves</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">Viernes</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">Sábado</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">Domingo</div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
         <div class="hora"></div>
       </div>
       <div>
         <div class="hora box2">>></div>
         <div class="hora box1">8:00</div>
         <div class="hora box1">8:20</div>
         <div class="hora box1">8:40</div>
         <div class="hora box1">9:00</div>
         <div class="hora box1">9:20</div>
         <div class="hora box1">9:40</div>
         <div class="hora box1">10:00</div>
         <div class="hora box1">10:20</div>
         <div class="hora box1">10:40</div>
         <div class="hora box1">11:00</div>
         <div class="hora box1">11:20</div>
         <div class="hora box1">11:40</div>
         <div class="hora box1">12:00</div>
       </div>
     </div>
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