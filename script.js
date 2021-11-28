

function vermas() {
    const htmlShow = document.getElementById("verlista");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "block";
  }
   else {
    htmlShow.style.display = "none";
  }
   const cambiar = document.getElementById("vermas");
  if (cambiar.innerHTML=="Ver lista")
     cambiar.innerHTML = "Ver menos";
  else cambiar.innerHTML= "Ver lista";
} 

function vermas2() {
  const htmlShow = document.getElementById("VerCartasC");
if (htmlShow.style.display === "none") {
  htmlShow.style.display = "block";
}
 else {
  htmlShow.style.display = "none";
}
 const cambiar = document.getElementById("vermas2");
if (cambiar.innerHTML=="Ver Cartas")
   cambiar.innerHTML = "Ver menos";
else cambiar.innerHTML= "Ver Cartas";
} 

function vermas3() {
  const htmlShow = document.getElementById("VerCartasS");
if (htmlShow.style.display === "none") {
  htmlShow.style.display = "block";
}
 else {
  htmlShow.style.display = "none";
}
 const cambiar = document.getElementById("vermas3");
if (cambiar.innerHTML=="Ver Cartas")
   cambiar.innerHTML = "Ver menos";
else cambiar.innerHTML= "Ver Cartas";
} 
function vermas4() {
  const htmlShow = document.getElementById("VerPoderes");
if (htmlShow.style.display === "none") {
  htmlShow.style.display = "block";
}
 else {
  htmlShow.style.display = "none";
}
 const cambiar = document.getElementById("vermas4");
if (cambiar.innerHTML=="Ver mas...")
   cambiar.innerHTML = "Ver menos";
else cambiar.innerHTML= "Ver mas...";
} 