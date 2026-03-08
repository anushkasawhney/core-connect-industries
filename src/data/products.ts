import productHoses from "@/assets/product-hoses.jpg";
import productMoulding from "@/assets/product-moulding.jpg";
import productGaskets from "@/assets/product-gaskets.jpg";
import hosesGallery1 from "@/assets/hoses-gallery-1.jpg";
import hosesGallery2 from "@/assets/hoses-gallery-2.jpg";
import gasketsGallery1 from "@/assets/gaskets-gallery-1.jpg";
import gasketsGallery2 from "@/assets/gaskets-gallery-2.jpg";
import mouldingGallery1 from "@/assets/moulding-gallery-1.jpg";
import mouldingGallery2 from "@/assets/moulding-gallery-2.jpg";
import technicalHoses from "@/assets/technical-hoses.jpg";
import technicalGaskets from "@/assets/technical-gaskets.jpg";
import technicalMoulding from "@/assets/technical-moulding.jpg";
import industryConstruction from "@/assets/industry-construction.jpg";
import industryAgriculture from "@/assets/industry-agriculture.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryChemical from "@/assets/industry-chemical.jpg";
import industryOilgas from "@/assets/industry-oilgas.jpg";
import industryAutomotive from "@/assets/industry-automotive.jpg";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  images: string[];
  tagline: string;
  description: string;
  fullDescription: string;
  technicalDrawing: string;
  specifications: { label: string; value: string }[];
  subcategories: {
    id: string;
    name: string;
    description: string;
    details: string;
    image: string;
  }[];
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  products: string;
  logo?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Industrial Hose Pipes",
    slug: "industrial-hose-pipes",
    image: productHoses,
    images: [productHoses, hosesGallery1, hosesGallery2],
    tagline: "Engineered for reliable fluid transfer across industries.",
    description: "Premium quality industrial hose pipes for fluid transfer, air supply, and material handling applications.",
    fullDescription: "Our comprehensive range of industrial hose pipes is designed to meet the most demanding applications across industries.",
    technicalDrawing: technicalHoses,
    specifications: [
      { label: "Material", value: "EPDM, Nitrile, Neoprene, Silicone, PVC" },
      { label: "Working Pressure", value: "Up to 400 bar" },
      { label: "Temperature Range", value: "-40°C to +230°C" },
      { label: "Size Range", value: "6mm to 305mm ID" },
      { label: "Standards", value: "IS, BS, DIN, SAE" },
    ],
    subcategories: [
      { id: "1a", name: "Industrial Hose Pipes", description: "General-purpose rubber hose pipes", details: "Premium rubber hose pipes for industrial fluid transfer, air supply, and material handling. Available in various sizes and pressure ratings.", image: hosesGallery1 },
      { id: "1b", name: "Industrial Rubber Sheets", description: "Commercial & insertion grade sheets", details: "Natural rubber, neoprene, nitrile, and EPDM rubber sheets in 1mm to 50mm thickness for general industrial applications.", image: hosesGallery2 },
      { id: "1c", name: "PVC Reinforced Flexible Hose Pipes", description: "Braided PVC for medium pressure", details: "Polyester-braided PVC hoses with crystal clear visibility, ideal for water transfer, air supply, and agricultural use.", image: productHoses },
      { id: "1d", name: "Special Rubber Hose Pipes (Custom Made)", description: "Tailor-made to your specifications", details: "Custom-designed rubber hoses manufactured to exact specifications for unique applications. From prototype to bulk production.", image: hosesGallery1 },
      { id: "1e", name: "High Pressure/Temperature Hydraulic Hose Pipes", description: "SAE/DIN rated hydraulic hoses", details: "Wire-braided and spiral-wound hydraulic hoses rated up to 420 bar. Temperature range -40°C to +125°C. SAE 100R1 to R13.", image: hosesGallery2 },
      { id: "1f", name: "Electrical Rubber Insulation Mats", description: "As per IS-5425/IS-15652", details: "Electrical insulation mats tested and certified to IS-5425 and IS-15652 standards. Available in all voltage classes from 1.1kV to 66kV.", image: productHoses },
      { id: "1g", name: "Nylon Braided PVC Flexible Hose Pipes", description: "Lightweight, durable PVC hoses", details: "Nylon-reinforced PVC hoses offering excellent flexibility with higher burst pressure ratings for demanding applications.", image: hosesGallery1 },
      { id: "1h", name: "Skirt Rubber Board/Lagging Rubber Sheets", description: "For conveyor belt systems", details: "High-quality skirt rubber boards and lagging sheets for conveyor belt systems. Wear-resistant and available in various hardness grades.", image: hosesGallery2 },
      { id: "1i", name: "PVC Reinforced Flexible Duct Hose Pipes", description: "For ducting and ventilation", details: "Flexible PVC duct hoses with spiral wire reinforcement for dust collection, fume extraction, and ventilation systems.", image: productHoses },
      { id: "1j", name: "Silicon Transparent/Braided Flexible Hose Pipes", description: "FDA-grade silicone hoses", details: "Medical and food-grade silicone hoses. Temperature rated -60°C to +200°C. Available transparent and braided varieties.", image: hosesGallery1 },
      { id: "1k", name: "SS/PTFE (Teflon) Hose Pipes with Fittings & Bellows", description: "Corrosion-resistant metallic hoses", details: "Stainless steel corrugated and PTFE-lined hoses with end fittings for chemical, pharmaceutical, and high-temperature applications. Expansion bellows also available.", image: hosesGallery2 },
      { id: "1l", name: "Hose Accessories and Fittings", description: "Clamps, couplings, adaptors", details: "Complete range of hose accessories including hose clamps, quick-release couplings, cam-lock fittings, and band-it clamps.", image: productHoses },
    ],
  },
  {
    id: "2",
    name: "Industrial Gaskets",
    slug: "industrial-gaskets",
    image: productGaskets,
    images: [productGaskets, gasketsGallery1, gasketsGallery2],
    tagline: "Precision sealing for critical industrial joints.",
    description: "High-performance gaskets and sealing solutions for critical industrial applications.",
    fullDescription: "Our gasket range covers every industrial sealing requirement from simple flat gaskets to complex spiral wound and metallic gaskets.",
    technicalDrawing: technicalGaskets,
    specifications: [
      { label: "Material", value: "PTFE, Graphite, Rubber, Metal, Compressed Fibre" },
      { label: "Working Pressure", value: "Up to 250 bar" },
      { label: "Temperature Range", value: "-200°C to +1000°C" },
      { label: "Size Range", value: "DN15 to DN2000" },
      { label: "Standards", value: "ASME, DIN, BS, IS" },
    ],
    subcategories: [
      { id: "3a", name: "Spiral Wound Gaskets", description: "For high-pressure flanged joints", details: "Available with inner and outer rings. Materials include SS304, SS316, graphite, and PTFE filler.", image: gasketsGallery1 },
      { id: "3b", name: "Ring Joint Gaskets", description: "Metal-to-metal sealing", details: "Precision-machined RTJ gaskets in oval and octagonal profiles. Materials include SS, Inconel, and Monel.", image: gasketsGallery2 },
      { id: "3c", name: "Non-Metallic Gaskets", description: "Sheet and cut gaskets", details: "Compressed fibre, rubber, PTFE, and graphite sheet gaskets. CNC-cut to any size and shape.", image: productGaskets },
    ],
  },
  {
    id: "3",
    name: "Rubber Mouldings",
    slug: "rubber-mouldings",
    image: productMoulding,
    images: [productMoulding, mouldingGallery1, mouldingGallery2],
    tagline: "Custom-engineered rubber components for every application.",
    description: "Precision-engineered rubber moulded components for industrial sealing and vibration dampening.",
    fullDescription: "We specialize in supplying high-quality rubber moulded components manufactured through compression, transfer, and injection moulding processes.",
    technicalDrawing: technicalMoulding,
    specifications: [
      { label: "Material", value: "Natural Rubber, Nitrile, Silicone, Viton, EPDM" },
      { label: "Hardness Range", value: "30 to 90 Shore A" },
      { label: "Temperature Range", value: "-60°C to +300°C" },
      { label: "Size Range", value: "2mm to 1000mm" },
      { label: "Tolerance", value: "As per ISO 3302 Class M2" },
    ],
    subcategories: [
      { id: "2a", name: "O-Rings", description: "Standard and custom O-rings", details: "Available in all standard AS568 and metric sizes. Materials include NBR, FKM, EPDM, and silicone.", image: mouldingGallery1 },
      { id: "2b", name: "Rubber Bushings", description: "Vibration isolation bushings", details: "Engineered for vibration dampening in machinery, automotive, and industrial equipment.", image: mouldingGallery2 },
      { id: "2c", name: "Custom Mouldings", description: "Bespoke rubber components", details: "Custom-designed and manufactured to your exact specifications. From prototype to production runs.", image: productMoulding },
    ],
  },
];

export const industries = [
  { name: "Construction", icon: "Building2", description: "Heavy-duty hoses and seals for construction equipment and infrastructure projects.", image: industryConstruction },
  { name: "Agriculture", icon: "Sprout", description: "Irrigation hoses, PVC pipes, and rubber components for farming machinery.", image: industryAgriculture },
  { name: "Manufacturing", icon: "Factory", description: "Precision gaskets, seals, and hoses for production lines and machinery.", image: industryManufacturing },
  { name: "Chemical Processing", icon: "FlaskConical", description: "Chemical-resistant hoses and gaskets for safe handling of corrosive substances.", image: industryChemical },
  { name: "Oil & Gas", icon: "Fuel", description: "High-pressure hoses and sealing solutions for upstream and downstream operations.", image: industryOilgas },
  { name: "Automotive", icon: "Car", description: "Rubber mouldings, hoses, and gaskets for automotive OEM and aftermarket.", image: industryAutomotive },
];

export const brands: Brand[] = [
  { id: "kohinoor", name: "Kohinoor", description: "A trusted name in Indian industrial manufacturing, Kohinoor delivers high-quality rubber and polymer products meeting stringent industrial standards. Known for durability and performance across demanding applications.", products: "Industrial Hoses, Rubber Sheets, PVC Pipes" },
  { id: "dunlop", name: "Dunlop", description: "Global leader in rubber technology with over a century of expertise. Dunlop manufactures premium conveyor belts, industrial hoses, and rubber products trusted by industries worldwide.", products: "Conveyor Belts, Industrial Hoses, Rubber Products" },
  { id: "gates", name: "Gates", description: "World-renowned manufacturer of power transmission and fluid transfer solutions. Gates products are engineered for performance, reliability, and longevity in the toughest industrial environments.", products: "Hydraulic Hoses, Industrial Belts, Fluid Power Components" },
  { id: "indo-makson", name: "Indo-Makson", description: "Specialist manufacturer of high-quality industrial hoses and rubber products for Indian industry. Indo-Makson combines quality materials with precision manufacturing.", products: "Industrial Hoses, Rubber Components, Flexible Connectors" },
  { id: "manuli-hydraulics", name: "Manuli Hydraulics", description: "Italian engineering excellence in hydraulic hose systems. Manuli Hydraulics provides complete fluid conveyance solutions with superior pressure ratings and reliability.", products: "Hydraulic Hoses, Fittings, Hose Assemblies, Couplings" },
  { id: "dutron", name: "Dutron", description: "India's leading manufacturer of PVC pressure pipes and fittings. Dutron products are ISI-marked and widely used in plumbing, irrigation, and industrial applications.", products: "PVC Pressure Pipes, PVC Fittings, CPVC Pipes" },
  { id: "flowiron", name: "FLOWIRON", description: "Manufacturer of premium quality industrial flow products including valves, fittings, and pipe accessories. FLOWIRON products ensure reliable flow control in demanding environments.", products: "Valves, Pipe Fittings, Flow Control Products" },
  { id: "duplon", name: "DUPLON", description: "Quality manufacturer of rubber and polymer products for diverse industrial applications. DUPLON delivers reliable components with consistent quality and performance.", products: "Rubber Sheets, Gaskets, Moulded Components" },
  { id: "dutron-kanaflex", name: "Dutron Kanaflex", description: "Joint venture combining Dutron's market expertise with Kanaflex's Japanese technology. Produces high-quality flexible corrugated pipes and ducting solutions.", products: "Flexible Corrugated Pipes, Suction Hoses, Duct Hoses" },
  { id: "goodyear", name: "GOOD YEAR", description: "Legendary brand in rubber technology, Goodyear's industrial division produces world-class hoses, belts, and rubber products engineered for maximum performance and service life.", products: "Industrial Hoses, Conveyor Belts, Rubber Products" },
  { id: "parker", name: "Parker", description: "Global leader in motion and control technologies. Parker Hannifin delivers precision-engineered hydraulic hoses, fittings, and fluid conveyance solutions for critical applications.", products: "Hydraulic Hoses, Fittings, Seals, Filtration Systems" },
  { id: "continental", name: "Continental", description: "German engineering excellence in rubber and polymer technology. Continental's industrial division supplies premium hoses, belts, and conveyor solutions to industries worldwide.", products: "Industrial Hoses, Conveyor Belts, Air Springs, Rubber Products" },
];