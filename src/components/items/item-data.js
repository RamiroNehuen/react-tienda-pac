import yerbaImg from '../../assets/img/products/yerba-la-buena.jpg';
import verdurasEstacion from '../../assets/img/products/verduras-estacion.jpg';
import verdurasPesadas from '../../assets/img/products/verduras-pesadas.jpg';
import combo from'../../assets/img/products/combo.jpg';
import miel from '../../assets/img/products/miel-organica.jpg';
import azucar from '../../assets/img/products/azucar-mascabo.jpg';
import budin from '../../assets/img/products/budin-vegano.jpg';
import berenjenas from '../../assets/img/products/berenjenas.jpg';
import mermeladas from '../../assets/img/products/mermeladas.jpg';
import pizzetas from  '../../assets/img/products/pizzetas.jpg';

export const products = [
    {
      id:'1',
      category: 'agroecologico',
      img:yerbaImg, 
      title:'Yerba La Buena', 
      price:'$270', 
      description:'1 kg de Yerba Mate Orgánica. Elaborada en Misiones. Conserva el aroma y las propiedades de origen, generando en cada mateada una buena compañía. Con un sabor que solo YERBA MATE LA BUENA PUEDE LOGRAR. Colocar una cantidad a gusto y servir el mate con agua a 80°C.'
    },
    {
      id:'2',
      img:verdurasEstacion,
      category: 'agroecologico',
      title:'Bolsón de Verduras de Estación', 
      price:'$470', 
      description:'5 kg de Verduras de Estación. Producida sin agrotóxicos por los trabajadores del MTE Rural.'
    },
    {
      id:'3',
      category: 'agroecologico',
      img:verdurasPesadas, 
      title:'Bolsón de Verduras Pesadas', 
      price:'$440', 
      description:'6 kg de Verduras Pesadas. Producida sin agrotóxicos por los trabajadores del MTE Rural.'
    },
    {
      id:'4',
      img:combo,
      category: 'agroecologico', 
      title:'Combo: Dos Bolsones', 
      price:'$910', 
      description:'Verduras de Estación + Verduras Pesadas (11kg).'
    },
    {
      id:'5',
      category: 'agroecologico',
      img:miel, 
      title:'Miel Orgánica', 
      price:'$500', 
      description:'1 kg de Miel Orgánica.'
    },
    {
      id:'6',
      img:azucar,
      category: 'agroecologico', 
      title:'Azúcar Mascabo', 
      price:'$200', 
      description:'500 Kg de Azúcar Mascabo.'
    },
    {
      id:'7',
      img:budin,
      category: 'cooperativo',
      title:'Budin Vegano', 
      price:'$190', 
      description:'Budines Veganos. Sabores: Banana, Limón y Zanahoria.'
    },
    {
      id:'8',
      img:berenjenas,
      category: 'cooperativo', 
      title:'Berenjenas al Escabeche', 
      price:'$200', 
      description:'Berenjenas al escabeche caceras, en frasco.'
    },
    {
      id:'9',
      category: 'cooperativo',
      img:mermeladas,
      title:'Mermeladas', 
      price:'$270 - Frutilla: $320', 
      description:'Mermeladas cooperativas. Sabores: tomate, limón, naranja y frutilla'
    },
    {
      id:'10',
      img:pizzetas,
      category: 'cooperativo', 
      title:'Pizzetas', 
      price:'$140', 
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