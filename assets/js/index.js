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
         <div class="hora">hora</div>
         <div class="hora">8:00</div>
         <div class="hora">8:20</div>
         <div class="hora">8:40</div>
         <div class="hora">9:00</div>
         <div class="hora">9:20</div>
         <div class="hora">9:40</div>
         <div class="hora">10:00</div>
         <div class="hora">10:20</div>
         <div class="hora">10:40</div>
         <div class="hora">11:00</div>
         <div class="hora">11:20</div>
         <div class="hora">11:40</div>
         <div class="hora">12:00</div>
       </div>
       <div>
         <div class="hora">Lunes</div>
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
         <div class="hora">Martes</div>
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
         <div class="hora">Miercoles</div>
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
         <div class="hora">Jueves</div>
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
         <div class="hora">Viernes</div>
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
         <div class="hora">Sábado</div>
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
         <div class="hora">Domingo</div>
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
         <div class="hora">hora</div>
         <div class="hora">8:00</div>
         <div class="hora">8:20</div>
         <div class="hora">8:40</div>
         <div class="hora">9:00</div>
         <div class="hora">9:20</div>
         <div class="hora">9:40</div>
         <div class="hora">10:00</div>
         <div class="hora">10:20</div>
         <div class="hora">10:40</div>
         <div class="hora">11:00</div>
         <div class="hora">11:20</div>
         <div class="hora">11:40</div>
         <div class="hora">12:00</div>
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