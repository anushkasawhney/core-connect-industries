import productHoses from "@/assets/product-hoses.jpg";
import productMoulding from "@/assets/product-moulding.jpg";
import productGaskets from "@/assets/product-gaskets.jpg";
import productHydraulic from "@/assets/product-hydraulic.jpg";
import productPvc from "@/assets/product-pvc.jpg";
import productCustom from "@/assets/product-custom.jpg";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  fullDescription: string;
  specifications: { label: string; value: string }[];
  subcategories: {
    id: string;
    name: string;
    description: string;
    details: string;
    image: string;
  }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Industrial Hose Pipes",
    slug: "industrial-hose-pipes",
    image: productHoses,
    description: "Premium quality industrial hose pipes for fluid transfer, air supply, and material handling applications.",
    fullDescription: "Our comprehensive range of industrial hose pipes is designed to meet the most demanding applications across industries. From high-pressure hydraulic systems to food-grade transfer lines, we supply hoses that deliver reliability, durability, and performance. With 40+ years of expertise, we source only from certified manufacturers to ensure every hose meets international quality standards.",
    specifications: [
      { label: "Material", value: "EPDM, Nitrile, Neoprene, Silicone" },
      { label: "Working Pressure", value: "Up to 400 bar" },
      { label: "Temperature Range", value: "-40°C to +230°C" },
      { label: "Size Range", value: "6mm to 305mm ID" },
      { label: "Applications", value: "Fluid transfer, Air supply, Chemical handling" },
    ],
    subcategories: [
      { id: "1a", name: "Steam Hoses", description: "High-temperature steam transfer hoses", details: "Designed for saturated steam service up to 18 bar. EPDM tube with steel wire reinforcement. Temperature rated to +210°C.", image: productHoses },
      { id: "1b", name: "Chemical Hoses", description: "Resistant to a wide range of chemicals", details: "UHMWPE lined hoses for aggressive chemical transfer. Compatible with acids, solvents, and alkalis. Full traceability.", image: productHoses },
      { id: "1c", name: "Water Hoses", description: "Industrial water delivery hoses", details: "EPDM rubber hoses for hot and cold water delivery. Working pressures up to 20 bar. Available in layflat and mandrel-built.", image: productHoses },
    ],
  },
  {
    id: "2",
    name: "Rubber Moulding Components",
    slug: "rubber-moulding-components",
    image: productMoulding,
    description: "Precision-engineered rubber moulded components for industrial sealing and vibration dampening.",
    fullDescription: "We specialize in supplying high-quality rubber moulded components manufactured through compression, transfer, and injection moulding processes. Our range includes O-rings, seals, bushings, grommets, and custom-designed parts that meet exact engineering specifications.",
    specifications: [
      { label: "Material", value: "Natural Rubber, Nitrile, Silicone, Viton, EPDM" },
      { label: "Hardness Range", value: "30 to 90 Shore A" },
      { label: "Temperature Range", value: "-60°C to +300°C" },
      { label: "Size Range", value: "2mm to 1000mm" },
      { label: "Applications", value: "Sealing, Vibration damping, Insulation" },
    ],
    subcategories: [
      { id: "2a", name: "O-Rings", description: "Standard and custom O-rings", details: "Available in all standard AS568 and metric sizes. Materials include NBR, FKM, EPDM, and silicone.", image: productMoulding },
      { id: "2b", name: "Rubber Bushings", description: "Vibration isolation bushings", details: "Engineered for vibration dampening in machinery, automotive, and industrial equipment.", image: productMoulding },
      { id: "2c", name: "Custom Mouldings", description: "Bespoke rubber components", details: "Custom-designed and manufactured to your exact specifications. From prototype to production runs.", image: productMoulding },
    ],
  },
  {
    id: "3",
    name: "Industrial Gaskets",
    slug: "industrial-gaskets",
    image: productGaskets,
    description: "High-performance gaskets and sealing solutions for critical industrial applications.",
    fullDescription: "Our gasket range covers every industrial sealing requirement – from simple flat gaskets to complex spiral wound and metallic gaskets. We supply gaskets that meet ASME, DIN, and BS standards for flanged connections in pipework, pressure vessels, and heat exchangers.",
    specifications: [
      { label: "Material", value: "PTFE, Graphite, Rubber, Metal, Compressed Fibre" },
      { label: "Working Pressure", value: "Up to 250 bar" },
      { label: "Temperature Range", value: "-200°C to +1000°C" },
      { label: "Size Range", value: "DN15 to DN2000" },
      { label: "Applications", value: "Flanged joints, Heat exchangers, Valves" },
    ],
    subcategories: [
      { id: "3a", name: "Spiral Wound Gaskets", description: "For high-pressure flanged joints", details: "Available with inner and outer rings. Materials include SS304, SS316, graphite, and PTFE filler.", image: productGaskets },
      { id: "3b", name: "Ring Joint Gaskets", description: "Metal-to-metal sealing", details: "Precision-machined RTJ gaskets in oval and octagonal profiles. Materials include SS, Inconel, and Monel.", image: productGaskets },
      { id: "3c", name: "Non-Metallic Gaskets", description: "Sheet and cut gaskets", details: "Compressed fibre, rubber, PTFE, and graphite sheet gaskets. CNC-cut to any size and shape.", image: productGaskets },
    ],
  },
  {
    id: "4",
    name: "Hydraulic Hoses",
    slug: "hydraulic-hoses",
    image: productHydraulic,
    description: "High-pressure hydraulic hoses and assemblies for heavy-duty industrial and mobile applications.",
    fullDescription: "We supply a complete range of hydraulic hoses from leading global manufacturers. Our hydraulic hose assemblies are built to SAE, EN, and ISO standards and are pressure-tested before dispatch to ensure reliability in the most demanding hydraulic systems.",
    specifications: [
      { label: "Material", value: "Synthetic rubber with steel wire braiding" },
      { label: "Working Pressure", value: "Up to 420 bar" },
      { label: "Temperature Range", value: "-40°C to +125°C" },
      { label: "Size Range", value: "1/4\" to 2\" bore" },
      { label: "Applications", value: "Hydraulic systems, Mobile equipment, Machine tools" },
    ],
    subcategories: [
      { id: "4a", name: "Wire Braid Hoses", description: "1 and 2 wire braid hoses", details: "SAE 100R1 and R2 standard hoses for medium to high-pressure hydraulic systems.", image: productHydraulic },
      { id: "4b", name: "Spiral Hoses", description: "4 and 6 spiral wire hoses", details: "SAE 100R12 and R13 for very high-pressure applications up to 420 bar.", image: productHydraulic },
      { id: "4c", name: "Hose Assemblies", description: "Ready-made assemblies with fittings", details: "Custom-length assemblies with crimped fittings. Pressure-tested and tagged.", image: productHydraulic },
    ],
  },
  {
    id: "5",
    name: "PVC Flexible Pipes",
    slug: "pvc-flexible-pipes",
    image: productPvc,
    description: "Versatile PVC hoses and tubing for water, air, and food-grade applications.",
    fullDescription: "Our PVC flexible pipe range includes braided hoses, suction hoses, layflat hoses, and food-grade tubing. Lightweight, flexible, and cost-effective, our PVC hoses serve a wide range of industries from agriculture to food processing.",
    specifications: [
      { label: "Material", value: "PVC with polyester braiding" },
      { label: "Working Pressure", value: "Up to 20 bar" },
      { label: "Temperature Range", value: "-5°C to +60°C" },
      { label: "Size Range", value: "6mm to 152mm ID" },
      { label: "Applications", value: "Water transfer, Air supply, Agriculture" },
    ],
    subcategories: [
      { id: "5a", name: "Braided PVC Hoses", description: "Reinforced for higher pressures", details: "Polyester-braided for increased burst pressure. Crystal clear for visual flow monitoring.", image: productPvc },
      { id: "5b", name: "Suction Hoses", description: "Rigid spiral reinforced", details: "PVC suction and delivery hoses with rigid PVC spiral. Ideal for pumps and vacuum systems.", image: productPvc },
      { id: "5c", name: "Food Grade PVC", description: "FDA-compliant tubing", details: "Non-toxic PVC tubing for food, beverage, and pharmaceutical applications. Meets FDA 21 CFR.", image: productPvc },
    ],
  },
  {
    id: "6",
    name: "Custom Rubber Components",
    slug: "custom-rubber-components",
    image: productCustom,
    description: "Bespoke rubber engineering solutions designed and manufactured to your exact specifications.",
    fullDescription: "From concept to production, we provide end-to-end custom rubber component solutions. Our engineering team works with you to select the right materials, design the optimal geometry, and deliver components that perform reliably in your specific application.",
    specifications: [
      { label: "Material", value: "All elastomers – NR, NBR, EPDM, FKM, Silicone" },
      { label: "Process", value: "Compression, Transfer, Injection moulding" },
      { label: "Temperature Range", value: "-60°C to +300°C" },
      { label: "Tolerance", value: "As per ISO 3302 Class M2" },
      { label: "Applications", value: "OEM components, Replacement parts, Prototypes" },
    ],
    subcategories: [
      { id: "6a", name: "Rubber Extrusions", description: "Profiles, cords, and strips", details: "Custom extruded profiles in any cross-section. Materials include EPDM, silicone, and neoprene.", image: productCustom },
      { id: "6b", name: "Rubber-to-Metal", description: "Bonded rubber components", details: "Rubber bonded to steel, aluminium, and stainless steel. For mounts, bearings, and seals.", image: productCustom },
      { id: "6c", name: "Rubber Sheets", description: "Industrial rubber sheeting", details: "Commercial and insertion-grade rubber sheets in NR, NBR, neoprene, and silicone. 1mm to 50mm thickness.", image: productCustom },
    ],
  },
];

export const industries = [
  { name: "Construction", icon: "Building2", description: "Heavy-duty hoses and seals for construction equipment and infrastructure projects." },
  { name: "Agriculture", icon: "Sprout", description: "Irrigation hoses, PVC pipes, and rubber components for farming machinery." },
  { name: "Manufacturing", icon: "Factory", description: "Precision gaskets, seals, and hoses for production lines and machinery." },
  { name: "Chemical Processing", icon: "FlaskConical", description: "Chemical-resistant hoses and gaskets for safe handling of corrosive substances." },
  { name: "Oil & Gas", icon: "Fuel", description: "High-pressure hoses and sealing solutions for upstream and downstream operations." },
  { name: "Automotive", icon: "Car", description: "Rubber mouldings, hoses, and gaskets for automotive OEM and aftermarket." },
];

export const brands = [
  { id: "1", name: "FlexiFlow", description: "Leading manufacturer of industrial rubber hoses with over 50 years of engineering excellence. FlexiFlow products are trusted in demanding applications across oil & gas, chemical processing, and heavy industry.", products: "Industrial Hoses, Chemical Hoses, Steam Hoses" },
  { id: "2", name: "SealMaster", description: "Global leader in sealing technology, SealMaster produces precision-engineered gaskets and seals that meet the highest international standards for safety and performance.", products: "Spiral Wound Gaskets, Ring Joint Gaskets, Sheet Gaskets" },
  { id: "3", name: "HydraForce", description: "Premium hydraulic hose manufacturer known for exceptional burst pressure ratings and durability in the most demanding mobile and industrial hydraulic systems.", products: "Hydraulic Hoses, Fittings, Hose Assemblies" },
  { id: "4", name: "RubberTech", description: "Specialist manufacturer of custom rubber moulded components, offering design-to-delivery solutions for OEM clients across automotive, aerospace, and industrial sectors.", products: "O-Rings, Seals, Custom Mouldings, Rubber-to-Metal Bonding" },
  { id: "5", name: "PipePro", description: "India's trusted PVC pipe manufacturer, PipePro delivers a comprehensive range of flexible PVC hoses and tubing for agricultural, industrial, and food-grade applications.", products: "PVC Braided Hoses, Suction Hoses, Layflat Hoses" },
  { id: "6", name: "GasketWorld", description: "Comprehensive gasket solutions from compressed fibre to metallic gaskets. GasketWorld serves power generation, petrochemical, and process industries worldwide.", products: "Non-Metallic Gaskets, PTFE Gaskets, Metal Gaskets" },
];
