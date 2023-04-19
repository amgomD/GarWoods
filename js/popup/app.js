const modal = document.getElementById("modal");

let numpeople = document.getElementById("epeople");
let etime = document.getElementById("etime");
let edate = document.getElementById("edate");

let timeslots = document.getElementById("scroll-time");
let timesitem = timeslots.querySelectorAll(".people");
let numCuadros = 0;
let posicion =2;
let valorant = 0;
let valor2 = 0
var input = document.getElementById("epeople");
numpeople.value = 1;
const popupbg = document.getElementById("popup-img");
let hoy = new Date();
let mes ='';
let dia='';
let diahoy ='';
var now = hoy.getHours()+':'+hoy.getMinutes()
inicializarFecha(hoy);
etime.value = now;
edate.value = diahoy;

const carruselSpecial = document.getElementById('carruselSpecial');
const imagesSpecial= carruselSpecial.querySelectorAll('img');


const rectangulo = document.getElementById("mesa");




imagesSpecial.forEach((img) => {
  img.addEventListener('click', () => {
    // Obtener la URL de la imagen haciendo clic
    const imageUrl = img.getAttribute('src');

    // Cambiar el fondo de la página
    abrirPopupimg(imageUrl)
  });
});



function abrirPopup() {
    const popup = document.getElementById("mi-popup");
    popup.style.display = "flex";
 
  }

  function abrirPopupimg(imageUrl) {


    popupbg.style.display = "flex";
    popupbg.innerHTML = ` <img id="popup-content-img" src="${imageUrl}" alt="">          <i onclick=" cerrarPopupimg()" class="fa-solid fa-circle-xmark"></i>`


  }


  function cerrarPopupimg() {

    popupbg.classList.add("cerrando");
    setTimeout(() => {
      popupbg.classList.remove("cerrando");
      popupbg.style.display = "none";
    }, 500);
  }



  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if(document.getElementById("mi-popup")){
        cerrarPopup()
        }
        if (document.getElementById("popup-content-img")){
          cerrarPopupimg() 
        }
    }
  });
  
  function cerrarPopup() {
    const popup = document.getElementById("mi-popup");
    popup.classList.add("cerrando");
    setTimeout(() => {
      popup.classList.remove("cerrando");
      popup.style.display = "none";
      numpeople.value = 1;
      inicializarFecha(hoy);
      etime.value = now;
      edate.value = diahoy;      
      numCuadros = 0;
      if(document.getElementById("silla1")){
        expandirCard()
      }
 
    }, 500);
  }

  function expandirCard() {
    valor2 = parseInt(input.value,10);
    const card = document.getElementById("card-titulo");
    const contenido = card.querySelector(".card-contenido");
    contenido.classList.toggle("mostrar");
    card.classList.toggle("expandida");
    if(document.getElementById("silla1")){
      if(valor2 ==1){
        rectangulo.innerHTML =  ` ` ;
      }

    }else{
    rectangulo.innerHTML =  ` 
    <div class="silla-1">
    <div id="silla1" class="filaup"></div>
   </div>
   <div id="" class="silla-2">
    <div id="silla2" class="filaup"></div>
   </div>
   <div id="rectangulo" class="rectangulo"></div>`
   numCuadros = 0;
   posicion =2;
   valorant=0;
   rectangulo.style.width =`100px`
  cargue();
    }


  }


  

function quitarponer(){
  const silla1 = document.getElementById("silla1");
  const silla2 = document.getElementById("silla2");
  valor2 = parseInt(input.value,10);
if(valor2 < valorant){
  if (silla1 || silla2){
    removerCuadro(valorant);
    }
  valorant = valor2
}else{
  if (silla1 || silla2){
  agregarCuadro(valor2);
  }
  valorant = valor2
}
}


function cargue(){

  rectangulo.innerHTML =  ` 
  <div class="silla-1">
  <div id="silla1" class="filaup"></div>
 </div>
 <div id="" class="silla-2">
  <div id="silla2" class="filaup"></div>
 </div>
 <div id="rectangulo" class="rectangulo"></div>`
 numCuadros = 0;
 posicion =2;
 valorant=0;
 rectangulo.style.width =`100px`
  valor2 = parseInt(input.value,10);
  if (valor2 > 20){
    input.value = 20
  valor2 = 20
}
  for (var i = 1; i <= valor2; i++) {
    agregarCuadro(i);
  }
  valorant= i-1;
}


function agregarCuadro(numCuadros) {
   
    const silla1 = document.getElementById("silla1");
    const silla2 = document.getElementById("silla2");
    
    if(numCuadros == 0){

    }else{
      if (numCuadros == 1){
        const cuadro3 = document.createElement("div");
        cuadro3.classList.add("cuadro-izq");
        cuadro3.setAttribute("id", `${numCuadros}`);
      
        cuadro3.classList.add("izquierda-table");
        rectangulo.appendChild(cuadro3);
      }
      if (numCuadros == 2){
        const cuadro4 = document.createElement("div");
        cuadro4.classList.add("cuadro-der");
        cuadro4.classList.add("derecha-table");
        cuadro4.setAttribute("id", `${numCuadros}`);
        rectangulo.appendChild(cuadro4);
      }
      
      if (numCuadros > 2){
      
        
          if ((numCuadros % 2) == 0){
              const cuadro = document.createElement("div");
              cuadro.classList.add("cuadro-up");
              cuadro.setAttribute("id", `${numCuadros}`);
              silla1.appendChild(cuadro);
          }else{
      posicion ++;
         
       const cuadro = document.createElement("div");
         cuadro.classList.add("cuadro-down");
         cuadro.setAttribute("id", `${numCuadros}`);
      
         rectangulo.style.width =`${posicion*40}px`
         silla2.appendChild(cuadro);
      }
        }
    }
  


  rectangulo.classList.remove("removiendo");
}
function removerCuadro(numCuadros) {
  const cuadro = document.getElementById(`${numCuadros}`);
  
if (numCuadros > 2){
    if ((numCuadros % 2) == 0){
    }else{
 posicion--;
}
  }

  cuadro.classList.add("removiendo");
    cuadro.remove();
    rectangulo.style.width =`${posicion*40}px`
}




timesitem.forEach((img) => {
  img.addEventListener('click', () => {
    if(input.value > 0){
    const ninput = img.querySelector('.time-item')
    const id = ninput.getAttribute("id");
    const card = document.getElementById("pop-content");
    const reser = document.getElementById("fintable");
    const res1 = document.getElementById("Res1");
    const addres1 = document.getElementById("addRes1");
let date = edate.value
let time = ninput.value
let pepol = epeople.value
reser.style.display = 'none';
    card.innerHTML =  ` 
    <div class="resume-table">

    <div class="form-reserve">
      <form id="form-reserve" class="book-a-table">
        <input type="text" placeholder="First name" id="fName">
        <input type="text" placeholder="Last name" id=lName">
     <input type="number" name="" placeholder="Phone number" id="phone">
     <input type="email" placeholder="Email" id="email">
     <select  name="ocassion" id="ocassion">
      <option value="" selected>Select an ocassion (optional)</option>
      <option value="None">None</option>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
      <option value="Date">Date</option>
      <option value="Special Ocassion">Special Ocassion</option>
      <option value="Bussines Meal">Bussines Meal</option>
  
     </select>


     <input type="text" placeholder="Add special request (optional)" id="email">
     <button type="submit"  class="button-popup ">
     Confirm
    </button>
    <div onclick="volver()" id="back"  class="button-popup-outline ">
    Back
   </div>
    </form>
    </div>
    <hr>
    <div class="details">
    
    <div class="details-titulo" >
      <h2 id="name-restaurant">${res1.innerHTML}</h2>
      <img width="50%" style="margin-bottom:10px;" src="images/garwoods.png" alt="">
      <div><i class="fa-regular fa-calendar"></i><p id="det-date" >${date}</p></div>
      <div ><i class="fa-solid fa-clock"></i><p id="det-time" >${time}</p> </div>
      <div ><i class="fa-solid fa-people-line"></i> <p id="det-people">${pepol} people</p> </div>
 <div ><i class="fa-solid fa-location-dot"> </i><P id="det-add">${addres1.innerHTML}</P> </div>
 <hr>
 
    </div>
  </div>
  </div>

   `

    }else{
      input.focus()
    }
  });
});


function volver(){
  const card = document.getElementById("pop-content");
  const reser = document.getElementById("fintable");
  reser.style.display = 'flex';
  card.innerHTML =  `  ` ;

}


function inicializarFecha(hoy){
  if ((hoy.getMonth() + 1)>9){
    mes = (hoy.getMonth() + 1)
 }else{
    mes = '0'+(hoy.getMonth() + 1)
 }
 if ((hoy.getDate())>9){
   dia = hoy.getDate()
 }else{
   dia = '0'+hoy.getDate()
 }
  diahoy = hoy.getFullYear() + '-' + ( mes ) + '-' + dia
}