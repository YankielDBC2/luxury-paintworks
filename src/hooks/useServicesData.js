import { useLanguage } from '../contexts/LanguageContext.jsx';
import { servicesData as servicesDataEs } from '../data/servicesData.js';

// English translations for services data
const servicesDataEn = [
  {
    id: 'pintura',
    icon: servicesDataEs[0].icon,
    image: servicesDataEs[0].image,
    imageBefore: servicesDataEs[0].imageBefore,
    imageAfter: servicesDataEs[0].imageAfter,
    title: "Interior & Exterior Painting",
    h1: "Interior and exterior painting for homes, apartments, offices and businesses in Miami and surrounding areas",
    subtitle: "Transform your property with colors that last for years",
    intro: "Painting is the most effective and affordable way to transform any space. Whether you need to refresh your home, apartment, office or business, our team of professional painters in Miami guarantees impeccable finishes that exceed your expectations.",
    whyChoose: [
      "Over 10 years of experience in South Florida",
      "Top-quality paints (Benjamin Moore, Sherwin-Williams)",
      "Professional surface preparation",
      "Complete cleanup after finishing",
      "Warranty on all our work"
    ],
    benefits: "A professional paint job not only improves your property's appearance but also protects it from humidity, mold and UV rays. In Miami, where humidity is high, proper surface preparation is key to making paint last for years.",
    keywords: [
      "interior painting Miami",
      "exterior painting Miami",
      "professional painters Miami",
      "house painting Miami",
      "commercial painting Miami"
    ],
    faqs: [
      {
        question: "How long does a professional paint job last?",
        answer: "A quality professional paint job can last 5-10 years indoors and 5-7 years outdoors, depending on weather conditions."
      },
      {
        question: "How long does it take to paint a house?",
        answer: "An average 2,000 square foot home takes 3-5 days, depending on surface condition and paint type."
      },
      {
        question: "Do I need to prepare anything before the painters arrive?",
        answer: "We handle everything: furniture protection, surface preparation, and final cleanup. You just need to clear accessible areas."
      }
    ],
    sections: [
      {
        name: "What's Included in Our Service",
        items: [
          "Free property evaluation",
          "Surface preparation (sanding, crack repair, sealing)",
          "Protection of furniture, floors and non-painted areas",
          "Expert application (roller, brush or spray)",
          "Quality inspection",
          "Complete cleanup after finishing"
        ]
      },
      {
        name: "Properties We Paint",
        items: [
          "Residential homes (all sizes)",
          "Apartments and condos",
          "Townhouses",
          "Offices and commercial spaces",
          "Restaurants and cafes",
          "Warehouses and storage"
        ]
      },
      {
        name: "Types of Paint We Use",
        items: [
          "Latex paint (interiors)",
          "Acrylic paint (exteriors)",
          "Semi-gloss and satin paint",
          "Eco-friendly paints (low VOC)",
          "Special anti-mold paints"
        ]
      }
    ],
    cta: "Get your free quote today"
  },
  {
    id: 'ventanas',
    icon: servicesDataEs[1].icon,
    image: servicesDataEs[1].image,
    imageBefore: servicesDataEs[1].imageBefore,
    imageAfter: servicesDataEs[1].imageAfter,
    title: "Impact Windows",
    h1: "Installation of impact windows and hurricane impact doors in South Florida",
    subtitle: "Protect your home against hurricanes, break-ins and noise",
    intro: "Impact windows are mandatory in South Florida and represent a smart investment for any property owner. They not only meet local building codes but also offer superior protection against hurricanes, intruders, outside noise and water leaks.",
    whyChoose: [
      "ASTM certification and Miami-Dade County approved",
      "Up to 65% reduction in insurance costs",
      "99% blocking of UV rays",
      "Significant reduction in outside noise",
      "Property value increase up to 10%"
    ],
    benefits: "In addition to hurricane protection, impact windows increase your home's energy efficiency, reducing your air conditioning costs. They also protect your furniture and floors from sun fading.",
    keywords: [
      "impact windows Miami",
      "hurricane windows Miami",
      "impact doors Miami",
      "Miami-Dade approved windows",
      "hurricane protection Miami"
    ],
    faqs: [
      {
        question: "Do impact windows reduce insurance costs?",
        answer: "Yes, most insurance companies in Florida offer 35-65% discounts for having certified impact windows."
      },
      {
        question: "How much do impact windows cost?",
        answer: "Cost varies by size and type of window. We offer financing available and free evaluations."
      },
      {
        question: "Do they require special maintenance?",
        answer: "No, impact windows require the same maintenance as traditional windows: regular cleaning and annual seal inspection."
      }
    ],
    sections: [
      {
        name: "Essential Benefits",
        items: [
          "Certified Category 5 hurricane protection",
          "Reinforced security against intruders",
          "Energy savings (thermal insulation)",
          "Outside noise reduction up to 40%",
          "99% UV ray blocking",
          "Property value increase"
        ]
      },
      {
        name: "Our Process",
        items: [
          "Free professional measurement",
          "Frame and style selection guidance",
          "Certified installation by manufacturers",
          "Professional moisture sealing",
          "Removal of old windows",
          "Installation warranty"
        ]
      },
      {
        name: "Types of Windows",
        items: [
          "Single/double hung windows",
          "Sliding windows",
          "Casement windows",
          "Awning windows",
          "Sliding impact doors",
          "French impact doors"
        ]
      }
    ],
    cta: "Request your free evaluation"
  },
  {
    id: 'paneles',
    icon: servicesDataEs[2].icon,
    image: servicesDataEs[2].image,
    imageBefore: servicesDataEs[2].imageBefore,
    imageAfter: servicesDataEs[2].imageAfter,
    title: "Decorative Wall Panels",
    h1: "Installation of decorative wall panels and slat wall in homes and businesses",
    subtitle: "Transform any space in minutes",
    intro: "Decorative panels are the number one trend in interior design. Whether you're looking for a modern look with slat wall, an elegant touch with 3D panels, or an accent wall that impresses, we have the perfect solution for you.",
    whyChoose: [
      "Installation in record time",
      "Over 50 styles and colors available",
      "Moisture-resistant materials (ideal for Miami)",
      "Easy cleaning and maintenance",
      "Instant transformation without construction"
    ],
    benefits: "Decorative panels can transform a boring room into a sophisticated space in just a few hours. They're perfect for creating accent walls, covering imperfections, and adding texture without needing paint or wallpaper.",
    keywords: [
      "wall panel installation Miami",
      "slat wall Miami",
      "decorative wall panels",
      "3D wall panels Miami",
      "accent wall panels"
    ],
    faqs: [
      {
        question: "Can panels be installed on any wall?",
        answer: "Yes, as long as the wall is clean, dry and mold-free. We evaluate your space before installing."
      },
      {
        question: "Are the panels water resistant?",
        answer: "We have panels specifically designed for humid areas like bathrooms and kitchens."
      },
      {
        question: "How long does installation take?",
        answer: "An average room takes 4-8 hours, depending on panel type and space size."
      }
    ],
    sections: [
      {
        name: "Types of Panels We Install",
        items: [
          "Slat Wall (wood/MDF slats)",
          "3D Panels (geometric designs)",
          "Natural wood panels",
          "Painted MDF panels",
          "PVC panels (water resistant)",
          "Acoustic panels (sound reduction)"
        ]
      },
      {
        name: "Popular Applications",
        items: [
          "Living room accent walls",
          "Bedroom headboards",
          "Reception areas",
          "Bar and restaurant areas",
          "Home offices",
          "Closets and walk-in closets"
        ]
      },
      {
        name: "Advantages vs Other Options",
        items: [
          "Faster installation than ceramic",
          "More affordable than natural stone",
          "No mortar or special glue required",
          "Easy replacement if damaged"
        ]
      }
    ],
    cta: "View panel catalog"
  },
  {
    id: 'pressure-washing',
    icon: servicesDataEs[3].icon,
    image: servicesDataEs[3].image,
    imageBefore: servicesDataEs[3].imageBefore,
    imageAfter: servicesDataEs[3].imageAfter,
    title: "Pressure Washing",
    h1: "Pressure washing service for exteriors (floors, walls, driveways and more)",
    subtitle: "Renew your property's appearance in hours",
    intro: "Pressure washing is the most effective way to clean exterior surfaces. Our team uses professional high-pressure equipment to remove mold, dirt, oil stains and decades of wear, restoring your property's original appearance.",
    whyChoose: [
      "Commercial equipment 4000+ PSI",
      "Certified and insured technicians",
      "Biodegradable products safe for pets",
      "Fast service (most properties in one day)",
      "Protection of plants and landscaping"
    ],
    benefits: "In Miami's humid climate, mold and algae quickly accumulate on exterior surfaces. Regular pressure washing not only improves appearance but also prevents premature deterioration of concrete, wood and siding.",
    keywords: [
      "pressure washing Miami",
      "driveway cleaning Miami",
      "pool deck cleaning Miami",
      "roof cleaning Miami",
      "house washing Miami"
    ],
    faqs: [
      {
        question: "Can pressure washing damage my property?",
        answer: "Our technicians are trained to adjust pressure based on surface type. We use lower pressures for delicate surfaces and higher for concrete."
      },
      {
        question: "How long does the service take?",
        answer: "An average home takes 2-4 hours. Driveways and pools can take an additional 1-3 hours."
      },
      {
        question: "Do I need to be present during the service?",
        answer: "Not necessarily. We just need access to the areas to be cleaned. We can coordinate everything before arrival."
      }
    ],
    sections: [
      {
        name: "Areas We Clean",
        items: [
          "Driveways and parking lots",
          "Sidewalks and walkways",
          "Exterior walls of homes",
          "Patio and pool deck floors",
          "Roofs (soft wash)",
          "Outdoor furniture",
          "Garages and storage"
        ]
      },
      {
        name: "What We Remove",
        items: [
          "Mold and algae",
          "Dirt and dust",
          "Oil and grease stains",
          "Moss and lichens",
          "Sun discoloration",
          "Tire marks",
          "Bird droppings"
        ]
      },
      {
        name: "Why Choose Us",
        items: [
          "Technicians with liability insurance",
          "Latest generation equipment",
          "Eco-friendly products",
          "Satisfaction guarantee",
          "Transparent pricing"
        ]
      }
    ],
    cta: "Schedule your cleaning"
  },
  {
    id: 'laminado',
    icon: servicesDataEs[4].icon,
    image: servicesDataEs[4].image,
    imageBefore: servicesDataEs[4].imageBefore,
    imageAfter: servicesDataEs[4].imageAfter,
    title: "Laminate Flooring",
    h1: "Professional laminate flooring installation for homes, apartments and offices",
    subtitle: "Wood beauty at a fraction of the cost",
    intro: "Laminate flooring offers the elegant look of hardwood at a fraction of the cost. Modern, durable and easy to maintain, it's the perfect choice for property owners seeking quality without compromising their budget.",
    whyChoose: [
      "Over 100 styles available",
      "Professional dust-free installation",
      "Manufacturer warranty (10-25 years)",
      "Stain and scratch resistant",
      "Compatible with radiant systems"
    ],
    benefits: "Laminate flooring is stain, scratch and fade resistant, making it perfect for families with children and pets. It's also easily cleaned with just a damp mop.",
    keywords: [
      "laminate flooring Miami",
      "laminate installation Miami",
      "hardwood flooring alternative",
      "luxury vinyl plank Miami",
      "LVP installation Miami"
    ],
    faqs: [
      {
        question: "Can laminate flooring be installed over concrete?",
        answer: "Yes, as long as the concrete is level, dry and moisture-free. We evaluate your subfloor for free."
      },
      {
        question: "How long does laminate flooring last?",
        answer: "With proper maintenance, quality laminate flooring can last 15-25 years."
      },
      {
        question: "Is it water resistant?",
        answer: "We have water-resistant (waterproof) options ideal for kitchens and bathrooms."
      }
    ],
    sections: [
      {
        name: "Available Styles",
        items: [
          "American Oak",
          "Brazilian Walnut",
          "Maple",
          "Mahogany",
          "Modern colors (gray, white, black)",
          "Synchronized textures"
        ]
      },
      {
        name: "Our Installation Process",
        items: [
          "Free space evaluation",
          "Precise measurement",
          "Subfloor leveling",
          "Underlayment installation",
          "Professional placement",
          "Edge finishing"
        ]
      },
      {
        name: "Laminate Advantages",
        items: [
          "Natural wood appearance",
          "10-25 year warranty",
          "Glue-free installation",
          "Easy replacement of damaged boards",
          "No polishing required"
        ]
      }
    ],
    cta: "View free samples"
  },
  {
    id: 'molduras',
    icon: servicesDataEs[5].icon,
    image: servicesDataEs[5].image,
    imageBefore: servicesDataEs[5].imageBefore,
    imageAfter: servicesDataEs[5].imageAfter,
    title: "Moldings & Trim",
    h1: "Installation of moldings, baseboards and crown molding for interiors",
    subtitle: "The detail that transforms a regular house into a mansion",
    intro: "Moldings are the best-kept secret of interior designers. A well-installed crown molding can increase your property's perceived value by 10-20%, creating an elegant transition between walls and ceilings.",
    whyChoose: [
      "Over 50 profiles available",
      "Perfect corner installation",
      "High-density baseboards (won't warp)",
      "Professional painting available",
      "Experience in luxury homes"
    ],
    benefits: "Moldings are not only decorative but also hide imperfections in wall and ceiling joints, and protect walls from furniture damage.",
    keywords: [
      "crown molding Miami",
      "baseboard installation Miami",
      "trim work Miami",
      "door casing Miami",
      "window casing Miami"
    ],
    faqs: [
      {
        question: "What type of molding is right for me?",
        answer: "It depends on your home's style. For modern homes, we recommend smooth moldings; for traditional, more elaborate profiles."
      },
      {
        question: "Can moldings be painted?",
        answer: "Yes, we paint them in any color. White is the most popular, but we can match any color you need."
      },
      {
        question: "How long does it take to install moldings in a home?",
        answer: "An average home takes 1-3 days, depending on size and amount of moldings."
      }
    ],
    sections: [
      {
        name: "Types of Moldings",
        items: [
          "Crown molding (ceiling)",
          "Baseboards",
          "Chair rail (wainscoting)",
          "Door casings",
          "Window casings",
          "Decorative panels"
        ]
      },
      {
        name: "Available Materials",
        items: [
          "High-density MDF",
          "Solid wood (pine, oak, poplar)",
          "Polystyrene (light and affordable)",
          "PVC (water resistant)"
        ]
      },
      {
        name: "Why Install Moldings",
        items: [
          "Increases property value",
          "Creates elegant wall-ceiling transition",
          "Hides structural imperfections",
          "Adds character and elegance",
          "Protects against furniture damage"
        ]
      }
    ],
    cta: "Request quote"
  }
];

export function useServicesData() {
  const { language } = useLanguage();
  return language === 'en' ? servicesDataEn : servicesDataEs;
}
