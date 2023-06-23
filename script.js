function generarNombre(){
    var nombres = ["Jesus","Alejandro","Angel","Gustavo","Yahir","Monserrath","Aneth"]
    var apellidos = ["Cauich","Sosa","Poot","Ucan","Canul","Mena","Chi","Poot"]
    
    var indexNombre = Math.floor(Math.random() * nombres.length);
    var indexApellido = Math.floor(Math.random() *apellidos.length);
    var indexApellido2 = Math.floor(Math.random()*apellidos.length)
    
    
    var nombreAl = nombres[indexNombre];
    var apellidosAl = apellidos[indexApellido];
    var apellidosAl2 = apellidos[indexApellido2]
    
    var nombreCompleto = nombreAl + " " +apellidosAl + " "+apellidosAl2;
    
    document.getElementById("Aleatorio").textContent = nombreCompleto;
}
