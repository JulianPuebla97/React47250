
const misproductos = [
    {
        id: "1",
        nombre: 'Calleras Cobra',
        precio: '$7500',
        img : "https://http2.mlstatic.com/D_NQ_NP_2X_934676-MLA51656385026_092022-F.webp",
        idCat:"2"
    },
    {
        id: "2",
        nombre: 'Muñequeras PowerGrip',
        precio: '$3500',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_647342-MLA71259058204_082023-F.webp",
        idCat:"2"
    },
    {
        id: "3",
        nombre: 'Soga Speed Rope Aluminio',
        precio: '$5000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_785701-MLA70710107242_072023-F.webp",
        idCat:"2"
    },
    {
        id: "4",
        nombre: 'Cinturón Lumbar Crossfit',
        precio: '$9000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_880584-MLA53490779036_012023-F.webp",
        idCat:"2"
    },
    {
        id: "5",
        nombre: 'Pelota de ejercicio',
        precio: '$5000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_650447-MLA31115685820_062019-F.webp",
        idCat:"3"
    },
    {
        id: "6",
        nombre: 'Chaleco 12kg',
        precio: '$12000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_612396-MLA51641334639_092022-F.webp",
        idCat:"3"
    },
    {
        id: "7",
        nombre: 'Cinturón Lumbar Crossfit',
        precio: '$9000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_880584-MLA53490779036_012023-F.webp",
        idCat:"3"
    },
    {
        id: "8",
        nombre: 'Pelota de ejercicio',
        precio: '$5000',
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_650447-MLA31115685820_062019-F.webp",
        idCat:"3"
    },
    
];


export const getProductos = () => {
    return new Promise((resolve, ) => {
        setTimeout ( () =>{
            resolve (misproductos);
        }, 2000)
        
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            const producto = misproductos.find(item => item.id === id  );
            resolve(producto);
        },500)
        
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const productosCategoria = misproductos.filter(item => item.idCat === idCategoria);
            resolve (productosCategoria)
        },500)
        
        
    })
}