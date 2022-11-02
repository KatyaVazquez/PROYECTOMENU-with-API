const SHEET_ID = "1zT0mnpGnyg5tXOaDtf8HSIl_0TBoR0L2Zosstu14mfc";

const TOKEN = "ya29.a0Aa4xrXN2cbxa-7jy6o6tlzgDeq6DK07wdUmXwjcdKzwFEZ_GJyYR7H1Gj0p-YsKx3LJ4KdCVOfneopMii0wIrCFVYxoAJKPgpyfQEUQlji6lt_qJ7OHTfB8syH_S2eejCDqG_uiXejQuaHMjw-78Q-x9SvNWaCgYKATASARISFQEjDvL9sXkoIWpTgokw8-Z2MTdaSQ0163";


fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1zT0mnpGnyg5tXOaDtf8HSIl_0TBoR0L2Zosstu14mfc/values/MENUCITO!A1:B9`,
    {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
}
).then(function(response){
    response.json().then((data)=>{
        const VALUES = data.values
        const LISTA = document.getElementById("lista-menu")
    
    for (let i = 0; i<VALUES.length; i++) {   

    //  datos del producto
    const producto = document.createElement("div");
    producto.className =  "menu-item";
    
    // Nombre del producto
    const itemProducto = document.createElement("span");
    itemProducto.className = "item producto";
    itemProducto.innerHTML = VALUES[i][0]; 

    // Precio
    const itemPrecio = document.createElement("span");
    itemPrecio.className = "item precio";
    itemPrecio.innerHTML = VALUES[i][1];
    
    // Agregamos todos los elementos al div de producto
    producto.appendChild(itemProducto);
    producto.appendChild(itemPrecio);
    const itemdescripcion = document.createElement('Descripción'); 
    itemdescripcion.className = 'item Descripción'
  
    LISTA.appendChild(producto);
    producto.appendChild(itemdescripcion);
}
}); 
});
