export const CONTENEDORES = [
  {
    id: 'amarillo',
    nombre: 'Amarillo',
    material: '',
    emoji: '🧴',
    hex: '#f2c230',
    hexDark: '#c99a06',
    fondo: '#f2c230',
    tinta: '#3b2c00',
    resumen:
      'Botellas desechables (PET), tapas de plástico y bolsas. El plástico transparente es el más cotizado.',
    acepta: [
      'Botellas de PET transparente (agua, refresco, jugos)',
      'Tapas y tapones de plástico',
      'Bolsas de plástico limpias y secas',
      'Envases de yogur y garrafas de leche',
    ],
    noAcepta: [
      'Botellas de color verde oscuro, ámbar o pigmentos complejos: se rechazan o se pagan muy bajo',
      'Plásticos con restos de comida o aceite',
      'Unicel y bolsas sucias de alimentos',
    ],
    requisito:
      'Entrega tus residuos 100 % limpios. Se recomienda enjuagarlos para evitar malos olores y contaminación cruzada.',
    dato: 'No todas las botellas se pagan igual: la transparencia es lo que hace rentable el reciclaje del PET.',
  },
  {
    id: 'azul',
    nombre: 'Azul',
    material: '',
    emoji: '📦',
    hex: '#3b82d6',
    hexDark: '#1f5fa8',
    fondo: '#1f5fa8',
    tinta: '#ffffff',
    resumen:
      'Cartón corrugado, papel bond, hojas, impresiones, revistas, periódicos y bolsas de papel. Todo seco y sin grasa.',
    acepta: [
      'Cartón corrugado y cajas de empaque limpias',
      'Papel bond, hojas de cuaderno e impresiones',
      'Revistas, periódicos y directorios',
      'Bolsas de papel',
    ],
    noAcepta: [
      'Cartón mojado o con olor a humedad',
      'Cajas de pizza y empaques con aceite o restos de comida',
      'Papel encerado, adhesivo o papel higiénico usado',
    ],
    requisito:
      'Todo el material celulósico debe estar completamente seco y libre de grasa. Una caja de pizza arruina toda la fibra del lote.',
    dato: 'El papel se puede reciclar hasta 7 veces; cada vez la fibra se acorta, por eso el material limpio vale más.',
  },
  {
    id: 'gris',
    nombre: 'Gris',
    material: '',
    emoji: '🥫',
    hex: '#8f9ba3',
    hexDark: '#5f6b73',
    fondo: '#5f6b73',
    tinta: '#ffffff',
    resumen:
      'Latas de conserva, latas de aluminio de bebidas y envases metálicos similares.',
    acepta: [
      'Latas de aluminio de bebidas',
      'Latas de conserva (atún, verduras, frijoles)',
      'Tapas metálicas y envases metálicos similares',
    ],
    noAcepta: [
      'Latas con restos de comida sin enjuagar',
      'Aerosoles presurizados',
      'Chatarra industrial mezclada (va directo a recicladora de metales)',
    ],
    requisito:
      'Enjuaga las latas de conserva y aplasta las de aluminio para optimizar el espacio de almacenamiento.',
    dato: 'El aluminio es el material más rentable por kilo: se recicla al 95 % de ahorro energético frente a producirlo nuevo.',
  },
  {
    id: 'verde',
    nombre: 'Verde',
    material: '',
    emoji: '🍾',
    hex: '#2e9e5b',
    hexDark: '#1b7040',
    fondo: '#1b7040',
    tinta: '#ffffff',
    resumen:
      'Botellas de refresco, cerveza y otras bebidas, así como frascos de vidrio de alimentos.',
    acepta: [
      'Botellas de refresco, cerveza y bebidas',
      'Frascos de vidrio de alimentos (mermelada, café, salsas)',
      'Vidrio transparente y ámbar',
    ],
    noAcepta: [
      'Vidrio roto sin protección (riesgo para el personal)',
      'Espejos, focos, ventanas y vitrocerámica',
      'Vidrio con tapas, corchos o etiquetas gruesas',
    ],
    requisito:
      'Limpio, sin tapas y de preferencia sin etiquetas. La mezcla desordenada de colores dificulta su fundición exacta.',
    dato: 'El vidrio se recicla infinitas veces sin perder calidad, pero cada color se funde por separado.',
  },
  {
    id: 'marron',
    nombre: 'Marrón',
    material: '',
    emoji: '🥛',
    hex: '#a56f45',
    hexDark: '#7b4f2d',
    fondo: '#7b4f2d',
    tinta: '#ffffff',
    resumen:
      'Envases multicapa de Tetra Pak para leche, jugos, purés de tomate y otros alimentos líquidos.',
    acepta: [
      'Cartones de leche y crema',
      'Jugos y néctares en envase multicapa',
      'Purés, salsas y caldos en Tetra Pak',
    ],
    noAcepta: [
      'Envases multicapa con restos de líquido',
      'Vasos de café de polipapel (van con el plástico si están limpios)',
      'Envases que combinan multicapa con metal o electrónica: ya no son Tetra Pak',
    ],
    requisito:
      'Enjuágalo por dentro con un poco de agua, escúrrelo bien y aplástalo para facilitar su almacenamiento compacto.',
    dato: 'Tetra Pak mezcla cartón, polietileno y aluminio: por eso NO va en el azul aunque parezca cartón.',
  },
]

export const CONTENEDOR_POR_ID = Object.fromEntries(
  CONTENEDORES.map((c) => [c.id, c]),
)
