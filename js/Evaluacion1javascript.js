function tipoMotor() {

    var motortipe = prompt ("Diligencie el tipo de motor actual recuerde que las opciones son: 0, 1, 2, 3, 4, 5");

    switch (motortipe) {

    case "0":
        document.write("No hay establecido un valor definido para el tipo de bomba");
        console.log("No hay establecido un valor definido para el tipo de bomba");
        break;  

    case "1":

        document.write("La bomba es una bomba de agua");
        console.log("La bomba es una bomba de agua");
        break;

    case "2":
        document.write("La bomba es una bomba de gasolina");
        console.log("La bomba es una bomba de gasolina");
        break;

    case "3":
        document.write("La bomba es una bomba de hormigón");
        console.log("La bomba es una bomba de hormigón");
        break;

    case "4":
        document.write("La bomba es una bomba de pasta alimenticia");
        console.log("La bomba es una bomba de pasta alimenticia");
        break;

    case "5":
        document.write("“La bomba es una bomba eléctrica");
        console.log("“La bomba es una bomba eléctrica");
        break;

     default:
        document.write("No existe un valor válido para tipo de bomba");
        console.log("No existe un valor válido para tipo de bomba");
    }   
}
tipoMotor();