export interface LandingServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  bulletPoints: string[];
  image: string;
}

export interface NearbyCity {
  name: string;
  zipCodes: string;
  distance: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export const landingConfig = {
  niche: 'Plumber',
  location: 'Pearland, TX',
  identity: 'Plumber in Pearland, TX',
  tagline: 'Professional Plumbing Services, Water Heaters & Fast Local Repairs',
  phoneDisplay: '(713) 501-1214',
  phoneHref: 'tel:+17135011214',
  address: {
    street: '2911 Piccadilly Circus',
    city: 'Pearland',
    state: 'TX',
    zip: '77581',
    full: '2911 Piccadilly Circus, Pearland, TX 77581',
    county: 'Brazoria County',
    geo: {
      lat: 29.5653196,
      lng: -95.2606288,
    },
  },
  hours: {
    monSat: '7:00 AM – 7:00 PM',
    sunday: 'Closed',
    summary: 'Mon–Sat 7:00 AM – 7:00 PM',
    openDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const landingServices: LandingServiceItem[] = [
  {
    id: 'water-heaters',
    name: 'Water Heater Repair & Installation',
    shortDescription:
      'Complete repair and replacement services for traditional storage tank and modern tankless water heaters in Pearland.',
    bulletPoints: [
      'Diagnostics for pilot lights, thermostats, and heating elements',
      'Tank flush and sediment removal to restore heating efficiency',
      'Fast same-day water heater replacement when tanks leak',
      'Tankless system installations with code-compliant gas venting',
    ],
    image:
      'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning & Clog Removal',
    shortDescription:
      'Clearing stubborn kitchen sink, bathroom, floor, and main branch drain clogs safely without damaging interior pipes.',
    bulletPoints: [
      'Fast mechanical snaking and motorized auger clearing',
      'Removal of grease, soap scale, hair, and foreign obstructions',
      'Restoration of slow-draining tubs, sinks, and laundry lines',
      'Preventive line cleanout access inspection',
    ],
    image:
      'https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sewer-inspection',
    name: 'Sewer Line Camera Inspection',
    shortDescription:
      'High-definition video pipe diagnostics to accurately locate underground breaks, root intrusion, and sewer bellies.',
    bulletPoints: [
      'Real-time high-resolution digital camera line examination',
      'Precise above-ground depth and position tracking',
      'Accurate identification of root blockages and line collapse',
      'Clear digital footage to confirm issues before digging',
    ],
    image:
      'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'gas-piping',
    name: 'Gas Piping Installation & Leak Repair',
    shortDescription:
      'Certified natural gas and propane line installations, appliance hookups, and precision pressure drop testing.',
    bulletPoints: [
      'New supply lines for gas ranges, dryers, and water heaters',
      'Gas connections for whole-house standby backup generators',
      'Pinpoint leak detection and immediate valve replacements',
      'Strict compliance with Pearland municipal fuel gas codes',
    ],
    image:
      'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'fixture-installation',
    name: 'Plumbing Fixture Installation',
    shortDescription:
      'Professional installation and replacement for kitchen faucets, bathroom sinks, modern toilets, and garbage disposals.',
    bulletPoints: [
      'Low-flow and high-efficiency toilet replacements',
      'Designer kitchen and vanity faucet installations',
      'Garbage disposal repairs and heavy-duty upgrades',
      'Shut-off valve and braided stainless supply line updates',
    ],
    image:
      'https://images.pexels.com/photos/6419131/pexels-photo-6419131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'leak-detection',
    name: 'Water Leak Detection & Pipe Repair',
    shortDescription:
      'Non-invasive leak detection to locate hidden water leaks behind walls, ceilings, and under concrete foundation slabs.',
    bulletPoints: [
      'Acoustic listening diagnostics for concealed pressurized lines',
      'Under-slab foundation leak locating and targeted repairs',
      'Damaged copper, PEX, and PVC supply pipe restorations',
      'Burst pipe isolation and water pressure regulation',
    ],
    image:
      'https://images.pexels.com/photos/6419124/pexels-photo-6419124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const nearbyCities: NearbyCity[] = [
  { name: 'Pearland', zipCodes: '77581, 77584, 77588', distance: 'Primary Service Hub' },
  { name: 'Friendswood', zipCodes: '77546', distance: 'Adjacent Community' },
  { name: 'Houston', zipCodes: '77089, 77058', distance: 'South / Southeast Metro' },
  { name: 'Alvin', zipCodes: '77511', distance: 'Brazoria County Neighbor' },
  { name: 'Manvel', zipCodes: '77578', distance: 'West Pearland Corridor' },
  { name: 'League City', zipCodes: '77573', distance: 'Clear Creek Area' },
  { name: 'Pasadena', zipCodes: '77502, 77505', distance: 'East Corridor' },
  { name: 'Webster', zipCodes: '77598', distance: 'Bay Area Corridor' },
  { name: 'Clear Lake', zipCodes: '77058, 77062', distance: 'Southeast Hub' },
  { name: 'Sugar Land', zipCodes: '77478, 77479', distance: 'Fort Bend County' },
];

export const whyChooseUsPillars: PillarItem[] = [
  {
    title: 'Texas State Board Licensed Technicians',
    description:
      'All plumbing work is performed in strict compliance with the Texas State Board of Plumbing Examiners (TSBPE) standards and local Pearland building codes for homeowner safety.',
  },
  {
    title: 'Pearland & Brazoria County Familiarity',
    description:
      'We understand how Gulf Coast humidity, hard municipal water, and reactive expansive clay soils impact residential foundations, slab plumbing, and underground sewer lines.',
  },
  {
    title: 'Upfront Quotes Before Work Begins',
    description:
      'You receive an honest evaluation and clear price estimate before any repair starts. We explain the problem in plain language with no hidden fees or unexpected charges.',
  },
  {
    title: 'Diagnostic-First Root Cause Solutions',
    description:
      'We do not guess. Using high-definition camera diagnostics and precision leak equipment, we locate the real root cause of the issue before opening walls or replacing parts.',
  },
];

export const landingFaqs: FaqItem[] = [
  {
    question: 'Do you provide same-day plumbing service in Pearland?',
    answer:
      'Yes. For urgent plumbing situations including leaking water heaters, active pipe breaks, and backed-up drains, we prioritize same-day appointments during our regular operating hours (Monday through Saturday, 7:00 AM – 7:00 PM). Call (713) 501-1214 directly for immediate dispatch.',
  },
  {
    question: 'Are plumbing permits required for water heater replacement or gas line work in Pearland?',
    answer:
      'Yes. The City of Pearland requires building permits and municipal safety inspections for major plumbing modifications, including water heater replacements, repiping, and gas line extensions. All installations are completed to current International Plumbing Code (IPC) standards.',
  },
  {
    question: 'Why does Pearland clay soil cause foundation slab leaks and pipe stress?',
    answer:
      'Brazoria County sits on dense expansive gumbo clay that swells significantly during rainy periods and shrinks during hot Texas summers. This continual ground movement shifts foundations and strains under-slab copper and PVC pipes, which can result in pinhole slab leaks or separated joints.',
  },
  {
    question: 'How do I locate and turn off my home main water shut-off valve in an emergency?',
    answer:
      'Most Pearland homes have a main shut-off valve near the front exterior hose bib or inside the ground meter box near the street curb. If you experience an active burst pipe and cannot locate or turn the valve, call us at (713) 501-1214 and we will guide you or dispatch immediately.',
  },
  {
    question: 'How do I know if my water heater should be repaired or completely replaced?',
    answer:
      'If your water heater tank is actively leaking from the base or has rusted through, replacement is necessary. For units under 10 years old experiencing minor issues like a failed heating element, faulty thermostat, or pilot assembly problem, a repair is usually the most economical solution.',
  },
];
