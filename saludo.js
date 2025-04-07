function enviarSaludo(){
    const nombre = document.getElementById('nombreInput').value;
    fetch(`http://localhost:3000/saludo/${nombre}`)
    .then(res => res.text())
    .then(data =>{
        document.getElementById('respuesta').innerText = data;
    })
    .catch(err => console.error(err));
}