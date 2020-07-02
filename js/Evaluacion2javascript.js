
function obtenerValorConImpuestos () {

    var valorsinimpuestos = prompt 
    ("En este campo debe diligenciar el valor sin los impuestos");
    var clasedeproducto = prompt 
    (" Digite el numero del producto de su necesidad");

    var costo; 
    switch (clasedeproducto) {
        case "1":
            costo =((valorsinimpuestos*19)/100);
            costo1 = valorsinimpuestos + costo;
            alert (costo1);
            break;
        case "2":
            costo = ((valorsinimpuestos*15)/100);
            costo2 = valorsinimpuestos + costo;
            alert (costo2);
            break;
        case "3":
            costo =((valorsinimpuestos*7)/100);
            costo3 = valorsinimpuestos + costo;
            alert (costo3);
            break;
        default:
            costo = ((valorsinimpuestos*3)/100);
            costo4 = valorsinimpuestos - costo;
            alert (costo4);

    }
}
obtenerValorConImpuestos();