

function vermas() {
    const htmlShow = document.getElementById("verlista");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "block";
  } else {
    htmlShow.style.display = "none";
  }
  const uno = document.getElementById('vermas');
  if (uno.innerHTML == 'Ver lista') 
      uno.innerHTML = 'Ver menos.';
  else uno.innerHTML = 'Ver lista'; 
}