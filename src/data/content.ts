import automotiveImg from "@/assets/Automotive.png";
import foodImg from "@/assets/food.png";
import logisticImg from "@/assets/logistic.png";
import mobileAppsImg from "@/assets/mobile applications.png";
import machineToolImg from "@/assets/machine tool.png";
import roboticsImg from "@/assets/robotics.png";
import bufferModulesImg from "@/assets/products/Buffer Modules.webp";
import ecoRail2Img from "@/assets/products/Eco-Rail-2.webp";
import emcFiltersImg from "@/assets/products/EMC Filters.webp";
import emparroAccucontrolImg from "@/assets/products/Emparro ACCUcontrol.png";
import emparroHdImg from "@/assets/products/Emparro HD – Heavy Duty.webp";
import emparroImg from "@/assets/products/Emparro.png";
import emparro3Img from "@/assets/products/Emparro® 3.webp";
import emparro67Img from "@/assets/products/Emparro67.webp";
import mbRedundancyBalanceImg from "@/assets/products/MB Redundancy Balance.png";
import micoBasicImg from "@/assets/products/MICO Basic.webp";
import micoClassicImg from "@/assets/products/MICO Classic.webp";
import micoFuseImg from "@/assets/products/MICO Fuse.png";
import micoProImg from "@/assets/products/Mico Pro.webp";
import micoPlusImg from "@/assets/products/MICO+.png";
import optocouplersImg from "@/assets/products/Optocouplers.webp";
import relaysSafetyRelaysImg from "@/assets/products/Relays-Safety Relays.webp";
import switchesImg from "@/assets/products/Switches.png";
import transformersImg from "@/assets/products/Transformers.png";
import mvkFusionCipSafetyImg from "@/assets/products/MVK Fusion CIP Safety.webp";
import mvkProImpact67ProImg from "@/assets/products/MVK Pro and IMPACT67 Pro.webp";
import modlinkMpvPngImg from "@/assets/products/Modlink MPV.png";
import ioLinkAnalogConverterImg from "@/assets/products/IO-Link analog converter.webp";
import cube20Img from "@/assets/products/Cube20.webp";
import cube67Img from "@/assets/products/Cube67.webp";
import impact67Img from "@/assets/products/Impact67.png";
import m12DistributionSystemsImg from "@/assets/products/M12 Distribution Systems.webp";
import m12DistributionSystemsPlasticImg from "@/assets/products/M12 Distribution Systems – Plastic.webp";
import m8DistributionSystemsImg from "@/assets/products/M8 Distribution Systems.webp";
import masi20Img from "@/assets/products/MASI20.webp";
import masi67Img from "@/assets/products/MASI67.webp";
import masi68Img from "@/assets/products/MASI68.webp";
import mvkMetalPofImg from "@/assets/products/MVK Metal POF.webp";
import mvkMetalImg from "@/assets/products/MVK Metal.webp";
import lightingElementsImg from "@/assets/products/Lighting Elements.png";
import kdlDMonoImg from "@/assets/products/KDL-D-MONO.webp";
import kdlJumboImg from "@/assets/products/KDL-JUMBO.webp";
import kdtXCableGrommetImg from "@/assets/products/KDT-X Cable Grommet.webp";
import modlinkHeavyImg from "@/assets/products/Modlink Heavy.png";
import modlinkMsddImg from "@/assets/products/Modlink® MSDD.png";
import modlinkMpvImg from "@/assets/products/Modlink MPV.png";
import modlinkMsvdImg from "@/assets/products/Modlink MSVD.png";
import adaptersImg from "@/assets/products/Adapters.webp";
import cablesByTheMeterImg from "@/assets/products/Cables by the Meter.webp";
import fieldWireableConnectorsImg from "@/assets/products/Field-wireable connectors.webp";
import IoLinkAnalogConverterImg from "@/assets/products/IO-Link analog converter.webp";
import fieldbusCablesImg from "@/assets/products/Fieldbus Cables.webp";
import motorCablesImg from "@/assets/products/Motor cables.webp";
import sensorActuatorCablesImg from "@/assets/products/Sensor Actuator Cables.webp";
import tCouplersImg from "@/assets/products/T-Couplers.webp";
import ewtPaSplitFlexConduitImg from "@/assets/products/EWT-PA Split-Flex Conduit.webp";
import mp420EvochainImg from "@/assets/products/MP 420 EVOCHAIN®.webp";
import rTecLinerImg from "@/assets/products/R-Tec Liner.webp";

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
    name: "SNIS",
    tagline: "Engineering Smarter Industries with Precision and Power",
    description: "SNIS is one of Karnataka's leading solution providers in the field of Automation and Electrical Switchgear Marketing. With a strong legacy of delivering value-driven, high-performance solutions, we cater to a wide spectrum of clients across the region.",
    aboutLong: "Our customer base includes Panel Builders and a wide array of industrial segments such as Steel, Paper, Water Treatment, and more. We also closely collaborate with OEMs, including Machine Tool Manufacturers, Special Purpose Machine (SPM) Builders, and Industrial Process Automation Companies, ensuring that our products and services seamlessly integrate with their engineering and automation needs.",
    aboutExtra: "At SNIS, our commitment lies in combining technical expertise, quality-assured products, and reliable after-sales support to empower industries with smarter, safer, and more efficient electrical and automation systems. With strong partnerships and a customer-centric approach, we continue to play a key role in driving the growth and innovation of India’s industrial ecosystem.",
    vision: "To be the most trusted partner in driving industrial growth through innovative automation and electrical solutions, enabling industries to operate smarter, safer, and more efficiently.",
    mission: [
      "To deliver high-quality, reliable, and future-ready industrial automation and electrical solutions tailored to the unique needs of our customers.",
      "To build long-term partnerships with OEMs, contractors, and industries by providing exceptional service, technical expertise, and on-time delivery.",
      "To continuously innovate and align with global technology trends, ensuring our clients stay ahead in their automation and energy efficiency goals.",
    ],
  },
  contact: {
    phone: "+91 98453 73148",
    email: "info@snisindia.in",
    salesEmail: "sales@snisindia.in",
    address: "85/1 C BLOCK RHCS LAYOUT SRIGANDADAKAVAL BANGALORE 560091",
    social: {
      twitter: "https://twitter.com/i/flow/login",
      facebook: "https://www.facebook.com/login/",
      instagram: "https://www.instagram.com/accounts/login/",
      linkedin: "https://www.linkedin.com/in/snis-india-930160416/",
    },
  },
  products: {
    intro: "All our products are engineered for seamless integration, both with each other and with your existing systems. Our comprehensive product portfolio empowers you to design solutions that align with your specific installation requirements—whether your goal is to reduce installation and operating costs or to build a more efficient and high-performing machine.",
    categories: [
      {
        id: "connection-technology",
        title: "Connection Technology",
        description: "We are a leading supplier of cordsets. With over 30,000 combinations to choose from, we can help you find the right cordset for your application.",
        image: sensorActuatorCablesImg,
      },
      {
        id: "io-systems",
        title: "I/O Systems",
        description: "I/O systems connect actuators and sensors of a system to the control. From our Exact12 family of passive distribution boxes to our Cube fieldbus products, we can accommodate your installation needs.",
        image: cube67Img,
      },
      {
        id: "electronics-in-cabinet",
        title: "Electronics in the Cabinet",
        description: "Murrelektronik views power management as the starting point for machine efficiency. Power conditioning, properly sized power supplies, current monitoring, redundancy and energy savings are all considered when we assemble a solution for our partners.",
        image: bufferModulesImg,
      },
      {
        id: "interfaces",
        title: "Interfaces",
        description: "Connecting the cabinet with the field is a key part of many installations. Murrelektronik offers a comprehensive range of cable entry systems and programming ports for quick connections, easy separations and maintenance.",
        image: modlinkMsddImg,
      },
    ],
    items: [
      { name: "Eco-Rail-2", category: "Electronics in the Cabinet", description: "Eco-Rail-2 power supply units offer manufacturers of machinery and control cabinets the possibility to supply power to their consumers flexibly and economically.", image: ecoRail2Img },
      { name: "EMC Filters", category: "Electronics in the Cabinet", description: "EMC filters are essential components that prevent interferences in machines and systems.", image: emcFiltersImg },
      { name: "Emparro ACCUcontrol", category: "Electronics in the Cabinet", description: "External lead batteries with a capacity of up to 40 Ah ensure a long-lasting bridging period. The UPS module is available for 20 A or 40 A systems.", image: emparroAccucontrolImg },
      { name: "Emparro HD – Heavy Duty", category: "Electronics in the Cabinet", description: "The preferred application areas for Emparro HD are areas in which power supply units may be installed in a control cabinet.", image: emparroHdImg },
      { name: "Emparro", category: "Electronics in the Cabinet", description: "Murrelektronik's Emparro switch mode power supply units' efficiency rate of up to 95% is impressive! This reduces power loss to a minimum and the low energy consumption helps save a lot of money.", image: emparroImg },
      { name: "Emparro® 3", category: "Electronics in the Cabinet", description: "Emparro 3-phase power supplies for 24V applications are important components in quality power management systems.", image: emparro3Img },
      { name: "Emparro67", category: "Electronics in the Cabinet", description: "Emparro67 power supply units are designed for applications in the field. They are durable enough to withstand even the most extreme environmental conditions.", image: emparro67Img },
      { name: "MB Redundancy Balance", category: "Electronics in the Cabinet", description: "Power supply systems are often redundantly designed with two power supply units in order to achieve the highest machine run time.", image: mbRedundancyBalanceImg },
      { name: "MICO Basic", category: "Electronics in the Cabinet", description: "MICO Basic is Murrelektronik's intelligent power distribution module for 24 V DC applications.It monitors the power distribution and reacts to short circuits by shutting the channel down as late as possible but as early as necessary.", image: micoBasicImg },
      { name: "MICO Classic", category: "Electronics in the Cabinet", description: "MICO Classic is the intelligent power distribution module from Murrelektronik for 24 V DC applications. This cabinet component monitors currents on up to four channels.", image: micoClassicImg },
      { name: "MICO Fuse", category: "Electronics in the Cabinet", description: "MICO Fuse is the ideal alternative to using individual safety terminals. The compact module features eight sockets for glass tube fuses that can easily be serviced from the front of the module. It protects up to eight channels.", image: micoFuseImg },
      { name: "Mico Pro", category: "Electronics in the Cabinet", description: "Mico Pro is the innovative current monitoring system from Murrelektronik for 12 and 24 VDC applications with patented tripping process.", image: micoProImg },
      { name: "MICO+", category: "Electronics in the Cabinet", description: "MICO+ is the intelligent power distribution module from Murrelektronik for 24 and 48 V DC applications.", image: micoPlusImg },
      { name: "Optocouplers", category: "Electronics in the Cabinet", description: "Optocouplers are used to combine different signal levels or to isolate one signal from another. They provide a optoelectronic signal transfer between input and output, and therefore, they never wear out.", image: optocouplersImg },
      { name: "Relays / Safety Relays", category: "Electronics in the Cabinet", description: "Relays from Murrelektronik are extremely small but perform the best. Integrated LEDs always show the current switching status.", image: relaysSafetyRelaysImg },
      { name: "Switches", category: "Electronics in the Cabinet", description: "Machines and systems become more and more closely networked. Ethernet-based automation solutions are gaining in importance as switches allow the implementation of flexible topologies.", image: switchesImg },
      { name: "Transformers", category: "Electronics in the Cabinet", description: "Transformers have to be flexible because different situations require different voltages. Murrelektronik's product range offers this flexibility, no matter if it's an isolation transformer.", image: transformersImg },
      { name: "Buffer Modules", category: "Electronics in the Cabinet", description: "Voltage drops can cause unpleasant effects: interrupt production processes, cause downtime, and require a system resets.", image: bufferModulesImg },

      { name: "MVK Fusion CIP Safety", category: "I/O Systems", description: "MVK Fusion CIP Safety combines three central functions of installation technology: digital standard sensors and actuators, digital safety-related sensors and actuators and IO-Link.", image: mvkFusionCipSafetyImg },
      { name: "MVK Pro and IMPACT67 Pro", category: "I/O Systems", description: "Compact IO-Link master modules with eight multifunctional master ports are the most intelligent way to connect IO-Link devices.", image: mvkProImpact67ProImg },
      { name: "Modlink MPV", category: "I/O Systems", description: "Connecting fieldbus systems to cabinets is important for day-to-day maintenance. But the interface has to be durable to ensure reliable data transfer.", image: modlinkMpvPngImg },
      { name: "IO-Link analog converter", category: "I/O Systems", description: "While many sensors and actuators are designed for use in IO-Link applications, classic analog sensors and actuators still have to be integrated into installation concepts.", image: ioLinkAnalogConverterImg },
      { name: "Cube20", category: "I/O Systems", description: "MVK Fusion CIP Safety combines three central functions of installation technology: digital standard sensors and actuators, digital safety-related sensors and actuators and IO-Link.", image: cube20Img },
      { name: "Cube20S", category: "I/O Systems", description: "Murrelektronik's modular Cube20S I/O system expands the field-tested Cube family with another IP20 product line with many features. The compact modules are only 12.9 millimeter wide.", image: cube20Img },
      { name: "Cube67", category: "I/O Systems", description: "Cube67 is Murrelektronik’s award winning, modular fieldbus system. It can be customized to meet the specific requirements of an installation solution.", image: cube67Img },
      { name: "Impact67", category: "I/O Systems", description: "With Impact67, you can implement cost-effective fieldbus solutions with simple, digital signals. The fully potted robust modules are available in a variety of communication protocols.", image: impact67Img },
      { name: "M12 Distribution Systems", category: "I/O Systems", description: "Distribution boxes are designed for consistently plugged solutions from the control into the field. They can be easily separated for assembly and transport.", image: m12DistributionSystemsImg },
      { name: "M12 Distribution Systems – Plastic", category: "I/O Systems", description: "Distribution boxes are designed for consistently plugged solutions from the control into the field. They can be easily separated for assembly and transport.  The boxes are fully potted which makes them sealed and very resistant.", image: m12DistributionSystemsPlasticImg },
      { name: "M8 Distribution Systems", category: "I/O Systems", description: "Murrelektronik's M8 distribution systems allow for economical installation solutions, even in confined spaces. The 30mm wide components can be installed in many different ways.", image: m8DistributionSystemsImg },
      { name: "MASI20", category: "I/O Systems", description: "The installation solution MASI, the AS-Interface system from Murrelektronik, allows easy and low-cost connection of IO signals to superior control systems.", image: masi20Img },
      { name: "MASI67", category: "I/O Systems", description: "The installation solution MASI, the AS-Interface system from Murrelektronik, allows easy and low-cost connection of IO signals to superior control systems.", image: masi67Img },
      { name: "MASI68", category: "I/O Systems", description: "The installation solution MASI, the AS-Interface system from Murrelektronik, allows easy and low-cost connection of IO signals to superior control systems.", image: masi68Img },
      { name: "MVK Metal", category: "I/O Systems", description: "IP67 rated fieldbus modules are an important component of machine and system installations. They replace complex parallel wiring, saving space in the cabinet.", image: mvkMetalImg },
      { name: "MVK Metal POF", category: "I/O Systems", description: "IP67 rated fieldbus modules are an important component of machine and system installations. They replace complex parallel wiring, saving space in the cabinet.", image: mvkMetalPofImg },

      { name: "Modlink MSDD", category: "Interfaces", description: "Modlink MSDD interfaces provide convenient access to the controls when diagnostics or service work is necessary.", image: modlinkMsddImg },
      { name: "KDL-D-MONO", category: "Interfaces", description: "A round, splittable cable entry system for pre-assembled cables, offering easy assembly, a split seal, included lock nut, and simple strain relief with cable ties.", image: kdlDMonoImg },
      { name: "KDL-JUMBO", category: "Interfaces", description: "A robust cable entry system for pre-assembled cables, metal pipes, and corrugated conduits with a 2-piece frame and permanent seal.", image: kdlJumboImg },
      { name: "KDT-X Cable Grommet", category: "Interfaces", description: "A 1-piece cable entry grommet for pre-assembled cables that enables easy routing into control cabinets and supports simple retrofit installation.", image: kdtXCableGrommetImg },
      { name: "Lighting Elements", category: "Interfaces", description: "Murrelektronik's lighting systems use the best technology on the market. The LEDs are made to last and don't need much power.", image: lightingElementsImg },
      { name: "Modlink Heavy", category: "Interfaces", description: "The heavy-duty plug connectors of the Modlink Heavy series from Murrelektronik guarantee secure transmission of signals, energy, data and pneumatics", image: modlinkHeavyImg },
      { name: "Modlink MPV", category: "Interfaces", description: "Connecting fieldbus systems to cabinets is important for day-to-day maintenance. But the interface has to be durable to ensure reliable data transfer.", image: modlinkMpvImg },
      { name: "Modlink MSVD", category: "Interfaces", description: "Applications in the control cabinet require the right power outlets. Murrelektronik's wide range includes many versions for global applications.", image: modlinkMsvdImg },

      { name: "Sensor Actuator Cables", category: "Connection Technology", description: "Murrelektronik offers one of the largest cordset lineups on the market for connecting sensors and valves. Many of these are in stock or they can be produced within 48 hours of receipt of your order – even if you just need one piece.", image: sensorActuatorCablesImg },
      { name: "Adapters", category: "Connection Technology", description: "Adapters provide unique connectivity options and are beneficial in providing creative solutions to everyday problems. They provide additional flexibility during the installation process without the need for custom cable assemblies.", image: adaptersImg },
      { name: "Cables by the Meter", category: "Connection Technology", description: "Murrelektronik offers the same high quality and variety of cables used in our cordsets in the convenience of a 100 or 500m spool. This service allows our customers to purchase the lengths they need, when they need them.", image: cablesByTheMeterImg },
      { name: "Field-wireable connectors", category: "Connection Technology", description: "Connecting fieldbus systems to cabinets is important for day-to-day maintenance. But the interface has to be durable to ensure reliable data transfer.", image: fieldWireableConnectorsImg },
      { name: "IO-Link analog converter", category: "Connection Technology", description: "While many sensors and actuators are designed for use in IO-Link applications, classic analog sensors and actuators still have to be integrated into installation concepts.", image: IoLinkAnalogConverterImg },
      { name: "Fieldbus Cables", category: "Connection Technology", description: "Murrelektronik offers a variety of cables designed to support industrial protocols including AS-I, Can Open, Device Net, Ethernet/IP, Ether CAT, ProfiBus, ProfiNet, Sercos and many more.", image: fieldbusCablesImg },
      { name: "Motor cables", category: "Connection Technology", description: "Servo motors are connected with compact M23 connectors. These connectors have become an established standard instead of the previously used terminal boxes. Murrelektronik offers power cables size 1.0 and signal cables in molded versions.", image: motorCablesImg },
      { name: "T-Couplers", category: "Connection Technology", description: "The T-Coupler doubles connection capacity by providing two connectors and simplifies installation with fixed coupling nuts.", image: tCouplersImg },
      { name: "EWT-PA Split-Flex Conduit", category: "Connection Technology", description: "A flexible conduit made of modified polyamide 6, halogen, phosphor and cadmium-free, designed for protecting and guiding cables in static applications with light to medium mechanical loads.", image: ewtPaSplitFlexConduitImg },
      { name: "MP 420 EVOCHAIN®", category: "Connection Technology", description: "A compact and durable chain solution for moving applications with easy installation, tool-free access, noise damping, low-vibration operation, and integrated wear control for extended service life.", image: mp420EvochainImg },
      { name: "R-Tec Liner", category: "Connection Technology", description: "A linear system for optimal guidance of energy packages on industrial robots, with aluminium housing and patented spring return system.", image: rTecLinerImg },
    ],
    featured: [
      { name: "Sensor Actuator Cables", category: "Connection Technology" },
      { name: "MP 420 EVOCHAIN®", category: "Connection Technology" },
      { name: "R-Tec Liner", category: "Connection Technology" },
      { name: "EWT-PA Split-Flex Conduit", category: "Connection Technology" },
      { name: "Cube67", category: "I/O Systems" },
      { name: "MVK Pro and IMPACT67 Pro", category: "I/O Systems" },
      { name: "Impact67", category: "I/O Systems" },
      { name: "MVK Fusion CIP Safety", category: "I/O Systems" },
      { name: "Emparro", category: "Electronics in the Cabinet" },
      { name: "Mico Pro", category: "Electronics in the Cabinet" },
      { name: "Eco-Rail-2", category: "Electronics in the Cabinet" },
      { name: "EMC Filters", category: "Electronics in the Cabinet" },
      { name: "Modlink MSDD", category: "Interfaces" },
      { name: "Modlink Heavy", category: "Interfaces" },
      { name: "KDL-JUMBO", category: "Interfaces" },
      { name: "KDL-D-MONO", category: "Interfaces" },
    ],
  },
  industries: {
    intro: "Different sectors have completely different requirements",
    extra: "With its future-oriented technologies and extensive know-how from a wide range of applications, Murrelektronik is the right contact person for the development of innovative automation solutions in almost all sectors.",
    sectors: [
      {
        id: "machine-tools",
        title: "Machine tools",
        description: "Machine tooling is a wide-ranging industry. Customers needs and wishes are as diverse as the machines and plants themselves.",
        image: machineToolImg,
      },
      {
        id: "automotive",
        title: "Automotive",
        description: "From the press, body and paint shops, to aggregate production to the final assembly, automation must be reliable to avoid expensive downtimes.",
        image: automotiveImg,
      },
      {
        id: "robotics",
        title: "Robotics",
        description: "Distributed installation technology that even fits on axis 6 of a robot arm.",
        image: roboticsImg,
      },
      {
        id: "food-beverage",
        title: "Food & Beverage",
        description: "This industry places extreme demands on all of its facilities and systems. Processes and products in the food sector must be clean and safe.",
        image: foodImg,
      },
      {
        id: "logistics",
        title: "Logistics",
        description: "Connectivity solutions that make electrical systems more modular and easier to install while saving installation time and increasing productivity.",
        image: logisticImg,
      },
      {
        id: "mobile-applications",
        title: "Mobile Applications",
        description: "Automation technology for agricultural machinery, gritting vehicles and loggers working in harsh conditions.",
        image: mobileAppsImg,
      },
    ],
  },
};
