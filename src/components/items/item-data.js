// import yerbaImg from '../../assets/img/products/yerba-la-buena.jpg';
// import verdurasEstacion from '../../assets/img/products/verduras-estacion.jpg';
// import verdurasPesadas from '../../assets/img/products/verduras-pesadas.jpg';
// import combo from'../../assets/img/products/combo.jpg';
// import miel from '../../assets/img/products/miel-organica.jpg';
// import azucar from '../../assets/img/products/azucar-mascabo.jpg';
// import budin from '../../assets/img/products/budin-vegano.jpg';
// import berenjenas from '../../assets/img/products/berenjenas.jpg';
// import mermeladas from '../../assets/img/products/mermeladas.jpg';
// import pizzetas from  '../../assets/img/products/pizzetas.jpg';

export const products = [
    {
      stock: 20,
      category: 'agroecologico',
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612573/yerba-la-buena_o1iezv.jpg', 
      title:'Yerba La Buena', 
      price: 270,
      quantity: 1,
      description:'1 kg de Yerba Mate Orgánica. Elaborada en Misiones. Conserva el aroma y las propiedades de origen, generando en cada mateada una buena compañía. Con un sabor que solo YERBA MATE LA BUENA PUEDE LOGRAR. Colocar una cantidad a gusto y servir el mate con agua a 80°C.'
    },
    {
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612573/verduras-estacion_jyep7p.jpg',
      stock: 22,
      category: 'agroecologico',
      title:'Bolsón de Verduras de Estación', 
      price:470,
      quantity: 1, 
      description:'5 kg de Verduras de Estación. Producida sin agrotóxicos por los trabajadores del MTE Rural.'
    },
    {
      stock: 17,
      category: 'agroecologico',
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612573/verduras-pesadas_wghpe3.jpg', 
      title:'Bolsón de Verduras Pesadas', 
      price: 440,
      quantity: 1, 
      description:'6 kg de Verduras Pesadas. Producida sin agrotóxicos por los trabajadores del MTE Rural.'
    },
    {
      stock:25,
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612573/combo_unsysl.jpg',
      category: 'agroecologico', 
      title:'Combo: Dos Bolsones', 
      price: 910,
      quantity: 1, 
      description:'Verduras de Estación + Verduras Pesadas (11kg).'
    },
    {
      stock: 15,
      category: 'agroecologico',
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612572/miel-organica_psxgeu.jpg', 
      title:'Miel Orgánica', 
      price:500,
      quantity: 1, 
      description:'1 kg de Miel Orgánica.'
    },
    {
      stock:13,
      img: 'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612572/azucar-mascabo_hofpli.jpg',
      category: 'agroecologico', 
      title:'Azúcar Mascabo', 
      price: 200,
      quantity: 1, 
      description:'500 Kg de Azúcar Mascabo.'
    },
    {
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612572/budin-vegano_sd20nf.jpg',
      stock:27,
      category: 'cooperativo',
      title:'Budin Vegano', 
      price: 190,
      quantity: 1, 
      description:'Budines Veganos. Sabores: Banana, Limón y Zanahoria.'
    },
    {
      stock:30,
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612572/berenjenas_azevem.jpg',
      category: 'cooperativo', 
      title:'Berenjenas al Escabeche', 
      price: 200,
      quantity: 1, 
      description:'Berenjenas al escabeche caceras, en frasco.'
    },
    {
      stock:32,
      category: 'cooperativo',
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612572/mermeladas_fnd0u8.jpg',
      title:'Mermeladas', 
      price:320,
      quantity: 1, 
      description:'Mermeladas cooperativas. Sabores: tomate, limón, naranja y frutilla'
    },
    {
      stock:11,
      img:'https://res.cloudinary.com/dr5putkt4/image/upload/v1639612573/pizzetas_yhbcw7.jpg',
      category: 'cooperativo', 
      title:'Pizzetas', 
      price: 140,
      quantity: 1, 
      description:'Pizzetas x 20 u. Producidas por el Centro Comunitario "Rompe el Encierro"'
    }
  ];

  export const categories = [
    {
      id:'13',
      address: '/products',
      text:'Todos los Productos'
    },
    {
      id:'11',
      address:'/category/agroecologico',
      text: 'Productos Agroecológicos'
    },
    {
      id:'12',
      address:'/category/cooperativo',
      text: 'Productos Cooperativos'
    }    
  ]