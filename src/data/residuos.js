// Banco de residuos del EcoReto.
// especial: true -> acierto válido por 20 puntos (caso con restricción especial).
export const RESIDUOS = [
  {
    id: 'pet',
    nombre: 'Botella PET transparente',
    emoji: '🥤',
    contenedor: 'amarillo',
    especial: false,
    mensaje:
      'El PET transparente es el plástico más cotizado en los centros de acopio: enjuágalo y aplástalo para que ocupe menos.',
  },
  {
    id: 'tapa',
    nombre: 'Tapas de plástico',
    emoji: '🔘',
    contenedor: 'amarillo',
    especial: false,
    mensaje:
      'Las tapas se separan del envase pero van al mismo contenedor amarillo. Júntalas: por su tamaño, así pesan más al venderlas.',
  },
  {
    id: 'bolsa',
    nombre: 'Bolsa de plástico limpia',
    emoji: '🛍️',
    contenedor: 'amarillo',
    especial: false,
    mensaje:
      'Las bolsas limpias y secas son valorizables. Si tienen restos de comida, contaminan todo el lote y se van a la basura común.',
  },
  {
    id: 'yogur',
    nombre: 'Envase de yogur',
    emoji: '🥣',
    contenedor: 'amarillo',
    especial: true,
    mensaje:
      'Caso especial: los envases de yogur son polipropileno, un plástico distinto al PET. Van al amarillo, pero solo si están enjuagados.',
  },
  {
    id: 'pet-verde',
    nombre: 'Botella PET verde oscuro',
    emoji: '🫙',
    contenedor: 'amarillo',
    especial: true,
    mensaje:
      'Aunque es plástico, el PET verde oscuro es la botella peor pagada: el pigmento complica la decoloración. Se separa en el amarillo, pero se paga muy bajo o se rechaza.',
  },
  {
    id: 'carton',
    nombre: 'Caja de cartón corrugado',
    emoji: '📦',
    contenedor: 'azul',
    especial: false,
    mensaje:
      'El cartón corrugado va al azul, seco. Desármalo y aplánalo: pagas menos si llega húmedo o inflado.',
  },
  {
    id: 'periodico',
    nombre: 'Periódico',
    emoji: '📰',
    contenedor: 'azul',
    especial: false,
    mensaje:
      'El periódico es fibra limpia y de buena calidad si está seco. Amárralo en fajos para facilitar la báscula.',
  },
  {
    id: 'hojas',
    nombre: 'Hojas de cuaderno',
    emoji: '📄',
    contenedor: 'azul',
    especial: false,
    mensaje:
      'Hojas impresas y cuadernos sin pasta metálica van al azul. El papel es uno de los materiales más fáciles de reciclar en casa.',
  },
  {
    id: 'bolsa-papel',
    nombre: 'Bolsa de papel',
    emoji: '🛒',
    contenedor: 'azul',
    especial: true,
    mensaje:
      'Caso especial: las bolsas de papel son celulosa, van al azul, siempre que no estén engrasadas por comida.',
  },
  {
    id: 'pizza',
    nombre: 'Caja de pizza con grasa',
    emoji: '🍕',
    contenedor: null,
    enJuego: false,
    especial: true,
    mensaje:
      'La caja de pizza manchada de aceite NO es reciclable: la grasa arruina la fibra del lote completo. No va a ningún contenedor del Punto Verde; se descarta con la basura común.',
  },
  {
    id: 'lata-al',
    nombre: 'Lata de aluminio de refresco',
    emoji: '🥤',
    contenedor: 'gris',
    especial: false,
    mensaje:
      'El aluminio es el residuo más rentable por kilo. Aplástala: ocupa menos espacio y la báscula no cambia.',
  },
  {
    id: 'lata-conserva',
    nombre: 'Lata de atún',
    emoji: '🐟',
    contenedor: 'gris',
    especial: true,
    mensaje:
      'Caso especial: las latas de conserva son acero estañado, no aluminio, pero comparten el contenedor gris. Enjuágalas o pierden valor.',
  },
  {
    id: 'tapas-metal',
    nombre: 'Tapas metálicas',
    emoji: '⭕',
    contenedor: 'gris',
    especial: false,
    mensaje:
      'Las tapas de frascos y botellas son metal: van al gris. Sepáralas del vidrio, que debe entregarse sin tapas.',
  },
  {
    id: 'botella-vidrio',
    nombre: 'Botella de vidrio de cerveza',
    emoji: '🍾',
    contenedor: 'verde',
    especial: false,
    mensaje:
      'Botellas de cerveza y refresco van al verde, limpias. Retira la tapa y la etiqueta gruesa.',
  },
  {
    id: 'frasco',
    nombre: 'Frasco de vidrio de alimentos',
    emoji: '🍯',
    contenedor: 'verde',
    especial: false,
    mensaje:
      'Frascos de mermelada o café: enjuaga bien para que no atraigan fauna ni generen olores. El vidrio se recicla infinitas veces.',
  },
  {
    id: 'vidrio-color',
    nombre: 'Vidrio ámbar / verde oscuro',
    emoji: '🟫',
    contenedor: 'verde',
    especial: true,
    mensaje:
      'Caso especial: el vidrio de color debe ir al verde igual, pero cada color se funde por separado: no lo mezcles con el transparente en un mismo bulto.',
  },
  {
    id: 'tetra',
    nombre: 'Cartón de leche (Tetra Pak)',
    emoji: '🥛',
    contenedor: 'marron',
    especial: true,
    mensaje:
      '¡El error más común! El Tetra Pak parece cartón, pero es multicapa (papel + polietileno + aluminio). Va al contenedor marrón, enjuagado y aplastado.',
  },
  {
    id: 'jugo',
    nombre: 'Jugo en envase multicapa',
    emoji: '🧃',
    contenedor: 'marron',
    especial: true,
    mensaje:
      'Los envases de jugo son Tetra Pak: marrón. Enjuágalo, escúrrelo y apástalo para que no fermente en el acopio.',
  },
  {
    id: 'pure',
    nombre: 'Puré de tomate en Tetra Pak',
    emoji: '🍅',
    contenedor: 'marron',
    especial: false,
    mensaje:
      'El puré viene en envase multicapa: marrón. Los restos de tomate son el peor enemigo del reciclaje, enjuaga antes de entregarlo.',
  },
  {
    id: 'tetra-vacio',
    nombre: 'Envase Tetra Pak vacío y aplastado',
    emoji: '📪',
    contenedor: 'marron',
    especial: false,
    mensaje:
      'Perfecto: vacío, enjuagado y aplastado. Así el centro de acopio puede enfardarlo y venderlo a la planta de polialuminio.',
  },
]
