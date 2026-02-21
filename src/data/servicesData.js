import { 
  PaintBucket, 
  Wind, 
  Layout, 
  Droplets, 
  Square, 
  Maximize,
  CheckCircle,
  Shield,
  Award,
  Clock,
  DollarSign,
  Home,
  Building
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
    subtitle: "Transforma tu propiedad con colores que duran años",
    intro: "La pintura es la forma más efectiva y económica de transformar cualquier espacio. Ya sea que necesites renovar tu casa, apartamento, oficina o negocio, nuestro equipo de pintores profesionales en Miami garantiza acabados impecables que superan tus expectativas.",
    whyChoose: [
      "Más de 10 años de experiencia en el sur de Florida",
      "Pinturas de primera calidad (Benjamin Moore, Sherwin-Williams)",
      "Preparación profesional de superficies",
      "Limpieza total al finalizar",
      "Garantía en todos nuestros trabajos"
    ],
    benefits: "Una pintura profesional no solo mejora la apariencia de tu propiedad, sino que también la protege de la humedad, el moho y los rayos UV. En Miami, donde la humedad es alta, una buena preparación de superficies es clave para que la pintura dure años.",
    keywords: [
      "pintura interior Miami",
      "pintura exterior Miami",
      "pintores profesionales Miami",
      "house painting Miami",
      "commercial painting Miami",
      "interior painter near me",
      "exterior painting contractor Miami",
      "pintura de casas Miami",
      "pintura de oficinas Miami"
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo dura una pintura profesional?",
        answer: "Una pintura profesional de calidad puede durar entre 5-10 años en interiores y 5-7 años en exteriores, dependiendo de las condiciones climáticas."
      },
      {
        question: "¿Cuánto tiempo toma pintar una casa?",
        answer: "Una casa promedio de 2,000 pies cuadrados toma entre 3-5 días, dependiendo del estado de las superficies y el tipo de pintura."
      },
      {
        question: "¿Necesito preparar algo antes de que lleguen los pintores?",
        answer: "Nosotros nos encargamos de todo: protección de muebles, preparación de superficies, y limpieza final. Solo necesitas despejar áreas accesibles."
      }
    ],
    sections: [
      {
        name: "Qué incluye nuestro servicio",
        items: [
          "Evaluación gratuita de tu propiedad",
          "Preparación de superficies (lijado, reparación de grietas, sellado)",
          "Protección de muebles, pisos y áreas no pintadas",
          "Aplicación experta (rodillo, brocha o spray)",
          "Inspección de calidad",
          "Limpieza total al finalizar"
        ]
      },
      {
        name: "Propiedades que pintamos",
        items: [
          "Casas residenciales (todas las tallas)",
          "Apartamentos y condominios",
          "Townhouses",
          "Oficinas y locales comerciales",
          "Restaurantes y cafes",
          "Almacenes y depósitos"
        ]
      },
      {
        name: "Tipos de pintura que usamos",
        items: [
          "Pintura látex (interiores)",
          "Pintura acrílica (exteriores)",
          "Pintura semi-brillante y satinada",
          "Pinturas ecológicas (bajo VOC)",
          "Pinturas especiales antihongos"
        ]
      }
    ],
    cta: "Obtén tu cotización gratuita hoy"
  },
  {
    id: 'ventanas',
    icon: Wind,
    image: "/door2.png",
    imageBefore: "/door1.png",
    imageAfter: "/door2.png",
    title: "Ventanas de Impacto",
    h1: "Instalación de ventanas y puertas de impacto para huracanes en el sur de Florida",
    subtitle: "Protege tu hogar contra hurricanes, robos y ruido",
    intro: "Las ventanas de impacto son obligatorias en el sur de Florida y representan una inversión inteligente para cualquier propietario. No solo cumplen con los códigos de construcción locales, sino que también ofrecen protección superior contra huracanes, intrusos, ruido exterior y filtraciones de agua.",
    whyChoose: [
      "Certificación ASTM y Miami-Dade County approved",
      "Reducción de hasta 65% en costos de seguro",
      "Bloqueo 99% de rayos UV",
      "Reducción significativa de ruido exterior",
      "Aumento del valor de propiedad hasta 10%"
    ],
    benefits: "Además de la protección contra huracanes, las ventanas de impacto aumentan la eficiencia energética de tu hogar, reduciendo tus costos de aire acondicionado. También protegen tus muebles y pisos de la decoloración caused by el sol.",
    keywords: [
      "impact windows Miami",
      "ventanas de impacto Miami",
      "hurricane windows Miami",
      "impact doors Miami",
      "puertas de impacto Miami",
      "Miami-Dade approved windows",
      "hurricane protection Miami",
      "energy efficient windows Miami"
    ],
    faqs: [
      {
        question: "¿Las ventanas de impacto reducen el costo del seguro?",
        answer: "Sí, la mayoría de compañías de seguros en Florida ofrecen descuentos del 35-65% por tener ventanas de impacto certificadas."
      },
      {
        question: "¿Cuánto cuestan las ventanas de impacto?",
        answer: "El costo varía según el tamaño y tipo de ventana. Ofrecemos financiamiento disponible y evaluaciones gratuitas."
      },
      {
        question: "¿Requieren mantenimiento especial?",
        answer: "No, las ventanas de impacto requieren el mismo mantenimiento que ventanas tradicionales: limpieza regular y revisión anual de sellos."
      }
    ],
    sections: [
      {
        name: "Beneficios Esenciales",
        items: [
          "Protección certificado contra Category 5 hurricanes",
          "Seguridad reforzada contra intrusos",
          "Ahorro de energía (aislamiento térmico)",
          "Reducción de ruido exterior hasta 40%",
          "Bloqueo 99% de rayos UV",
          "Aumento del valor de la propiedad"
        ]
      },
      {
        name: "Nuestro Proceso",
        items: [
          "Medición profesional gratuita",
          "Asesoría en selección de marcos y estilos",
          "Instalación certificada por fabricantes",
          "Sellado profesional antihumedad",
          "Retiro de ventanas anteriores",
          "Garantía de instalación"
        ]
      },
      {
        name: "Tipos de ventanas",
        items: [
          "Ventanas de desplazamiento (single/double hung)",
          "Ventanas correderas (sliding)",
          "Ventanas de proyección (casement)",
          "Ventanas de arco (awning)",
          "Puertas correderas de impacto",
          "Puertas french de impacto"
        ]
      }
    ],
    cta: "Solicita tu evaluación gratuita"
  },
  {
    id: 'paneles',
    icon: Layout,
    image: "/wallpanel2.png",
    imageBefore: "/wallpanel1.png",
    imageAfter: "/wallpanel2.png",
    title: "Wall Panels Decorativos",
    h1: "Instalación de paneles de pared decorativos y slat wall en hogares y negocios",
    subtitle: "Transforma cualquier espacio en minutos",
    intro: "Los paneles decorativos son la tendencia numero uno en diseño de interiores. Ya sea que busques un look moderno con slat wall, un toque elegante con paneles 3D, o una pared-accent que impresione, tenemos la solución perfecta para ti.",
    whyChoose: [
      "Instalación en tiempo récord",
      "Más de 50 estilos y colores disponibles",
      "Materiales resistentes a la humedad (ideal para Miami)",
      "Fácil limpieza y mantenimiento",
      "Transformación instantánea sin obras"
    ],
    benefits: "Los paneles decorativos pueden transformar una habitación aburrida en un espacio sofisticado en cuestión de horas. Son perfectos para crear paredes accent, cubrir imperfecciones, y añadir textura sin necesidad de pintura o papel tapiz.",
    keywords: [
      "wall panel installation Miami",
      "slat wall Miami",
      "decorative wall panels",
      "3D wall panels Miami",
      "accent wall panels",
      "wainscoting Miami",
      "panel de pared Miami",
      "modern wall design Miami"
    ],
    faqs: [
      {
        question: "¿Los paneles se pueden instalar en cualquier pared?",
        answer: "Sí, siempre y cuando la pared esté limpia, seca y libre de moho. Nosotros evaluamos tu espacio antes de instalar."
      },
      {
        question: "¿Los paneles son resistentes al agua?",
        answer: "Contamos con paneles específicamente diseñados para áreas húmedas como baños y cocinas."
      },
      {
        question: "¿Cuánto tiempo dura la instalación?",
        answer: "Una habitación promedio toma entre 4-8 horas, dependiendo del tipo de panel y el tamaño del espacio."
      }
    ],
    sections: [
      {
        name: "Tipos de Paneles que instalamos",
        items: [
          "Slat Wall (listones de madera/MDF)",
          "Paneles 3D (diseños geométricos)",
          "Paneles de madera natural",
          "Paneles de MDF pintados",
          "Paneles de PVC (resistentes al agua)",
          "Paneles acústicos (redución de sonido)"
        ]
      },
      {
        name: "Aplicaciones populares",
        items: [
          "Paredes accent en sala",
          "Header de cama en dormitorio",
          "Paredes de recepción",
          "Areas de bar y restaurante",
          "Home offices",
          "Clósets y walk-in closets"
        ]
      },
      {
        name: "Ventajas vs otras opciones",
        items: [
          "Instalación más rápida que cerámica",
          "Más económico que piedra natural",
          "No requiere mortero ni pegamento especial",
          "Fácil reemplazo si se daña"
        ]
      }
    ],
    cta: "Ver catálogo de paneles"
  },
  {
    id: 'pressure-washing',
    icon: Droplets,
    image: "/pressure2.png",
    imageBefore: "/pressure1.png",
    imageAfter: "/pressure2.png",
    title: "Lavado a Presión",
    h1: "Servicio de lavado a presión para exteriores (pisos, paredes, driveways y más)",
    subtitle: "Renueva la apariencia de tu propiedad en horas",
    intro: "El pressure washing es la forma más efectiva de limpiar superficies exteriores.Nuestro equipo utiliza equipos profesionales de alta presión para eliminar moho, suciedad, manchas de aceite y décadas de desgaste, devolviendo a tu propiedad su apariencia original.",
    whyChoose: [
      "Equipo comercial de 4000+ PSI",
      "Técnicos certificados y asegurados",
      "Productos biodegradables seguros para mascotas",
      "Servicio rápido (la mayoría de propiedades en un día)",
      "Protección de plantas y landscaping"
    ],
    benefits: "En el clima húmedo de Miami, el moho y los algas se acumulan rápidamente en superficies exteriores. El pressure washing regular no solo mejora la apariencia, sino que también previene el deterioro prematuro de concretos, maderas y revestimientos.",
    keywords: [
      "pressure washing Miami",
      "pressure wash Miami",
      "driveway cleaning Miami",
      "pool deck cleaning Miami",
      "roof cleaning Miami",
      "house washing Miami",
      "exterior cleaning Miami",
      "soft wash Miami"
    ],
    faqs: [
      {
        question: "¿El pressure washing puede dañar mi propiedad?",
        answer: "Nuestros técnicos están capacitados para ajustar la presión según el tipo de superficie. Usamos presiones bajas para superficies delicadas y más altas para concreto."
      },
      {
        question: "¿Cuánto tiempo toma el servicio?",
        answer: "Una casa promedio toma entre 2-4 horas. Driveways y piscinas pueden tomar 1-3 horas adicionales."
      },
      {
        question: "¿Necesito estar presente durante el servicio?",
        answer: "No necesariamente. Solo necesitamos acceso a las áreas a limpiar. Podemos coordinar todo antes de nuestra llegada."
      }
    ],
    sections: [
      {
        name: "Áreas que limpiamos",
        items: [
          "Driveways y estacionamientos",
          "Aceras y banquetas",
          "Paredes exteriores de casas",
          "Pisos de patio y piscina",
          "Techos (soft wash)",
          "Muebles de exterior",
          "Garajes y depósitos"
        ]
      },
      {
        name: "Qué eliminamos",
        items: [
          "Moho y algas",
          "Suciedad y polvo",
          "Manchas de aceite y grasa",
          "Musgo y líquenes",
          "Decoloración por sol",
          "Marcas de neumáticos",
          "Excrementos de pájaros"
        ]
      },
      {
        name: "Por qué elegirnos",
        items: [
          "Técnicos con seguro de responsabilidad",
          "Equipos de última generación",
          "Productos ecológicos",
          "Garantía de satisfacción",
          "Precios transparentes"
        ]
      }
    ],
    cta: "Agenda tu limpieza"
  },
  {
    id: 'laminado',
    icon: Square,
    image: "/laminado2.png",
    imageBefore: "/laminado1.png",
    imageAfter: "/laminado2.png",
    title: "Piso Laminado",
    h1: "Instalación profesional de piso laminado para casas, apartamentos y oficinas",
    subtitle: "Belleza de madera a una fracción del costo",
    intro: "El piso laminado ofrece la apariencia elegante de madera dura a una fracción del costo. Moderno, duradero y fácil de mantener, es la opción perfecta para propietarios que buscan calidad sin comprometer su presupuesto.",
    whyChoose: [
      "más de 100 estilos disponibles",
      "Instalación profesional sin polvo",
      "Garantía del fabricante (10-25 años)",
      "Resistente a manchas y rayones",
      "Compatible con sistema de radiante"
    ],
    benefits: "El piso laminado es resistente a las manchas, los rayones y la decoloración, lo que lo hace perfecto para familias con niños y mascotas. Además, se limpia fácilmente con solo passar un trapeador húmedo.",
    keywords: [
      "laminate flooring Miami",
      "piso laminado Miami",
      "laminate installation Miami",
      "hardwood flooring alternative",
      "luxury vinyl plank Miami",
      "LVP installation Miami",
      "flooring contractor Miami",
      " piso de madera Miami"
    ],
    faqs: [
      {
        question: "¿El piso laminado se puede instalar sobre concreto?",
        answer: "Sí, siempre que el concreto esté nivelado, seco y libre de humedad. Nosotros evaluamos tu subsuelo gratis."
      },
      {
        question: "¿Cuánto tiempo dura el piso laminado?",
        answer: "Con mantenimiento adecuado, el piso laminado de calidad puede durar entre 15-25 años."
      },
      {
        question: "¿Es resistente al agua?",
        answer: "Contamos con opciones resistente al agua (waterproof) ideales para cocinas y baños."
      }
    ],
    sections: [
      {
        name: "Estilos disponibles",
        items: [
          "Roble americano",
          "Nogal brasileiro",
          "Arce maple",
          "Caoba",
          "Colores modernos (gris, blanco, negro)",
          "Texturas sincronizadas"
        ]
      },
      {
        name: "Nuestro proceso de instalación",
        items: [
          "Evaluación gratuita del espacio",
          "Medición precisa",
          "Nivelación de subsuelo",
          "Instalación de underlayment",
          "Colocación profesional",
          "Acabado de bordes"
        ]
      },
      {
        name: "Ventajas del laminado",
        items: [
          "Apariencia de madera natural",
          "10-25 años de garantía",
          "Instalación sin pegamento",
          "Fácil reemplazo de tablas dañadas",
          "No requiere pulido"
        ]
      }
    ],
    cta: "Ver muestras gratuitas"
  },
  {
    id: 'molduras',
    icon: Maximize,
    image: "/moldura2.png",
    imageBefore: "/moldura1.png",
    imageAfter: "/moldura2.png",
    title: "Molduras y Acabados",
    h1: "Instalación de molduras, zócalos y crown molding para interiores",
    subtitle: "El detalle que transforma una casa común en una mansión",
    intro: "Las molduras son el secreto mejor guardado de los diseñadores de interiores. Un crown molding bien instalado puede elevar el valor percibido de tu propiedad en un 10-20%, creando una transición elegante entre paredes y techos.",
    whyChoose: [
      "Más de 50 perfiles disponibles",
      "Instalación perfecta en esquinas",
      "Zócalos de alta densidad (no se pandean)",
      "Pintura profesional disponible",
      "Experiencia en casas de lujo"
    ],
    benefits: "Las molduras no solo son decorativas, sino que también ocultan imperfecciones en las uniones entre paredes y techos, y protegen las paredes de daños por muebles.",
    keywords: [
      "crown molding Miami",
      "baseboard installation Miami",
      "trim work Miami",
      "crown moulding installation",
      "door casing Miami",
      "window casing Miami",
      "molduras decorativas Miami",
      "carpintería Miami"
    ],
    faqs: [
      {
        question: "¿Qué tipo de moldura me conviene?",
        answer: "Depende del estilo de tu hogar. Para casas modernas recomendamos molduras lisas; para tradicionales, perfiles más elaborados."
      },
      {
        question: "¿Se pueden pintar las molduras?",
        answer: "Sí, nous paintamos en cualquier color. El blanco es el más popular, pero podemos hacer cualquier color que necesites."
      },
      {
        question: "¿Cuánto tiempo toma instalar molduras en una casa?",
        answer: "Una casa promedio toma entre 1-3 días, dependiendo del tamaño y la cantidad de molduras."
      }
    ],
    sections: [
      {
        name: "Tipos de molduras",
        items: [
          "Crown molding (techo)",
          "Zócalos / Baseboards",
          "Chair rail (wainscoting)",
          "Marcos de puertas",
          "Marcos de ventanas",
          "Paneles decorativos"
        ]
      },
      {
        name: "Materiales disponibles",
        items: [
          "MDF de alta densidad",
          "Madera sólida (pine, oak, poplar)",
          "Poliestireno (ligero y económico)",
          "PVC (resistente al agua)"
        ]
      },
      {
        name: "Por qué instalar molduras",
        items: [
          "Eleva el valor de la propiedad",
          "Crea transición elegante pared-techo",
          "Oculta imperfecciones estructurales",
          "Añade carácter y elegancia",
          "Protección contra daños de muebles"
        ]
      }
    ],
    cta: "Solicitar cotización"
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

// SEO Site-wide data
export const siteSEO = {
  name: "Luxury Paintworks",
  description: "Servicios profesionales de pintura, ventanas de impacto, paneles decorativos y más en Miami. Licencia y seguro. Cotizaciones gratis.",
  keywords: [
    "pintura Miami",
    "painting contractor Miami",
    "pressure washing Miami",
    "impact windows Miami",
    "laminate flooring Miami",
    "wall panels Miami",
    "home renovation Miami",
    "interior design Miami"
  ],
  serviceAreas: [
    "Miami",
    "Miami Beach",
    "Miami Gardens",
    "Hialeah",
    "Hollywood",
    "Fort Lauderdale",
    "Pembroke Pines",
    "Coral Gables",
    "Aventura",
    "Sunny Isles Beach"
  ]
};

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