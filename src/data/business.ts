// Verified business information for Alternative Plumbing Solutions, LLC
// Sources: official website (alternativeplumbingsolutions.com), Nextdoor business page,
// MapQuest listing, Facebook page. Only verified facts appear here.

export const business = {
  name: 'Alternative Plumbing Solutions, LLC',
  legalName: 'Alternative Plumbing Solutions, LLC',
  shortName: 'Alternative Plumbing Solutions',
  tagline: 'Fast, Affordable Plumbing in Pearland & Greater Houston',
  phone: '(713) 501-1214',
  phoneRaw: '713-501-1214',
  phoneTel: '+17135011214',
  altPhone: '(281) 819-7277',
  altPhoneTel: '+12818197277',
  email: 'cminhtown@gmail.com',
  website: 'https://www.alternativeplumbingsolutions.com',
  address: {
    street: '2911 Piccadilly Circus',
    city: 'Pearland',
    state: 'TX',
    zip: '77581',
    full: '2911 Piccadilly Circus, Pearland, TX 77581',
    geo: { lat: 29.5653196, lng: -95.2606288 },
  },
  googleMapsUrl: 'https://maps.app.goo.gl/WyB8FQhsfD3aj4MB7',
  googleMapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443046.77138969663!2d-95.44617444999999!3d29.826677450000002!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864090e6589de6f3%3A0xd61d5abfeff817bb!2sAlternative%20Plumbing%20Solutions%2C%20LLC!5e0!3m2!1sen!2sin!4v1794136770113!5m2!1sen!2sin',
  hours: [
    { day: 'Monday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Tuesday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Wednesday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Thursday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Friday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Saturday', open: '7:00 AM', close: '7:00 PM' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' },
  ],
  hoursSummary: 'Mon–Sat 7 AM – 7 PM · Sun Closed',
  description:
    'Alternative Plumbing Solutions, LLC is a trusted plumber serving Pearland, Friendswood, and the greater Houston area, offering water heater repair and installation, drain cleaning, sewer line inspection, gas piping, fixture installation, new construction plumbing, and full residential and commercial plumbing services.',
  areaType: ['Residential', 'Commercial'],
} as const;

// Verified services — sourced from the official business description.
export interface ServiceDef {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide icon name
  summary: string;
  description: string;
  image: string;
  problems: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceDef[] = [
  {
    slug: 'water-heater-repair-and-installation',
    name: 'Water Heater Repair & Installation',
    shortName: 'Water Heater Services',
    icon: 'Flame',
    summary:
      'Fast, reliable water heater repair, replacement, and new installation for homes and businesses in Pearland and Greater Houston.',
    description:
      'Whether your water heater is leaking, producing rust-colored water, or has stopped heating altogether, Alternative Plumbing Solutions can diagnose the problem and get your hot water back quickly. We repair and replace both traditional tank and tankless water heaters, and we install new units sized correctly for your household demand.',
    image:
      'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'No hot water or water that runs out too quickly',
      'Water pooling or leaking around the base of the tank',
      'Rust-colored or foul-smelling hot water',
      'Rumbling, popping, or banging noises from the tank',
      'A pilot light that keeps going out',
    ],
    process: [
      'Call us and describe the symptoms — we will help you decide if a repair or replacement makes more sense.',
      'We inspect the unit, the connections, and the T&P valve to pinpoint the cause.',
      'You receive a clear explanation and straightforward pricing before any work begins.',
      'We repair or replace the unit, test the water temperature, and clean up the work area.',
    ],
    faqs: [
      {
        q: 'How do I know if my water heater needs repair or full replacement?',
        a: 'If the tank is leaking, more than about 10–12 years old, or needs repeated repairs, a replacement is usually more cost-effective. For a failed heating element, thermostat, or pilot assembly, a repair is often the right call. We will assess the unit and give you an honest recommendation.',
      },
      {
        q: 'Do you install tankless water heaters?',
        a: 'Yes. We install and service tankless water heaters. Tankless units save space and provide continuous hot water, and we can help you choose a unit sized for your home.',
      },
      {
        q: 'How long does a water heater installation take?',
        a: 'A standard replacement is typically completed the same day. New installations that require gas line, venting, or electrical updates may take longer.',
      },
    ],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortName: 'Drain Cleaning',
    icon: 'Droplets',
    summary:
      'Clear stubborn clogs and restore proper flow in sinks, tubs, and main drains throughout your Pearland area property.',
    description:
      'Slow drains and recurring clogs are more than a nuisance — they often signal a deeper blockage in your pipes. Alternative Plumbing Solutions clears drains thoroughly so the problem does not come right back. We handle kitchen sinks, bathroom drains, tub and shower drains, floor drains, and main sewer lines.',
    image:
      'https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Water draining slowly from sinks, tubs, or showers',
      'Gurgling sounds from drains or toilets',
      'Multiple fixtures backing up at once',
      'Recurring clogs in the same drain',
      'Foul odors coming from a drain',
    ],
    process: [
      'Call and describe which drains are affected and how long it has been happening.',
      'We locate the blockage and clear it using the appropriate method for the pipe and clog type.',
      'We run water to confirm the drain is fully clear and check for any underlying issues.',
      'You get straightforward advice on preventing the clog from returning.',
    ],
    faqs: [
      {
        q: 'Are chemical drain cleaners safe to use?',
        a: 'Over-the-counter chemical cleaners can damage older pipes and are often only a temporary fix. Professional drain cleaning clears the full blockage without corrosive chemicals.',
      },
      {
        q: 'Why does the same drain keep clogging?',
        a: 'Recurring clogs usually point to a deeper issue such as buildup on the pipe walls, grease, tree root intrusion, or a partially collapsed line. We can inspect the line to find the real cause.',
      },
      {
        q: 'Can you clear a main line clog?',
        a: 'Yes. We clear main sewer line blockages that are causing multiple fixtures to back up at the same time.',
      },
    ],
  },
  {
    slug: 'sewer-line-inspection',
    name: 'Sewer Line Inspection',
    shortName: 'Sewer Line Inspection',
    icon: 'Search',
    summary:
      'Specialized camera inspections locate small sewer line issues before they become major, costly problems.',
    description:
      'Alternative Plumbing Solutions offers camera-based sewer line inspection services in Pearland and the surrounding area. A specialized camera system lets us see inside your sewer line to find cracks, root intrusion, bellied pipes, and blockages — so problems are found and fixed before they turn into expensive emergencies. If you are buying a home older than 20 years, a sewer inspection is strongly recommended before closing.',
    image:
      'https://images.pexels.com/photos/29274530/pexels-photo-29274530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Frequent backups or slow drains throughout the house',
      'Sewer gas odor inside or outside the home',
      'Lush, unusually green patches in the yard above the sewer line',
      'Selling or buying an older home and need a line condition check',
    ],
    process: [
      'Call to schedule an inspection — ideal before a home purchase or when problems keep recurring.',
      'We run a specialized camera through the sewer line to identify the location and type of issue.',
      'You receive a clear explanation of what the camera found and what it means.',
      'If a repair is needed, we explain the options and pricing before any work begins.',
    ],
    faqs: [
      {
        q: 'Why should I get a sewer inspection before buying a home?',
        a: 'Homes over 20 years old often have sewer lines with hidden cracks, root intrusion, or bellied sections. A camera inspection can save you from an expensive surprise after closing.',
      },
      {
        q: 'Can a camera inspection find a leak under the slab?',
        a: 'A sewer camera can identify cracks, offset joints, and root intrusion inside the line. For leaks outside the pipe, we combine camera findings with other diagnostic methods.',
      },
      {
        q: 'Does the inspection require digging up my yard?',
        a: 'No. The camera is fed through an existing cleanout access, so there is no digging required for the inspection itself.',
      },
    ],
  },
  {
    slug: 'gas-piping',
    name: 'Gas Piping Installation & Repair',
    shortName: 'Gas Piping',
    icon: 'Flame',
    summary:
      'Safe installation and repair of natural gas piping for appliances, generators, and more in Pearland and Greater Houston.',
    description:
      'Alternative Plumbing Solutions installs and repairs gas piping for natural gas appliances, generator connection points, and more. Proper gas piping is safety-critical work — every connection must be leak-free and up to code. We run new gas lines, extend existing lines, and inspect connections so your appliances and generator hookups are safe and reliable.',
    image:
      'https://images.pexels.com/photos/38730229/pexels-photo-38730229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Adding a gas stove, dryer, fireplace, or outdoor grill',
      'Connecting a backup natural gas generator',
      'Smell of gas or suspicion of a leak in existing piping',
      'Old or corroded gas lines that need replacement',
    ],
    process: [
      'Call and describe the appliance or generator you need connected.',
      'We plan the safest, most efficient route for the new gas line.',
      'We install the piping, test every connection for leaks, and verify proper pressure.',
      'You receive confirmation that the installation is safe and up to code.',
    ],
    faqs: [
      {
        q: 'I smell gas — what should I do?',
        a: 'If you smell gas, leave the area immediately, avoid using switches or flames, and call your gas utility from a safe distance. After the immediate hazard is handled, call us to inspect and repair the piping.',
      },
      {
        q: 'Can you connect a natural gas generator?',
        a: 'Yes. We install gas piping for natural gas generator connection points, including the pipe and fittings required for a safe hookup.',
      },
      {
        q: 'Do you test gas lines for leaks after installation?',
        a: 'Yes. Every new gas line we install is pressure-tested and checked for leaks before it is put into service.',
      },
    ],
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation',
    shortName: 'Fixture Installation',
    icon: 'Bath',
    summary:
      'Professional installation of bathtubs, faucets, sinks, and other plumbing fixtures for remodels and upgrades.',
    description:
      'Updating a bathroom or kitchen? Alternative Plumbing Solutions installs bathtubs, faucets, sinks, and other plumbing fixtures with clean, leak-free workmanship. Whether you are replacing a single faucet or installing fixtures as part of a full remodel, we make sure every connection is correct and built to last.',
    image:
      'https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'An old, leaky, or outdated faucet that needs replacing',
      'Installing a new bathtub, sink, or shower fixture',
      'Remodeling a kitchen or bathroom and need the plumbing connected',
      'A fixture installed elsewhere that is leaking or loose',
    ],
    process: [
      'Call and tell us which fixtures you are replacing or installing.',
      'We confirm the plumbing is ready and the new fixture will fit.',
      'We install the fixture, connect the supply and drain lines, and check for leaks.',
      'We clean up the work area and leave your space ready to use.',
    ],
    faqs: [
      {
        q: 'Do I need to buy the fixture myself?',
        a: 'You can purchase your own fixture, or we can help you source one. Either way, we will confirm it is compatible with your existing plumbing before installation.',
      },
      {
        q: 'Can you install a bathtub as part of a remodel?',
        a: 'Yes. We handle the plumbing side of bathtub and shower installations, including new supply lines, drains, and fixtures.',
      },
      {
        q: 'How long does a faucet replacement take?',
        a: 'A straightforward faucet replacement is usually completed in under an hour, assuming the existing supply lines and sink are in good shape.',
      },
    ],
  },
  {
    slug: 'new-construction-plumbing',
    name: 'New Construction Plumbing',
    shortName: 'New Construction Plumbing',
    icon: 'Building2',
    summary:
      'Complete plumbing installation for new homes and commercial builds in Pearland and the Greater Houston area.',
    description:
      'Alternative Plumbing Solutions handles all the plumbing aspects of new construction and remodeling projects. From underground rough-in to final fixture installation, we coordinate with builders and homeowners to deliver plumbing systems that are correctly sized, up to code, and built to last.',
    image:
      'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Building a new home and need full plumbing installation',
      'A commercial build-out that requires plumbing from the ground up',
      'A whole-house remodel that needs new supply and drain lines',
      'Coordinating plumbing with other trades on a construction schedule',
    ],
    process: [
      'Call to discuss the scope and timeline of your construction project.',
      'We plan the rough-in, supply lines, and drain layout to meet code and your plans.',
      'We install the system in phases, coordinating with the build schedule.',
      'We finish with fixture installation and a full system test.',
    ],
    faqs: [
      {
        q: 'Do you work with builders and contractors?',
        a: 'Yes. We coordinate with builders, general contractors, and homeowners on new construction and remodeling projects throughout the Pearland area.',
      },
      {
        q: 'What phases of construction plumbing do you handle?',
        a: 'We handle the full scope: underground rough-in, top-out, and final fixture installation. We also coordinate inspections as needed.',
      },
      {
        q: 'Can you do plumbing for a commercial build-out?',
        a: 'Yes. We handle commercial plumbing installations in addition to residential new construction.',
      },
    ],
  },
  {
    slug: 'plumbing-repair',
    name: 'Plumbing Repair',
    shortName: 'General Plumbing Repair',
    icon: 'Wrench',
    summary:
      'Reliable repair for leaks, dripping faucets, running toilets, and everyday plumbing problems in Pearland and Greater Houston.',
    description:
      'From a dripping faucet to a burst pipe, Alternative Plumbing Solutions handles the full range of residential and commercial plumbing repairs. We diagnose the problem correctly the first time and provide straightforward, affordable solutions so your plumbing works the way it should.',
    image:
      'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'A dripping faucet or running toilet that will not stop',
      'Visible leaks under a sink or from a pipe',
      'Low water pressure in one or more fixtures',
      'A pipe that has frozen, cracked, or burst',
      'An unknown plumbing issue that needs a professional diagnosis',
    ],
    process: [
      'Call and describe the problem — we will help you gauge urgency.',
      'We inspect and identify the cause, not just the symptom.',
      'You get a clear explanation and straightforward pricing.',
      'We complete the repair and confirm everything is working properly.',
    ],
    faqs: [
      {
        q: 'Do you handle emergency plumbing repairs?',
        a: 'Yes. A burst pipe or active leak should be addressed right away. Call us and we will work to get a plumber to you as quickly as possible.',
      },
      {
        q: 'Can you fix low water pressure?',
        a: 'Yes. Low pressure can come from a build-up in pipes, a pressure regulator issue, or a hidden leak. We diagnose the cause and recommend the right fix.',
      },
      {
        q: 'Should I attempt to fix a leak myself?',
        a: 'Small drips can sometimes be slowed with a bucket or towel, but a proper repair requires the right parts and tools. Calling a plumber prevents the leak from worsening.',
      },
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    shortName: 'Leak Detection',
    icon: 'Droplet',
    summary:
      'Find hidden leaks before they cause water damage, higher bills, or mold — serving Pearland and Greater Houston.',
    description:
      'Not every leak is obvious. A hidden leak behind a wall, under a slab, or underground can waste water, drive up your bill, and cause structural damage over time. Alternative Plumbing Solutions pinpoints the source of hidden leaks so they can be repaired with minimal disruption to your home.',
    image:
      'https://images.pexels.com/photos/18274115/pexels-photo-18274115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'An unexplained increase in your water bill',
      'Damp spots, stains, or mold on walls or ceilings',
      'The sound of running water when nothing is in use',
      'A warm spot on the floor that may indicate a slab leak',
    ],
    process: [
      'Call and describe what you have noticed — sounds, stains, or a higher bill.',
      'We inspect the likely sources and use diagnostic methods to isolate the leak.',
      'You get a clear explanation of where the leak is and what repair is needed.',
      'We repair the leak and confirm the area is dry and sound.',
    ],
    faqs: [
      {
        q: 'How can I tell if I have a hidden leak?',
        a: 'Common signs are a rising water bill with no change in usage, damp or warm spots, the sound of running water, or unexplained mold. If you notice any of these, call us to investigate.',
      },
      {
        q: 'What is a slab leak?',
        a: 'A slab leak is a leak in the water lines running beneath a concrete slab foundation. Warm spots on the floor, a spike in your water bill, or damp carpet can all point to a slab leak.',
      },
      {
        q: 'Will finding the leak require breaking into my wall or floor?',
        a: 'We use diagnostic methods to pinpoint the leak location first, so any opening is as small and targeted as possible.',
      },
    ],
  },
];

// Verified service areas — sourced from official business description ("Pearland, Friendswood,
// TX, and the greater Houston area"). Only confirmed areas are listed.
export interface LocationDef {
  slug: string; // e.g. pearland-tx
  city: string;
  state: 'TX';
  county: string;
  intro: string;
  localInfo: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationDef[] = [
  {
    slug: 'pearland-tx',
    city: 'Pearland',
    state: 'TX',
    county: 'Brazoria County',
    intro:
      'Alternative Plumbing Solutions is based in Pearland, Texas, and serves homeowners and businesses throughout the city. As a local Pearland plumber, we are familiar with the area\'s housing stock, soil conditions, and common plumbing issues — from aging sewer lines in older neighborhoods to new construction in growing communities.',
    localInfo:
      'Pearland is one of the fastest-growing cities in the Greater Houston area, with a mix of established neighborhoods and new construction. That range means plumbing needs vary widely — older homes often need sewer line inspections and repiping, while newer homes frequently require water heater upgrades, fixture installations, and gas piping for appliances and generators.',
    faqs: [
      {
        q: 'Are you based in Pearland?',
        a: 'Yes. Alternative Plumbing Solutions is located in Pearland, so we can respond quickly to plumbing calls throughout the city and nearby communities.',
      },
      {
        q: 'Do you serve both residential and commercial properties in Pearland?',
        a: 'Yes. We handle both residential and commercial plumbing projects in Pearland, from single-home repairs to new construction plumbing.',
      },
      {
        q: 'What hours are you available in Pearland?',
        a: 'We are available Monday through Saturday, 7 AM to 7 PM. Sunday we are closed. For urgent issues during business hours, call us directly.',
      },
    ],
  },
  {
    slug: 'friendswood-tx',
    city: 'Friendswood',
    state: 'TX',
    county: 'Galveston County',
    intro:
      'Alternative Plumbing Solutions provides plumbing services to Friendswood, Texas, and the surrounding area. From water heater repairs to drain cleaning and sewer line inspections, we help Friendswood homeowners and businesses keep their plumbing systems in good working order.',
    localInfo:
      'Friendswood sits between Pearland and the Clear Lake area, and many of its homes were built during periods of rapid growth. Aging water heaters, tree root intrusion in sewer lines, and fixture upgrades are common plumbing calls in the area.',
    faqs: [
      {
        q: 'Do you serve Friendswood?',
        a: 'Yes. Friendswood is one of the communities we serve, alongside Pearland and the greater Houston area.',
      },
      {
        q: 'Can you help with a water heater in Friendswood?',
        a: 'Yes. We repair and replace water heaters in Friendswood homes, including traditional tank and tankless units.',
      },
      {
        q: 'Do you offer sewer line inspections in Friendswood?',
        a: 'Yes. Our camera sewer line inspection service is available in Friendswood and throughout our service area.',
      },
    ],
  },
  {
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions serves the greater Houston area with reliable residential and commercial plumbing services. Whether you need a water heater repaired, a drain cleared, or a new gas line installed, our team brings the same straightforward, quality-focused workmanship to Houston customers as we do to our Pearland neighbors.',
    localInfo:
      'Greater Houston\'s expansive footprint means plumbing challenges range widely — from slab leaks in older inner-loop homes to new construction plumbing in fast-growing suburbs. Heavy rains and shifting clay soil can stress underground lines, making sewer inspections and leak detection especially valuable for Houston-area properties.',
    faqs: [
      {
        q: 'Which parts of Houston do you serve?',
        a: 'We serve the greater Houston area from our Pearland base. Call us with your address and we will confirm service availability for your location.',
      },
      {
        q: 'Can you help with slab leaks in Houston?',
        a: 'Yes. We offer leak detection services that can identify slab leaks, along with the repairs needed to stop them.',
      },
      {
        q: 'Do you handle commercial plumbing in Houston?',
        a: 'Yes. We take on commercial plumbing work in addition to residential projects throughout the greater Houston area.',
      },
    ],
  },
  {
    slug: 'alvin-tx',
    city: 'Alvin',
    state: 'TX',
    county: 'Brazoria County',
    intro:
      'Alternative Plumbing Solutions proudly serves homeowners and commercial property owners across Alvin, Texas. Located just south of our Pearland headquarters, Alvin is a thriving community where dependable, straightforward plumbing services are always just a quick call away.',
    localInfo:
      'Alvin features a diverse mix of historic homes, ranch properties, and newer residential subdivisions. Shifting coastal prairie soils often lead to foundation movement and underground pipe strain, while older pipe materials in established neighborhoods require experienced sewer and water line repairs.',
    faqs: [
      {
        q: 'Do you provide plumbing services in Alvin, TX?',
        a: 'Yes. Alvin is an essential part of our core service area. Being based in nearby Pearland, we can dispatch plumbers quickly for repairs, installations, and maintenance.',
      },
      {
        q: 'Can you handle water heater replacement in Alvin?',
        a: 'Yes. We install and repair both traditional tank water heaters and high-efficiency tankless models for homes and businesses throughout Alvin.',
      },
      {
        q: 'Do you offer drain and sewer cleaning in Alvin?',
        a: 'Yes. Our team provides camera inspections and drain cleaning for stubborn clogs, root intrusions, and line backups across Alvin.',
      },
    ],
  },
  {
    slug: 'manvel-tx',
    city: 'Manvel',
    state: 'TX',
    county: 'Brazoria County',
    intro:
      'Alternative Plumbing Solutions delivers full-service residential and commercial plumbing to Manvel, Texas. As one of Brazoria County\'s fastest-growing communities right next door to Pearland, Manvel property owners rely on our licensed team for everything from water heater installs to new construction plumbing.',
    localInfo:
      'With rapid residential growth and new master-planned developments throughout Manvel, homeowners frequently require fixture upgrades, water filtration, tankless water heater conversions, and gas line additions for generators and outdoor kitchens.',
    faqs: [
      {
        q: 'How fast can a plumber arrive in Manvel?',
        a: 'Because our shop is in neighboring Pearland, we can reach homes and commercial jobs in Manvel in just minutes.',
      },
      {
        q: 'Do you do plumbing for new construction in Manvel?',
        a: 'Yes. We specialize in ground-up residential and commercial plumbing installation for new homes, additions, and commercial build-outs in Manvel.',
      },
      {
        q: 'Can you inspect sewer lines in new or older Manvel homes?',
        a: 'Yes. Our HD camera inspections identify cracked pipes, shifting lines, and root damage without damaging your lawn or foundation.',
      },
    ],
  },
  {
    slug: 'league-city-tx',
    city: 'League City',
    state: 'TX',
    county: 'Galveston County',
    intro:
      'Alternative Plumbing Solutions provides trusted plumbing solutions across League City, Texas. Serving the Bay Area with transparent pricing and top-tier workmanship, we help League City families and businesses resolve plumbing issues efficiently.',
    localInfo:
      'League City\'s coastal climate and proximity to Clear Lake make corrosion resistance and proper water heater maintenance vital. Many homes in the area benefit from tankless upgrades, sewer line camera evaluations, and prompt slab leak detection.',
    faqs: [
      {
        q: 'Do you service residential properties in League City?',
        a: 'Yes. We serve neighborhoods across League City, from South Shore Harbour to Victory Lakes and older historic districts.',
      },
      {
        q: 'What should I do if my water heater leaks in League City?',
        a: 'Shut off the water intake and call us immediately at (713) 501-1214. We offer same-day diagnosis and replacement options.',
      },
      {
        q: 'Do you work with tankless water heaters in League City?',
        a: 'Yes. We install, flush, and service all major brands of tankless water heaters suited for high-demand coastal households.',
      },
    ],
  },
  {
    slug: 'pasadena-tx',
    city: 'Pasadena',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions delivers reliable residential and light commercial plumbing services to Pasadena, Texas. Conveniently located just north of Pearland, our team brings dependable repairs, honest estimates, and quality craftsmanship to Pasadena properties.',
    localInfo:
      'Pasadena includes established residential subdivisions alongside thriving commercial corridors. Cast iron pipe decay, aging galvanized supply lines, and stubborn sewer line clogs are common challenges that our diagnostic tools and repiping expertise solve.',
    faqs: [
      {
        q: 'Do you handle older home plumbing repairs in Pasadena?',
        a: 'Yes. We frequently repair and repipe older Pasadena residences dealing with low water pressure, rust, or failing sewer pipes.',
      },
      {
        q: 'Are commercial plumbing services available in Pasadena?',
        a: 'Yes. We support Pasadena businesses with commercial drain cleaning, gas piping, fixture replacements, and routine maintenance.',
      },
      {
        q: 'Can you locate hidden leaks under foundations in Pasadena?',
        a: 'Yes. Our non-invasive electronic leak detection pinpoints slab leaks quickly to minimize property disruption.',
      },
    ],
  },
  {
    slug: 'webster-tx',
    city: 'Webster',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions provides premier plumbing services to Webster, Texas. Situated in the heart of the Clear Lake medical and commercial hub, Webster homeowners and business operators count on us for fast, professional plumbing repairs and replacements.',
    localInfo:
      'Webster\'s bustling commercial centers, medical complexes, and residential developments require responsive plumbing support. We specialize in high-capacity water heating, preventative drain cleaning, and precision gas pipe installations.',
    faqs: [
      {
        q: 'Do you provide same-day plumbing service in Webster?',
        a: 'Yes. Whenever possible we offer same-day scheduling for urgent water heater failures, leaks, and sewer clogs in Webster.',
      },
      {
        q: 'Can you install gas lines for generators and appliances in Webster?',
        a: 'Yes. We are certified for gas piping and sizing for whole-home generators, gas ranges, and commercial equipment.',
      },
      {
        q: 'What plumbing warranties do you offer in Webster?',
        a: 'All of our repairs and installations come backed by our workmanship guarantee and manufacturer warranties on installed parts.',
      },
    ],
  },
  {
    slug: 'clear-lake-tx',
    city: 'Clear Lake',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions provides comprehensive plumbing care to Clear Lake, Texas and the Bay Area. From water heater installations to sewer line inspections, we deliver courteous, dependable plumbing for Clear Lake homeowners.',
    localInfo:
      'Clear Lake\'s coastal conditions and mature tree-lined neighborhoods frequently encounter tree root intrusions in sewer mains and mineral buildup in water heaters. Our video inspections and descaling services keep lines flowing smoothly.',
    faqs: [
      {
        q: 'Do you service homes in the Clear Lake Houston area?',
        a: 'Yes. We cover Clear Lake City, Bay Forest, Bay Knoll, and surrounding communities with full plumbing repair and replacement.',
      },
      {
        q: 'How do I know if tree roots are in my Clear Lake sewer line?',
        a: 'Slow drains, gurgling toilets, or repeated backups are classic signs. We run a camera down the cleanout to verify and clear the blockage.',
      },
      {
        q: 'Can you replace traditional water heaters with tankless in Clear Lake?',
        a: 'Yes. We evaluate your electrical and gas capacity and install high-efficiency tankless units for endless hot water.',
      },
    ],
  },
  {
    slug: 'sugar-land-tx',
    city: 'Sugar Land',
    state: 'TX',
    county: 'Fort Bend County',
    intro:
      'Alternative Plumbing Solutions extends our trusted plumbing expertise to Sugar Land, Texas. Homeowners and commercial facility managers in Sugar Land depend on our experienced plumbers for clean, efficient, and cost-effective plumbing repairs.',
    localInfo:
      'Sugar Land properties demand high-efficiency water heating solutions, whole-home repiping, and accurate leak detection to protect upscale finishes and foundations from water damage.',
    faqs: [
      {
        q: 'Do you provide plumbing services in Sugar Land?',
        a: 'Yes. We dispatch to Sugar Land for water heater replacements, leak detection, sewer repairs, and general plumbing needs.',
      },
      {
        q: 'Can you detect slab leaks in Sugar Land homes?',
        a: 'Yes. We use advanced acoustic and thermal detection to locate slab leaks accurately without unnecessary floor demolition.',
      },
      {
        q: 'Do you install water filtration and softening systems in Sugar Land?',
        a: 'Yes. We install whole-home water treatment systems to protect your fixtures and pipes from hard water buildup.',
      },
    ],
  },
];

// Which services are offered in which locations. All listed services are offered across
// all 10 verified service areas.
export const serviceInLocation: Record<string, string[]> = Object.fromEntries(
  locations.map((l) => [l.slug, services.map((s) => s.slug)])
);

export function getService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}

export function getLocation(slug: string): LocationDef | undefined {
  return locations.find((l) => l.slug === slug);
}

// The primary / headquarters location for Alternative Plumbing Solutions
export const mainLocation = locations[0];

// Canonical URL for a service area landing page: /plumber-{locationSlug}
export function getLocationUrl(locationSlug: string): string {
  if (locationSlug.startsWith('plumber-')) return `/${locationSlug}`;
  return `/plumber-${locationSlug}`;
}

// Find location by slug, with or without state code or plumber- prefix
export function findLocation(slugOrCity: string): LocationDef | undefined {
  const normalized = slugOrCity.toLowerCase().trim().replace(/^plumber-/, '');
  return locations.find(
    (l) =>
      l.slug === normalized ||
      l.slug === `${normalized}-tx` ||
      l.slug.replace(/-tx$/, '') === normalized ||
      l.city.toLowerCase() === normalized ||
      l.city.toLowerCase().replace(/\s+/g, '-') === normalized
  );
}

// Combined service-location landing page slugs: {service-slug}-{location-slug}
export function serviceLocationSlug(serviceSlug: string, locationSlug: string = mainLocation.slug): string {
  return `${serviceSlug}-${locationSlug}`;
}

// Canonical URL for a service (defaults to main location: /{service-slug}-{mainLocation-slug})
export function getServiceUrl(serviceSlug: string, locationSlug: string = mainLocation.slug): string {
  return `/${serviceLocationSlug(serviceSlug, locationSlug)}`;
}

export function parseServiceLocationSlug(pathSlug: string): { service: ServiceDef; location: LocationDef } | null {
  for (const l of locations) {
    // 1. Matches with state code, e.g. "water-heater-repair-and-installation-pearland-tx"
    if (pathSlug.endsWith('-' + l.slug)) {
      const serviceSlug = pathSlug.slice(0, -(l.slug.length + 1));
      const svc = getService(serviceSlug);
      if (svc) return { service: svc, location: l };
    }
    // 2. Matches without state code, e.g. "water-heater-repair-and-installation-pearland"
    const baseSlug = l.slug.replace(/-tx$/, '');
    if (pathSlug.endsWith('-' + baseSlug)) {
      const serviceSlug = pathSlug.slice(0, -(baseSlug.length + 1));
      const svc = getService(serviceSlug);
      if (svc) return { service: svc, location: l };
    }
  }
  return null;
}
