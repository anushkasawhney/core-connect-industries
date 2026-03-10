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
import brandIndoMaksson from "@/assets/brand-indomakson.png";
import brandManuli from "@/assets/brand-manuli.png";
import brandDutron from "@/assets/brand-dutron.png";
import brandFlowiron from "@/assets/brand-flowiron.png";
import brandDuplon from "@/assets/brand-duplon.png";
import brandKanaflex from "@/assets/brand-kanaflex.png";
import brandGoodyear from "@/assets/brand-goodyear.png";
import brandParker from "@/assets/brand-parker.png";
import brandContinental from "@/assets/brand-continental.png";

// Brand background images
import brandBgKohinoor from "@/assets/brand-bg-kohinoor.jpg";
import brandBgDunlop from "@/assets/brand-bg-dunlop.jpg";
import brandBgGates from "@/assets/brand-bg-gates.jpg";
import brandBgIndoMaksson from "@/assets/brand-bg-indomaksson.jpg";
import brandBgManuli from "@/assets/brand-bg-manuli.jpg";
import brandBgDutron from "@/assets/brand-bg-dutron.jpg";
import brandBgFlowiron from "@/assets/brand-bg-flowiron.jpg";
import brandBgDuplon from "@/assets/brand-bg-duplon.jpg";
import brandBgKanaflex from "@/assets/brand-bg-kanaflex.jpg";
import brandBgGoodyear from "@/assets/brand-bg-goodyear.jpg";
import brandBgParker from "@/assets/brand-bg-parker.jpg";
import brandBgContinental from "@/assets/brand-bg-continental.jpg";

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
    applications: string;
    image: string;
  }[];
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  products: string;
  logo: string;
  backgroundImage: string;
  bgColor: string;
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
      { id: "1a", name: "Industrial Hose Pipes", description: "General-purpose rubber hose pipes", details: "Premium rubber hose pipes for industrial fluid transfer, air supply, and material handling. Available in various sizes and pressure ratings.", applications: "General industrial fluid transfer, compressed air lines, water supply systems and material handling.", image: subHosePipes },
      { id: "1c", name: "PVC Reinforced Flexible Hose Pipes", description: "Braided PVC for medium pressure", details: "PVC reinforced hoses offer lightweight flexibility combined with strength through braided reinforcement. Suitable for medium to heavy duty industrial and agricultural applications.", applications: "Water delivery, air supply, oil transfer, agricultural spraying, construction and industrial cleaning.", image: subPvcHose },
      { id: "1e", name: "High Pressure/Temperature Hydraulic Hose Pipes", description: "SAE/DIN rated hydraulic hoses", details: "Hydraulic hoses designed to handle high pressure and temperature environments with secure end fittings. Built for reliability in demanding industrial and hydraulic systems.", applications: "Hydraulic machinery, construction equipment, industrial machinery, oil and fluid transfer systems.", image: subHydraulicHose },
      { id: "1g", name: "Nylon Braided PVC Flexible Hose Pipes", description: "Lightweight, durable PVC hoses", details: "Flexible PVC hoses reinforced with nylon braiding to improve pressure resistance and durability. Ideal for light to medium duty fluid and air transfer applications.", applications: "Air compressors, garden spraying, car washing, welding operations and general water transfer.", image: subNylonPvc },
      { id: "1i", name: "PVC Reinforced Flexible Duct Hose Pipes", description: "For ducting and ventilation", details: "Duct hoses designed for efficient air movement and ventilation in industrial environments. Reinforced construction provides durability while maintaining flexibility.", applications: "Dust extraction systems, ventilation systems, exhaust systems, industrial air movement.", image: subDuctHose },
      { id: "1j", name: "Silicon Transparent/Braided Flexible Hose Pipes", description: "FDA-grade silicone hoses", details: "Silicone hoses designed for hygienic and high-temperature applications with excellent flexibility and transparency for monitoring fluid flow.", applications: "Pharmaceutical industry, food processing, beverage plants and laboratory use.", image: subSiliconeHose },
      { id: "1k", name: "SS/PTFE (Teflon) Hose Pipes with Fittings & Bellows", description: "Corrosion-resistant metallic hoses", details: "High performance flexible hoses manufactured using stainless steel and PTFE lining for excellent chemical and temperature resistance. Suitable for highly corrosive and critical applications.", applications: "Chemical processing, pharmaceutical plants, oil & gas, high temperature fluid transfer.", image: subSsPtfeHose },
      { id: "1l", name: "Hose Accessories and Fittings", description: "Clamps, couplings, adaptors", details: "A wide range of hose fittings including adaptors, couplings, connectors and clamps available in materials such as stainless steel, brass and carbon steel.", applications: "Industrial hose connections, fluid transfer systems and machinery installations.", image: subHoseFittings },
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
      { id: "3a", name: "Spiral Wound Gaskets", description: "For high-pressure flanged joints", details: "Available with inner and outer rings. Materials include SS304, SS316, graphite, and PTFE filler.", applications: "High-pressure flanged joints in refineries, petrochemical plants, and power generation.", image: subSpiralGasket },
      { id: "3b", name: "Ring Type Gaskets", description: "Metal-to-metal sealing", details: "Precision-machined RTJ gaskets in oval and octagonal profiles. Materials include SS, Inconel, and Monel.", applications: "High-pressure and high-temperature flanged connections in oil & gas and petrochemical industries.", image: subRingGasket },
      { id: "3c", name: "Non-Metallic Gaskets", description: "Sheet and cut gaskets", details: "Compressed fibre, rubber, PTFE, and graphite sheet gaskets. CNC-cut to any size and shape.", applications: "General industrial sealing, chemical processing, water treatment plants.", image: subNonmetalGasket },
      { id: "3d", name: "Flange Gaskets", description: "Sealing for flanged pipe connections", details: "High-quality flange gaskets for all standard flange types. Available in ANSI, DIN, and BS standards with various material options.", applications: "Flanged pipe connections in oil & gas, water supply, chemical plants and power stations.", image: subFlangeGasket },
      { id: "3e", name: "Full Face Gaskets", description: "Complete flange face coverage", details: "Full face gaskets providing complete sealing across the entire flange surface. Available in rubber, PTFE, and fibre materials.", applications: "Low-pressure piping systems, water treatment, HVAC systems and general industrial flanges.", image: subFullFaceGasket },
      { id: "3f", name: "Rubber Gaskets", description: "Versatile rubber sealing solutions", details: "Industrial rubber gaskets in NR, NBR, EPDM, Neoprene, and Silicone. Custom sizes and shapes available.", applications: "Pumps, valves, heat exchangers, pipe flanges and general industrial equipment.", image: subRubberGasket },
      { id: "3g", name: "PTFE (Teflon) Gaskets", description: "Chemical-resistant sealing", details: "Virgin and filled PTFE gaskets offering excellent chemical resistance and wide temperature range. Ideal for corrosive media applications.", applications: "Chemical reactors, pharmaceutical equipment, food processing and highly corrosive environments.", image: subPtfeGasket },
      { id: "3h", name: "Non-Asbestos Fibre Gaskets", description: "Safe, high-performance fibre sealing", details: "Compressed non-asbestos fibre gaskets suitable for steam, water, oils, and gases. Compliant with environmental regulations.", applications: "Steam lines, boilers, compressors, engines and general industrial piping systems.", image: subNonAsbestosGasket },
      { id: "3i", name: "Cork & Cork Bonded Rubber Gaskets", description: "Oil-resistant compressible sealing", details: "Cork and cork-rubber composite gaskets ideal for oil pans, valve covers, and low-pressure sealing applications.", applications: "Automotive oil pans, gear boxes, transformer gaskets and low-pressure oil sealing.", image: subCorkGasket },
      { id: "3j", name: "Metallic & Semi-Metallic Gaskets", description: "Heavy-duty metal sealing solutions", details: "Kammprofile, corrugated metal, and metal jacketed gaskets for high-pressure, high-temperature critical applications.", applications: "Refineries, power plants, chemical processing, high-temperature exhaust systems.", image: subMetallicGasket },
      { id: "3k", name: "CAF (Compressed Asbestos Fibre Substitute) Steam Jointing Gaskets", description: "Steam & hot media jointing", details: "CAF substitute gaskets for steam lines and hot media applications. Excellent sealability and long service life.", applications: "Steam boilers, hot water systems, process piping and industrial heating systems.", image: subCafGasket },
      { id: "3l", name: "Custom Die-Cut Gaskets", description: "Precision-cut to your specifications", details: "CNC and die-cut gaskets manufactured to exact specifications in any material. From prototype to high-volume production.", applications: "OEM equipment, custom machinery, replacement parts and specialised sealing applications.", image: subDieCutGasket },
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
      { id: "2a", name: "O-Rings", description: "Standard and custom O-rings", details: "Available in all standard AS568 and metric sizes. Materials include NBR, FKM, EPDM, and silicone.", applications: "Hydraulic cylinders, pumps, valves, pneumatic systems and general sealing.", image: subOrings },
      { id: "2b", name: "Rubber Bushings", description: "Vibration isolation bushings", details: "Engineered for vibration dampening in machinery, automotive, and industrial equipment.", applications: "Automotive suspension, industrial machinery mounting, vibration isolation systems.", image: subBushings },
      { id: "2c", name: "Custom Mouldings", description: "Bespoke rubber components", details: "Custom-designed and manufactured to your exact specifications. From prototype to production runs.", applications: "OEM components, replacement parts, specialised industrial applications.", image: subCustomMoulding },
      { id: "2d", name: "Industrial Rubber Sheets", description: "Commercial & insertion grade sheets", details: "Rubber sheets manufactured using various compounds such as natural rubber, EPDM, neoprene, nitrile and silicone. Available in different grades to suit diverse industrial requirements.", applications: "Gaskets, sealing, vibration control, packing materials, flooring and insulation.", image: subRubberSheets },
      { id: "2e", name: "Special Rubber Hose Pipes (Custom Made)", description: "Tailor-made to your specifications", details: "Custom manufactured rubber hose pipes built as per customer specifications including size, pressure rating and end fittings. Designed for specialised industrial applications.", applications: "Chemical plants, power plants, heavy industries and customised fluid transfer systems.", image: subCustomHose },
      { id: "2f", name: "Electrical Rubber Insulation Mats as per IS-5425/IS-15652", description: "Certified electrical insulation", details: "High quality rubber insulation mats designed for electrical safety in high voltage environments. Manufactured as per industry safety standards.", applications: "Electrical panels, substations, power plants, switch rooms and transformer areas.", image: subElectricalMats },
      { id: "2g", name: "Skirt Rubber Board/Lagging Rubber Sheets for Conveyor System", description: "For conveyor belt systems", details: "Durable rubber sheets used in conveyor systems to prevent material spillage and improve belt grip. Designed to withstand heavy industrial wear and tear.", applications: "Mining, cement plants, material handling systems and conveyor belt systems.", image: subSkirtRubber },
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
  { id: "kohinoor", name: "Kohinoor", logo: brandKohinoor, backgroundImage: brandBgKohinoor, bgColor: "bg-amber-50 dark:bg-amber-950/30", description: "A trusted name in Indian industrial manufacturing, Kohinoor delivers high-quality rubber and polymer products meeting stringent industrial standards. Known for durability and performance across demanding applications. Their product range includes industrial rubber hoses for air, water and oil transfer, PVC flexible hoses, rubber sheets in various compounds, and specialised rubber products for automotive and industrial use.", products: "Industrial Rubber Hoses, PVC Flexible Hoses, Rubber Sheets (NR, NBR, EPDM, Neoprene), Conveyor Belt Accessories, Rubber Moulded Components" },
  { id: "dunlop", name: "Dunlop", logo: brandDunlop, backgroundImage: brandBgDunlop, bgColor: "bg-blue-50 dark:bg-blue-950/30", description: "Global leader in rubber technology with over a century of expertise. Dunlop manufactures premium conveyor belts, industrial hoses, and rubber products trusted by industries worldwide. Their conveyor belt range includes heat-resistant, oil-resistant, fire-resistant and general-purpose belts for mining, cement, steel and material handling industries.", products: "Conveyor Belts (Heat/Oil/Fire Resistant), Industrial Rubber Hoses, Rubber Sheets, Rubber Lining Materials, V-Belts" },
  { id: "gates", name: "Gates", logo: brandGates, backgroundImage: brandBgGates, bgColor: "bg-red-50 dark:bg-red-950/30", description: "World-renowned manufacturer of power transmission and fluid transfer solutions. Gates products are engineered for performance, reliability, and longevity in the toughest industrial environments. Their hydraulic hose range covers SAE 100R1 through R17, with working pressures up to 420 bar and temperature ratings from -40°C to +125°C.", products: "Hydraulic Hoses (SAE 100R1-R17), Industrial Hoses, V-Belts, Timing Belts, Hydraulic Fittings & Couplings, Hose Assembly Equipment" },
  { id: "indo-maksson", name: "Indo-Maksson", logo: brandIndoMaksson, backgroundImage: brandBgIndoMaksson, bgColor: "bg-teal-50 dark:bg-teal-950/30", description: "Specialist manufacturer of high-quality industrial hoses and rubber products for Indian industry. Indo-Maksson combines quality materials with precision manufacturing to deliver hoses that meet demanding industrial requirements. Their product range covers air hoses, water hoses, LPG hoses, welding hoses and specialised chemical transfer hoses.", products: "Industrial Air Hoses, Water Hoses, LPG Hoses, Welding Hoses, Chemical Transfer Hoses, Rubber Sheets, Flexible Connectors" },
  { id: "manuli-hydraulics", name: "Manuli Hydraulics", logo: brandManuli, backgroundImage: brandBgManuli, bgColor: "bg-indigo-50 dark:bg-indigo-950/30", description: "Italian engineering excellence in hydraulic hose systems. Manuli Hydraulics provides complete fluid conveyance solutions with superior pressure ratings and reliability. Their range includes wire-braided and spiral-wound hydraulic hoses, thermoplastic hoses, and a comprehensive range of hydraulic fittings and quick-release couplings.", products: "Wire-Braided Hydraulic Hoses, Spiral-Wound Hydraulic Hoses, Thermoplastic Hoses, Hydraulic Fittings, Quick-Release Couplings, Hose Crimping Machines" },
  { id: "dutron", name: "Dutron", logo: brandDutron, backgroundImage: brandBgDutron, bgColor: "bg-green-50 dark:bg-green-950/30", description: "India's leading manufacturer of PVC pressure pipes and fittings. Dutron products are ISI-marked and widely used in plumbing, irrigation, and industrial applications. Their comprehensive range includes UPVC pressure pipes, CPVC hot water pipes, SWR drainage pipes and a full range of moulded and fabricated fittings.", products: "UPVC Pressure Pipes (ISI Marked), CPVC Hot & Cold Water Pipes, SWR Drainage Pipes, PVC Fittings (Moulded & Fabricated), Column Pipes, Casing Pipes" },
  { id: "flowiron", name: "FLOWIRON", logo: brandFlowiron, backgroundImage: brandBgFlowiron, bgColor: "bg-slate-50 dark:bg-slate-950/30", description: "Manufacturer of premium quality industrial flow products including valves, fittings, and pipe accessories. FLOWIRON products ensure reliable flow control in demanding environments. Their valve range includes gate valves, globe valves, check valves and butterfly valves in cast iron, ductile iron and stainless steel.", products: "Gate Valves, Globe Valves, Check Valves, Butterfly Valves, Pipe Fittings (CI, DI, SS), Strainers, Flow Indicators" },
  { id: "duplon", name: "DUPLON", logo: brandDuplon, backgroundImage: brandBgDuplon, bgColor: "bg-purple-50 dark:bg-purple-950/30", description: "Quality manufacturer of rubber and polymer products for diverse industrial applications. DUPLON delivers reliable components with consistent quality and performance. Their product range includes rubber sheets, gaskets, moulded rubber components, anti-vibration mounts and custom-engineered rubber solutions.", products: "Rubber Sheets (NR, CR, NBR, EPDM, Silicone), Industrial Gaskets, Moulded Rubber Components, Anti-Vibration Mounts, Rubber Bellows, Expansion Joints" },
  { id: "dutron-kanaflex", name: "Dutron Kanaflex", logo: brandKanaflex, backgroundImage: brandBgKanaflex, bgColor: "bg-emerald-50 dark:bg-emerald-950/30", description: "Joint venture combining Dutron's market expertise with Kanaflex's Japanese technology. Produces high-quality flexible corrugated pipes and ducting solutions. Their corrugated pipe range is ideal for suction, delivery, drainage and ventilation across agriculture, construction and industrial sectors.", products: "Flexible Corrugated Suction Pipes, PVC Duct Hoses, Spiral Reinforced Hoses, Drainage Pipes, Ventilation Ducting, Agricultural Suction Pipes" },
  { id: "goodyear", name: "GOOD YEAR", logo: brandGoodyear, backgroundImage: brandBgGoodyear, bgColor: "bg-yellow-50 dark:bg-yellow-950/30", description: "Legendary brand in rubber technology, Goodyear's industrial division produces world-class hoses, belts, and rubber products engineered for maximum performance and service life. Their industrial hose range covers air, water, steam, chemical and material handling applications with superior abrasion resistance.", products: "Industrial Air Hoses, Water Hoses, Steam Hoses, Chemical Hoses, Material Handling Hoses, Conveyor Belts, V-Belts, Rubber Products" },
  { id: "parker", name: "Parker", logo: brandParker, backgroundImage: brandBgParker, bgColor: "bg-amber-50 dark:bg-amber-950/30", description: "Global leader in motion and control technologies. Parker Hannifin delivers precision-engineered hydraulic hoses, fittings, and fluid conveyance solutions for critical applications. Their product portfolio includes high-pressure hydraulic hoses rated up to 700 bar, crimp fittings, adapters, and complete hose management systems.", products: "High-Pressure Hydraulic Hoses, Crimp Fittings & Adapters, Tube Fittings, Quick Couplings, Filtration Systems, Pneumatic Hoses, Instrumentation Fittings" },
  { id: "continental", name: "Continental", logo: brandContinental, backgroundImage: brandBgContinental, bgColor: "bg-orange-50 dark:bg-orange-950/30", description: "German engineering excellence in rubber and polymer technology. Continental's industrial division supplies premium hoses, belts, and conveyor solutions to industries worldwide. Their ContiTech division manufactures air spring systems, industrial hoses for every medium, conveyor belt systems, and surface materials.", products: "Industrial Hoses (Air, Water, Chemical, Steam), Conveyor Belt Systems, Air Springs, V-Belts & Timing Belts, Rubber Sheets, Surface Materials" },
];
