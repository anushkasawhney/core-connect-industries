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

// Subcategory images
import subHosePipes from "@/assets/sub-hose-pipes.jpg";
import subRubberSheets from "@/assets/sub-rubber-sheets.jpg";
import subPvcHose from "@/assets/sub-pvc-hose.jpg";
import subCustomHose from "@/assets/sub-custom-hose.jpg";
import subHydraulicHose from "@/assets/sub-hydraulic-hose.jpg";
import subElectricalMats from "@/assets/sub-electrical-mats.jpg";
import subNylonPvc from "@/assets/sub-nylon-pvc.jpg";
import subSkirtRubber from "@/assets/sub-skirt-rubber.jpg";
import subDuctHose from "@/assets/sub-duct-hose.jpg";
import subSiliconeHose from "@/assets/sub-silicone-hose.jpg";
import subSsPtfeHose from "@/assets/sub-ss-ptfe-hose.jpg";
import subHoseFittings from "@/assets/sub-hose-fittings.jpg";
import subSpiralGasket from "@/assets/sub-spiral-gasket.jpg";
import subRingGasket from "@/assets/sub-ring-gasket.jpg";
import subNonmetalGasket from "@/assets/sub-nonmetal-gasket.jpg";
import subOrings from "@/assets/sub-orings.jpg";
import subBushings from "@/assets/sub-bushings.jpg";
import subCustomMoulding from "@/assets/sub-custom-moulding.jpg";
import subFlangeGasket from "@/assets/sub-flange-gasket.jpg";
import subFullFaceGasket from "@/assets/sub-full-face-gasket.jpg";
import subRubberGasket from "@/assets/sub-rubber-gasket.jpg";
import subPtfeGasket from "@/assets/sub-ptfe-gasket.jpg";
import subNonAsbestosGasket from "@/assets/sub-non-asbestos-gasket.jpg";
import subCorkGasket from "@/assets/sub-cork-gasket.jpg";
import subMetallicGasket from "@/assets/sub-metallic-gasket.jpg";
import subCafGasket from "@/assets/sub-caf-gasket.jpg";
import subDieCutGasket from "@/assets/sub-die-cut-gasket.jpg";

// Brand logos
import brandKohinoor from "@/assets/brand-kohinoor.png";
import brandDunlop from "@/assets/brand-dunlop.png";
import brandGates from "@/assets/brand-gates.png";
import brandIndoMakson from "@/assets/brand-indomakson.png";
import brandManuli from "@/assets/brand-manuli.png";
import brandDutron from "@/assets/brand-dutron.png";
import brandFlowiron from "@/assets/brand-flowiron.png";
import brandDuplon from "@/assets/brand-duplon.png";
import brandKanaflex from "@/assets/brand-kanaflex.png";
import brandGoodyear from "@/assets/brand-goodyear.png";
import brandParker from "@/assets/brand-parker.png";
import brandContinental from "@/assets/brand-continental.png";

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
  logo: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Industrial Hose and Pipes",
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
      { id: "1a", name: "Industrial Hose Pipes", description: "General-purpose rubber hose pipes", details: "Premium rubber hose pipes for industrial fluid transfer, air supply, and material handling. Available in various sizes and pressure ratings.", image: subHosePipes },
      { id: "1c", name: "PVC Reinforced Flexible Hose Pipes", description: "Braided PVC for medium pressure", details: "Polyester-braided PVC hoses with crystal clear visibility, ideal for water transfer, air supply, and agricultural use.", image: subPvcHose },
      { id: "1e", name: "High Pressure/Temperature Hydraulic Hose Pipes", description: "SAE/DIN rated hydraulic hoses", details: "Wire-braided and spiral-wound hydraulic hoses rated up to 420 bar. Temperature range -40°C to +125°C. SAE 100R1 to R13.", image: subHydraulicHose },
      { id: "1g", name: "Nylon Braided PVC Flexible Hose Pipes", description: "Lightweight, durable PVC hoses", details: "Nylon-reinforced PVC hoses offering excellent flexibility with higher burst pressure ratings for demanding applications.", image: subNylonPvc },
      { id: "1i", name: "PVC Reinforced Flexible Duct Hose Pipes", description: "For ducting and ventilation", details: "Flexible PVC duct hoses with spiral wire reinforcement for dust collection, fume extraction, and ventilation systems.", image: subDuctHose },
      { id: "1j", name: "Silicon Transparent/Braided Flexible Hose Pipes", description: "FDA-grade silicone hoses", details: "Medical and food-grade silicone hoses. Temperature rated -60°C to +200°C. Available transparent and braided varieties.", image: subSiliconeHose },
      { id: "1k", name: "SS/PTFE (Teflon) Hose Pipes with Fittings & Bellows", description: "Corrosion-resistant metallic hoses", details: "Stainless steel corrugated and PTFE-lined hoses with end fittings for chemical, pharmaceutical, and high-temperature applications. Expansion bellows also available.", image: subSsPtfeHose },
      { id: "1l", name: "Hose Accessories and Fittings", description: "Clamps, couplings, adaptors", details: "Complete range of hose accessories including hose clamps, quick-release couplings, cam-lock fittings, and band-it clamps.", image: subHoseFittings },
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
      { id: "3a", name: "Spiral Wound Gaskets", description: "For high-pressure flanged joints", details: "Available with inner and outer rings. Materials include SS304, SS316, graphite, and PTFE filler.", image: subSpiralGasket },
      { id: "3b", name: "Ring Type Gaskets", description: "Metal-to-metal sealing", details: "Precision-machined RTJ gaskets in oval and octagonal profiles. Materials include SS, Inconel, and Monel.", image: subRingGasket },
      { id: "3c", name: "Non-Metallic Gaskets", description: "Sheet and cut gaskets", details: "Compressed fibre, rubber, PTFE, and graphite sheet gaskets. CNC-cut to any size and shape.", image: subNonmetalGasket },
      { id: "3d", name: "Flange Gaskets", description: "Sealing for flanged pipe connections", details: "High-quality flange gaskets for all standard flange types. Available in ANSI, DIN, and BS standards with various material options.", image: subFlangeGasket },
      { id: "3e", name: "Full Face Gaskets", description: "Complete flange face coverage", details: "Full face gaskets providing complete sealing across the entire flange surface. Available in rubber, PTFE, and fibre materials.", image: subFullFaceGasket },
      { id: "3f", name: "Rubber Gaskets", description: "Versatile rubber sealing solutions", details: "Industrial rubber gaskets in NR, NBR, EPDM, Neoprene, and Silicone. Custom sizes and shapes available.", image: subRubberGasket },
      { id: "3g", name: "PTFE (Teflon) Gaskets", description: "Chemical-resistant sealing", details: "Virgin and filled PTFE gaskets offering excellent chemical resistance and wide temperature range. Ideal for corrosive media applications.", image: subPtfeGasket },
      { id: "3h", name: "Non-Asbestos Fibre Gaskets", description: "Safe, high-performance fibre sealing", details: "Compressed non-asbestos fibre gaskets suitable for steam, water, oils, and gases. Compliant with environmental regulations.", image: subNonAsbestosGasket },
      { id: "3i", name: "Cork & Cork Bonded Rubber Gaskets", description: "Oil-resistant compressible sealing", details: "Cork and cork-rubber composite gaskets ideal for oil pans, valve covers, and low-pressure sealing applications.", image: subCorkGasket },
      { id: "3j", name: "Metallic & Semi-Metallic Gaskets", description: "Heavy-duty metal sealing solutions", details: "Kammprofile, corrugated metal, and metal jacketed gaskets for high-pressure, high-temperature critical applications.", image: subMetallicGasket },
      { id: "3k", name: "CAF (Compressed Asbestos Fibre Substitute) Steam Jointing Gaskets", description: "Steam & hot media jointing", details: "CAF substitute gaskets for steam lines and hot media applications. Excellent sealability and long service life.", image: subCafGasket },
      { id: "3l", name: "Custom Die-Cut Gaskets", description: "Precision-cut to your specifications", details: "CNC and die-cut gaskets manufactured to exact specifications in any material. From prototype to high-volume production.", image: subDieCutGasket },
    ],
  },
  {
    id: "3",
    name: "Rubber Products",
    slug: "rubber-products",
    image: productMoulding,
    images: [productMoulding, mouldingGallery1, mouldingGallery2],
    tagline: "Custom-engineered rubber components for every application.",
    description: "Precision-engineered rubber moulded components, sheets, and insulation products for industrial applications.",
    fullDescription: "We specialize in supplying high-quality rubber products including moulded components, rubber sheets, insulation mats, and custom-engineered solutions.",
    technicalDrawing: technicalMoulding,
    specifications: [
      { label: "Material", value: "Natural Rubber, Nitrile, Silicone, Viton, EPDM" },
      { label: "Hardness Range", value: "30 to 90 Shore A" },
      { label: "Temperature Range", value: "-60°C to +300°C" },
      { label: "Size Range", value: "2mm to 1000mm" },
      { label: "Tolerance", value: "As per ISO 3302 Class M2" },
    ],
    subcategories: [
      { id: "2a", name: "O-Rings", description: "Standard and custom O-rings", details: "Available in all standard AS568 and metric sizes. Materials include NBR, FKM, EPDM, and silicone.", image: subOrings },
      { id: "2b", name: "Rubber Bushings", description: "Vibration isolation bushings", details: "Engineered for vibration dampening in machinery, automotive, and industrial equipment.", image: subBushings },
      { id: "2c", name: "Custom Mouldings", description: "Bespoke rubber components", details: "Custom-designed and manufactured to your exact specifications. From prototype to production runs.", image: subCustomMoulding },
      { id: "2d", name: "Industrial Rubber Sheets", description: "Commercial & insertion grade sheets", details: "Natural rubber, neoprene, nitrile, and EPDM rubber sheets in 1mm to 50mm thickness for general industrial applications.", image: subRubberSheets },
      { id: "2e", name: "Special Rubber Hose Pipes (Tailor/Custom Made)", description: "Tailor-made to your specifications", details: "Custom-designed rubber hoses manufactured to exact specifications for unique applications. From prototype to bulk production.", image: subCustomHose },
      { id: "2f", name: "Electrical Rubber Insulation Mats as per IS-5425/IS-15652", description: "Certified electrical insulation", details: "Electrical insulation mats tested and certified to IS-5425 and IS-15652 standards. Available in all voltage classes from 1.1kV to 66kV.", image: subElectricalMats },
      { id: "2g", name: "Skirt Rubber Board/Lagging Rubber Sheets for Conveyor System", description: "For conveyor belt systems", details: "High-quality skirt rubber boards and lagging sheets for conveyor belt systems. Wear-resistant and available in various hardness grades.", image: subSkirtRubber },
    ],
  },
];

export const industries = [
  { name: "Construction", icon: "Building2", description: "Heavy-duty hoses and seals for construction equipment and infrastructure projects.", image: industryConstruction },
  { name: "Agriculture", icon: "Sprout", description: "Irrigation hoses, PVC pipes, and rubber components for farming machinery.", image: industryAgriculture },
  { name: "Manufacturing", icon: "Factory", description: "Precision gaskets, seals, and hoses for production lines and machinery.", image: industryManufacturing },
  { name: "Chemical Processing", icon: "FlaskConical", description: "Chemical-resistant hoses and gaskets for safe handling of corrosive substances.", image: industryChemical },
  { name: "Oil & Gas", icon: "Fuel", description: "High-pressure hoses and sealing solutions for upstream and downstream operations.", image: industryOilgas },
  { name: "Automotive", icon: "Car", description: "Rubber products, hoses, and gaskets for automotive OEM and aftermarket.", image: industryAutomotive },
];

export const brands: Brand[] = [
  { id: "kohinoor", name: "Kohinoor", logo: brandKohinoor, description: "A trusted name in Indian industrial manufacturing, Kohinoor delivers high-quality rubber and polymer products meeting stringent industrial standards. Known for durability and performance across demanding applications.", products: "Industrial Hoses, Rubber Sheets, PVC Pipes" },
  { id: "dunlop", name: "Dunlop", logo: brandDunlop, description: "Global leader in rubber technology with over a century of expertise. Dunlop manufactures premium conveyor belts, industrial hoses, and rubber products trusted by industries worldwide.", products: "Conveyor Belts, Industrial Hoses, Rubber Products" },
  { id: "gates", name: "Gates", logo: brandGates, description: "World-renowned manufacturer of power transmission and fluid transfer solutions. Gates products are engineered for performance, reliability, and longevity in the toughest industrial environments.", products: "Hydraulic Hoses, Industrial Belts, Fluid Power Components" },
  { id: "indo-makson", name: "Indo-Makson", logo: brandIndoMakson, description: "Specialist manufacturer of high-quality industrial hoses and rubber products for Indian industry. Indo-Makson combines quality materials with precision manufacturing.", products: "Industrial Hoses, Rubber Components, Flexible Connectors" },
  { id: "manuli-hydraulics", name: "Manuli Hydraulics", logo: brandManuli, description: "Italian engineering excellence in hydraulic hose systems. Manuli Hydraulics provides complete fluid conveyance solutions with superior pressure ratings and reliability.", products: "Hydraulic Hoses, Fittings, Hose Assemblies, Couplings" },
  { id: "dutron", name: "Dutron", logo: brandDutron, description: "India's leading manufacturer of PVC pressure pipes and fittings. Dutron products are ISI-marked and widely used in plumbing, irrigation, and industrial applications.", products: "PVC Pressure Pipes, PVC Fittings, CPVC Pipes" },
  { id: "flowiron", name: "FLOWIRON", logo: brandFlowiron, description: "Manufacturer of premium quality industrial flow products including valves, fittings, and pipe accessories. FLOWIRON products ensure reliable flow control in demanding environments.", products: "Valves, Pipe Fittings, Flow Control Products" },
  { id: "duplon", name: "DUPLON", logo: brandDuplon, description: "Quality manufacturer of rubber and polymer products for diverse industrial applications. DUPLON delivers reliable components with consistent quality and performance.", products: "Rubber Sheets, Gaskets, Moulded Components" },
  { id: "dutron-kanaflex", name: "Dutron Kanaflex", logo: brandKanaflex, description: "Joint venture combining Dutron's market expertise with Kanaflex's Japanese technology. Produces high-quality flexible corrugated pipes and ducting solutions.", products: "Flexible Corrugated Pipes, Suction Hoses, Duct Hoses" },
  { id: "goodyear", name: "GOOD YEAR", logo: brandGoodyear, description: "Legendary brand in rubber technology, Goodyear's industrial division produces world-class hoses, belts, and rubber products engineered for maximum performance and service life.", products: "Industrial Hoses, Conveyor Belts, Rubber Products" },
  { id: "parker", name: "Parker", logo: brandParker, description: "Global leader in motion and control technologies. Parker Hannifin delivers precision-engineered hydraulic hoses, fittings, and fluid conveyance solutions for critical applications.", products: "Hydraulic Hoses, Fittings, Seals, Filtration Systems" },
  { id: "continental", name: "Continental", logo: brandContinental, description: "German engineering excellence in rubber and polymer technology. Continental's industrial division supplies premium hoses, belts, and conveyor solutions to industries worldwide.", products: "Industrial Hoses, Conveyor Belts, Air Springs, Rubber Products" },
];
