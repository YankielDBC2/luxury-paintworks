import { 
  PaintBucket, 
  Wind, 
  Layout, 
  Droplets, 
  Square, 
  Maximize 
} from 'lucide-react';

export const servicesData = [
  {
    id: 'pintura',
    icon: PaintBucket,
    image: "/painting2.png",
    imageBefore: "/painting1.png",
    imageAfter: "/painting2.png",
    title: "Pintura Interior y Exterior",
    h1: "Pintura interior y exterior para casas, apartamentos, oficinas y negocios en Miami y alrededores",
    intro: "Ofrecemos servicios profesionales de pintura interior y exterior para todo tipo de propiedades: casas, apartamentos, oficinas, locales comerciales y almacenes en el sur de Florida. Trabajamos con productos de alta calidad, preparamos bien las superficies y cuidamos cada detalle para lograr acabados duraderos y limpios.",
    keywords: [
      "pintura interior en Miami", 
      "pintura exterior para casas", 
      "pintores para oficinas", 
      "pintor profesional cerca de mí"
    ],
    sections: [
      {
        name: "Qué incluye nuestro servicio",
        items: [
          "Preparación de superficies (lijado, reparación de grietas)", 
          "Protección de muebles y pisos", 
          "Aplicación experta (rodillo, brocha o spray)", 
          "Limpieza final y revisión"
        ]
      },
      {
        name: "Propiedades que pintamos",
        items: [
          "Residencial: Casas, Townhouses, Condominios", 
          "Comercial: Oficinas, Restaurantes, Almacenes"
        ]
      }
    ]
  },
  {
    id: 'ventanas',
    icon: Wind,
    image: "/door2.png",
    imageBefore: "/door1.png",
    imageAfter: "/door2.png",
    title: "Ventanas de Impacto",
    h1: "Instalación de ventanas y puertas de impacto para huracanes en el sur de Florida",
    intro: "Instalamos ventanas y puertas de impacto certificadas para proteger tu hogar o negocio de huracanes, robos, ruido exterior y filtraciones de agua. Cumplimos con los códigos de construcción vigentes en Florida.",
    keywords: [
      "ventanas de impacto Miami", 
      "impact windows South Florida", 
      "ventanas contra huracanes", 
      "puertas de impacto"
    ],
    sections: [
      {
        name: "Beneficios Esenciales",
        items: [
          "Protección contra vientos y escombros", 
          "Seguridad contra intrusos", 
          "Ahorro de energía (aislamiento térmico)", 
          "Aumento del valor de la propiedad"
        ]
      },
      {
        name: "Nuestro Proceso",
        items: [
          "Medición profesional", 
          "Asesoría en marcos y estilos", 
          "Instalación y sellado certificado", 
          "Retiro de materiales viejos"
        ]
      }
    ]
  },
  {
    id: 'paneles',
    icon: Layout,
    image: "/wallpanel2.png",
    imageBefore: "/wallpanel1.png",
    imageAfter: "/wallpanel2.png",
    title: "Wall Panels Decorativos",
    h1: "Instalación de paneles de pared decorativos y slat wall en hogares y negocios",
    intro: "Instalamos paneles de pared decorativos, slat wall y paneles 3D para transformar cualquier espacio en algo moderno y elegante. Ideal para salas, recepciones y oficinas.",
    keywords: [
      "wall panel installation Miami", 
      "slat wall installation", 
      "paneles decorativos pared", 
      "3D wall panels installer"
    ],
    sections: [
      {
        name: "Tipos de Paneles",
        items: [
          "Madera, MDF y PVC", 
          "Paneles acústicos", 
          "Paneles 3D modernos", 
          "Slat wall (listones)"
        ]
      }
    ]
  },
  {
    id: 'pressure-washing',
    icon: Droplets,
    image: "/pressure2.png",
    imageBefore: "/pressure1.png",
    imageAfter: "/pressure2.png",
    title: "Lavado a Presión",
    h1: "Servicio de lavado a presión para exteriores (pisos, paredes, driveways y más)",
    intro: "Ofrecemos servicio de pressure washing para limpiar driveways, aceras, patios y paredes. Eliminamos moho, suciedad y manchas difíciles, devolviendo la vida a sus superficies.",
    keywords: [
      "pressure washing Miami", 
      "driveway pressure cleaning", 
      "house washing exterior", 
      "limpieza a presión Florida"
    ],
    sections: [
      {
        name: "Áreas de Limpieza",
        items: [
          "Driveways y estacionamientos", 
          "Aceras y patios", 
          "Paredes exteriores", 
          "Pisos de garaje"
        ]
      }
    ]
  },
  {
    id: 'laminado',
    icon: Square,
    image: "/laminado2.png",
    imageBefore: "/laminado1.png",
    imageAfter: "/laminado2.png",
    title: "Piso Laminado",
    h1: "Instalación profesional de piso laminado para casas, apartamentos y oficinas",
    intro: "Instalamos piso laminado de forma profesional, logrando un acabado parejo y duradero. Apariencia de madera a menor costo y con mantenimiento sencillo.",
    keywords: [
      "instalación piso laminado Miami", 
      "laminate flooring installation", 
      "flooring contractor South Florida"
    ],
    sections: [
      {
        name: "Ventajas de nuestro servicio",
        items: [
          "Corte y ajuste perfecto en esquinas", 
          "Instalación de underlayment acústico", 
          "Acabado uniforme y sin errores", 
          "Mínimo desperdicio de material"
        ]
      }
    ]
  },
  {
    id: 'molduras',
    icon: Maximize,
    image: "/moldura2.png",
    imageBefore: "/moldura1.png",
    imageAfter: "/moldura2.png",
    title: "Molduras y Acabados",
    h1: "Instalación de molduras, zócalos y crown molding para interiores",
    intro: "Instalamos molduras decorativas, zócalos (baseboards) y crown molding para darle un acabado elegante a sus espacios. Una forma rápida de elevar el valor de su propiedad.",
    keywords: [
      "crown molding installation Miami", 
      "baseboard installation South Florida", 
      "interior trim work"
    ],
    sections: [
      {
        name: "Servicios de Carpintería",
        items: [
          "Crown molding en techos", 
          "Zócalos / Baseboards", 
          "Marcos de puertas y ventanas", 
          "Trims decorativos personalizados"
        ]
      }
    ]
  }
];

export const quickFeatures = [
  {
    icon: 'ShieldCheck',
    title: 'Licencia & Seguro',
    description: 'Trabajo protegido y garantizado'
  },
  {
    icon: 'Clock',
    title: 'Rapidez & Limpieza',
    description: 'Respetamos su tiempo y espacio'
  },
  {
    icon: 'Star',
    title: 'Calidad Premium',
    description: 'Materiales de primera categoría'
  }
];

export const contactInfo = {
  phone: '+1 (305) 494-0345',
  phoneRaw: '13054940345',
  email: 'services@luxurypaintworks.com',
  coverage: 'Todo Florida',
  hours: 'Lun - Sáb: 8am - 6pm',
  location: 'Miami, Florida',
  whatsappMessage: 'Hola, me interesa cotizar un servicio',
  smsMessage: 'Hola, me interesa cotizar un servicio con Luxury Paintworks',
  social: {
    instagram: 'https://instagram.com/luxurypaintworks',
    facebook: 'https://facebook.com/luxurypaintworks',
    tiktok: 'https://tiktok.com/@luxurypaintworks'
  }
};