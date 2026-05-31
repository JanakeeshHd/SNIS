import automotiveImg from "@/assets/Automotive.png";

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  aboutLong: string;
  aboutExtra: string;
  vision: string;
  mission: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  salesEmail: string;
  address: string;
  social: Record<string, string>;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface ProductsData {
  intro: string;
  categories: ProductCategory[];
  items: { name: string; category: string; description: string; image?: string }[];
  featured: { name: string; category: string }[];
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface SiteContent {
  company: CompanyInfo;
  contact: ContactInfo;
  products: ProductsData;
  industries: {
    intro: string;
    extra: string;
    sectors: IndustrySector[];
  };
}

export const SITE_CONTENT: SiteContent = {
  company: {
    name: "SNIS Industries",
    tagline: "Engineering Smarter Industries with Precision and Power",
    description: "SNIS Industries is one of Karnataka’s leading solution providers in the field of Industrial Automation and Electrical Switchgear Marketing. With a strong legacy of delivering value-driven, high-performance solutions, we cater to a wide spectrum of industries and clients across the region.",
    aboutLong: "Our customer base includes Panel Builders, Electrical Contractors, and a wide array of industrial segments such as Steel, Paper, Water Treatment, and more. We also closely collaborate with OEMs, including Machine Tool Manufacturers, Special Purpose Machine (SPM) Builders, and Industrial Process Automation Companies, ensuring that our products and services seamlessly integrate with their engineering and automation needs.",
    aboutExtra: "At SNIS Industries, our commitment lies in combining technical expertise, quality-assured products, and reliable after-sales support to empower industries with smarter, safer, and more efficient electrical and automation systems. With strong partnerships and a customer-centric approach, we continue to play a key role in driving the growth and innovation of India’s industrial ecosystem.",
    vision: "To be the most trusted partner in driving industrial growth through innovative automation and electrical solutions, enabling industries to operate smarter, safer, and more efficiently.",
    mission: [
      "To deliver high-quality, reliable, and future-ready industrial automation and electrical solutions tailored to the unique needs of our customers.",
      "To build long-term partnerships with OEMs, contractors, and industries by providing exceptional service, technical expertise, and on-time delivery.",
      "To continuously innovate and align with global technology trends, ensuring our clients stay ahead in their automation and energy efficiency goals."
    ]
  },
  contact: {
    phone: "+91 98453 73148",
    email: "info@snisindia.in",
    salesEmail: "sales@snisindia.in",
    address: "Bangalore",
    social: {
      twitter: "https://twitter.com/envato/",
      facebook: "https://www.facebook.com/envato/",
      instagram: "https://www.instagram.com/envato/",
      linkedin: "https://www.pinterest.com/envato/"
    }
  },
  products: {
    intro: "All our products are engineered for seamless integration, both with each other and with your existing systems. Our comprehensive product portfolio empowers you to design solutions that align with your specific installation requirements—whether your goal is to reduce installation and operating costs or to build a more efficient and high-performing machine.",
    categories: [
      {
        id: "electronics-in-cabinet",
        title: "Electronics in the Cabinet",
        description: "Murrelektronik views power management as the starting point for machine efficiency. Power conditioning, properly sized power supplies, current monitoring, redundancy and energy savings are all considered when we assemble a solution for our partners.",
        image: "/assets/products/cabinet.jpg",
      },
      {
        id: "interfaces",
        title: "Interfaces",
        description: "Connecting the cabinet with the field is a key part of many installations. Murrelektronik offers a comprehensive range of cable entry systems and programming ports for quick connections, easy separations and maintenance.",
        image: "/assets/products/interfaces.jpg",
      },
      {
        id: "io-systems",
        title: "I/O Systems",
        description: "I/O systems connect actuators and sensors of a system to the control. From our Exact12 family of passive distribution boxes to our Cube fieldbus products, we can accommodate your installation needs.",
        image: "/assets/products/io-systems.jpg",
      },
      {
        id: "connection-technology",
        title: "Connection Technology",
        description: "We are leading supplier of cordsets. With over 30,000 combinations to choose from, we can help you find the right cordset for your application. Our standard products are available by the piece in your choice of three jacket colors, five cable types and lengths from .1 to 100m.",
        image: "/assets/products/cables.jpg",
      },
    ],
    items: [
      { name: "Eco-Rail-2", category: "Electronics in the Cabinet", description: "Eco-Rail-2 power supply units offer flexible and economical power for machinery and control cabinets." },
      { name: "EMC Filters", category: "Electronics in the Cabinet", description: "EMC filters prevent interferences in machines and systems." },
      { name: "Emparro ACCUcontrol", category: "Electronics in the Cabinet", description: "External lead battery UPS modules for long-lasting bridging periods (20 A / 40 A)." },
      { name: "Emparro HD – Heavy Duty", category: "Electronics in the Cabinet", description: "Robust power supplies for demanding cabinet applications." },
      { name: "Emparro", category: "Electronics in the Cabinet", description: "High-efficiency switch mode power supplies with up to 95% efficiency." },
      { name: "Emparro® 3", category: "Electronics in the Cabinet", description: "Three-phase power supplies for 24V applications." },
      { name: "Emparro67", category: "Electronics in the Cabinet", description: "Field-ready power supplies built for extreme environmental conditions." },
      { name: "MB Redundancy Balance", category: "Electronics in the Cabinet", description: "Redundancy solutions for maximum machine uptime." },
      { name: "MICO Basic", category: "Electronics in the Cabinet", description: "Intelligent power distribution module for 24 V DC applications." },
      { name: "MICO Classic", category: "Electronics in the Cabinet", description: "Power distribution module monitoring currents on multiple channels." },
      { name: "MICO Fuse", category: "Electronics in the Cabinet", description: "Compact fused module with eight front-serviceable fuse sockets." },
      { name: "Mico Pro", category: "Electronics in the Cabinet", description: "Current monitoring system for 12 and 24 VDC applications." },
      { name: "MICO+", category: "Electronics in the Cabinet", description: "Advanced power distribution for 24 and 48 V DC applications." },
      { name: "Optocouplers", category: "Electronics in the Cabinet", description: "Optoelectronic signal transfer for electrical isolation." },
      { name: "Relays / Safety Relays", category: "Electronics in the Cabinet", description: "Compact relay modules with integrated status indication." },
      { name: "Switches", category: "Electronics in the Cabinet", description: "Industrial network switches for flexible topologies." },
      { name: "Transformers", category: "Electronics in the Cabinet", description: "Flexible transformers for various voltage requirements." },

      { name: "MVK Fusion CIP Safety", category: "I/O Systems", description: "Combines digital standard sensors, safety sensors and IO-Link in one solution." },
      { name: "MVK Pro and IMPACT67 Pro", category: "I/O Systems", description: "Compact IO-Link master modules with multifunctional ports." },
      { name: "Modlink MPV", category: "I/O Systems", description: "Durable interface modules for connecting fieldbus systems to cabinets." },
      { name: "IO-Link analog converter", category: "I/O Systems", description: "Integrates classic analog sensors and actuators into IO-Link systems." },
      { name: "Cube20 / Cube20S", category: "I/O Systems", description: "Modular IP20 I/O systems in a compact form factor." },
      { name: "Cube67", category: "I/O Systems", description: "Award-winning modular fieldbus system for flexible installations." },
      { name: "Impact67", category: "I/O Systems", description: "Robust fieldbus modules for cost-effective digital signals." },
      { name: "M12 Distribution Systems", category: "I/O Systems", description: "Distribution boxes for consistently plugged solutions from control to field." },
      { name: "M12 Distribution Systems – Plastic", category: "I/O Systems", description: "Fully potted, sealed distribution boxes for harsh environments." },
      { name: "M8 Distribution Systems", category: "I/O Systems", description: "Compact distribution systems for space-constrained installations." },
      { name: "MASI20 / MASI67 / MASI68", category: "I/O Systems", description: "AS-Interface based installation solutions for economical signal connection." },
      { name: "MVK Metal / MVK Metal POF", category: "I/O Systems", description: "IP67 rated fieldbus modules that replace complex wiring." },

      { name: "Lighting Elements", category: "Interfaces", description: "Durable LED lighting systems for control cabinets and panels." },
      { name: "Modlink Heavy", category: "Interfaces", description: "Heavy-duty plug connectors for secure transmission of signals, energy and data." },
      { name: "Modlink MSDD / MSVD", category: "Interfaces", description: "Interface modules providing convenient access for diagnostics and service." },

      { name: "Adapters", category: "Connection Technology", description: "Flexible adapter solutions for installation and connectivity needs." },
      { name: "Cables by the Meter", category: "Connection Technology", description: "High-quality cables available on spools for custom lengths." },
      { name: "Field-wireable connectors", category: "Connection Technology", description: "Durable, field-wireable connectors for easy maintenance." },
      { name: "Fieldbus Cables", category: "Connection Technology", description: "Cables supporting industrial fieldbus protocols like EtherCAT and ProfiNet." },
      { name: "Motor cables", category: "Connection Technology", description: "Power and servo motor cables in molded versions for reliable connections." },
      { name: "Sensor Actuator Cables", category: "Connection Technology", description: "Extensive cordset lineup for sensors and valves, stocked or produced to order." },
      { name: "T-Couplers", category: "Connection Technology", description: "T-Couplers double connection capacity and simplify installation." },
    ],
    featured: [
      { name: "MVK Fusion CIP Safety", category: "I/O Systems" },
      { name: "MVK Pro and IMPACT67 Pro", category: "I/O Systems" },
      { name: "Modlink MPV", category: "Interfaces" },
      { name: "IO-Link analog converter", category: "I/O Systems" },
      { name: "Fieldbus Cables", category: "Connection Technology" },
      { name: "Motor cables", category: "Connection Technology" },
      { name: "Sensor Actuator Cables", category: "Connection Technology" },
      { name: "T-Couplers", category: "Connection Technology" },
      { name: "Lighting Elements", category: "Interfaces" },
      { name: "Modlink Heavy", category: "Interfaces" },
      { name: "Modlink MSVD", category: "Interfaces" },
    ],
  },
  industries: {
    intro: "Different sectors have completely different requirements",
    extra: "With its future-oriented technologies and extensive know-how from a wide range of applications, Murrelektronik is the right contact person for the development of innovative automation solutions in almost all sectors.",
    sectors: [
      {
        id: "automotive",
        title: "Automotive",
        description:
          "From the press, body and paint shops, to aggregate production to the final assembly – all of the processes in an automotive factory must work well together and they must to be reliable so expensive downtimes can be avoided.",
        image: automotiveImg,
      },
      {
        id: "food-beverage",
        title: "Food & Beverage",
        description:
          "This industry places extreme demands on all of its facilities and systems. Processes and products in the food sector must be clean and safe.",
      },
      {
        id: "logistics",
        title: "Logistics",
        description:
          "Together we can create connectivity solutions that make electrical systems more modular and easier to install - saving installation time, increasing productivity and adaptable to your future needs.",
      },
      {
        id: "mobile-applications",
        title: "Mobile Applications",
        description:
          "Dried up fields where agricultural machinery is raising dust. Icy roads, which are cleared by gritting vehicles. Drenched forest floors, where loggers struggle with mud and dirt. We, the automation experts and co-founders of decentralized installation technology, offer a modular product system.",
      },
      {
        id: "robotics",
        title: "Robotics",
        description:
          "The smallest bus modules from Murrelektronik even fit on axis 6 of a robot arm this allows distributed installation.",
      },
      {
        id: "machine-tools",
        title: "Machine tools",
        description:
          "Machine tooling is a wide-ranging industry. Customers needs and wishes are as diverse as the machines and plants themselves.",
      },
    ],
  }
};
