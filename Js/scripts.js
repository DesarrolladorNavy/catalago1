const productos = [
      {
        nombre: "Hoops o argollas",
        precio: 139.99,
        imagen: "Img/arete1.jpg"
      },
      {
        nombre: "Aretes Estrella Oro 18K",
        precio: 95.59,
        imagen: "Img/arete2.jpg"
      },
      {
        nombre: "Aretes Huggies Concavo",
        precio: 59.89,
        imagen: "Img/arete3.jpg"
      },
      {
        nombre: "Pendient adornado con Topacio y diamante",
        precio: 104.99,
        imagen: "Img/arete4.jpg"
      },
      {
        nombre: "Delicate Gold Hoop Earrings Embellished",
        precio: 115.25,
        imagen: "Img/arete5.jpg"
      },
      {
        nombre: "Oro de cuatro hojas de turquesa",
        precio: 49.99,
        imagen: "Img/arete6.jpg"
      },
      {
        nombre: "Pendiente de aro de oro",
        precio: 89.99,
        imagen: "Img/arete7.jpg"
      },
      {
        nombre: "Encanto de mariposa dorada pulido",
        precio: 314.99,
        imagen: "Img/arete8.jpg"
      }

      
    ];

    const catalogos = document.getElementById("catalogos");

    productos.forEach((producto, catalogo) => {
      const card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${catalogo})">Agregar al carrito</button>
      `;
      catalogos.appendChild(card);
    });

    function agregarAlCarrito(catalogo) {
      const producto = producto[catalogo];
      alert(`🛒 Has agregado "${producto.nombre}" al carrito.`);
    }