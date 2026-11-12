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
export interface ServiceSeoMeta {
  primaryServiceName: string; // e.g. "Water Heater Repair"
  secondaryKeywordsLabel: string; // e.g. "Water Heater Installation & Replacement"
  serviceSummaryTemplate: string; // Uses {city} so each location page targets only its own city
  metaDescriptionTemplate: string; // Uses {city} so each location page targets its primary + secondary keywords cleanly
}

export interface ServiceDef {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide icon name
  summary: string;
  description: string;
  seo: ServiceSeoMeta;
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
      'Reliable water heater repair, water heater installation, and replacement for residential and commercial properties.',
    description:
      'Whether your water heater is leaking, producing rust-colored water, or has stopped heating altogether, Alternative Plumbing Solutions can diagnose the problem and restore your hot water. We handle water heater repair, water heater installation, and full unit replacement for both traditional tank and tankless water heaters sized for your property.',
    seo: {
      primaryServiceName: 'Water Heater Repair',
      secondaryKeywordsLabel: 'Water Heater Installation, Replacement & Tankless Units',
      serviceSummaryTemplate:
        'Water heater repair, water heater installation, and replacement for residential and commercial properties in {city}, TX.',
      metaDescriptionTemplate:
        'Need water heater repair in {city}, TX? We provide tank & tankless water heater installation, replacement, and diagnostics. Call (713) 501-1214.',
    },
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
        a: 'Yes. We handle water heater installation and service for both tank and tankless water heaters, helping you choose a unit sized for your home.',
      },
      {
        q: 'How long does a water heater installation take?',
        a: 'A standard water heater replacement is typically completed quickly once the unit is on site. New installations requiring gas line, venting, or electrical updates may take longer.',
      },
    ],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortName: 'Drain Cleaning',
    icon: 'Droplets',
    summary:
      'Clear clogged drains and restore proper flow in sinks, tubs, showers, and main drain lines.',
    description:
      'Slow drains and recurring clogs are more than a nuisance — they often signal a deeper blockage in your pipes. Alternative Plumbing Solutions provides thorough clogged drain cleaning and drain blockage removal for kitchen sinks, bathroom drains, tub and shower drains, floor drains, and main sewer lines.',
    seo: {
      primaryServiceName: 'Drain Cleaning',
      secondaryKeywordsLabel: 'Clogged Drain Repair, Kitchen & Bathroom Drains',
      serviceSummaryTemplate:
        'Drain cleaning, clogged drain repair, and drain blockage removal for sinks, tubs, and main lines in {city}, TX.',
      metaDescriptionTemplate:
        'Need drain cleaning in {city}, TX? Explore solutions for clogged sinks, slow drains, and recurring blockages. Contact Alternative Plumbing Solutions.',
    },
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
        a: 'Yes. We provide drain blockage removal for main sewer line clogs that cause multiple fixtures to back up at the same time.',
      },
    ],
  },
  {
    slug: 'sewer-line-inspection',
    name: 'Sewer Line Inspection',
    shortName: 'Sewer Line Inspection',
    icon: 'Search',
    summary:
      'Specialized sewer camera inspection and sewer diagnostics locate small line issues before they become major problems.',
    description:
      'Alternative Plumbing Solutions offers specialized sewer camera inspection and sewer diagnostics. A camera system lets us see inside your sewer line to locate cracks, root intrusion, bellied pipes, and blockages — so problems are identified before they turn into costly emergencies. If you are buying a home older than 20 years, a sewer line inspection is strongly recommended before closing.',
    seo: {
      primaryServiceName: 'Sewer Line Inspection',
      secondaryKeywordsLabel: 'Sewer Camera Inspection & Sewer Line Diagnostics',
      serviceSummaryTemplate:
        'Sewer line inspection, sewer camera inspection, and sewer diagnostics to evaluate underground lines in {city}, TX.',
      metaDescriptionTemplate:
        'Need sewer line inspection in {city}, TX? We run sewer camera diagnostics to find roots, cracks, and blockages early. Call (713) 501-1214.',
    },
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
      'Safe gas line installation, gas piping repair, and gas pipe installation for appliances and generators.',
    description:
      'Alternative Plumbing Solutions provides gas line installation and gas piping repair for natural gas appliances, generator connection points, and more. Proper gas pipe installation is safety-critical work — every connection must be leak-free and up to code. We run new gas lines, extend existing lines, and pressure-test connections so your appliances and generator hookups operate safely.',
    seo: {
      primaryServiceName: 'Gas Piping',
      secondaryKeywordsLabel: 'Gas Line Installation, Gas Pipe Repair & Residential Gas Piping',
      serviceSummaryTemplate:
        'Gas piping, gas line installation, and gas pipe repair with pressure-tested connections in {city}, TX.',
      metaDescriptionTemplate:
        'Need gas piping in {city}, TX? Alternative Plumbing Solutions handles gas line installation, gas pipe repair, and pressure testing. Call (713) 501-1214.',
    },
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
      'Professional plumbing fixture installation including faucet installation, sink installation, and bathtubs.',
    description:
      'Updating a bathroom or kitchen? Alternative Plumbing Solutions provides plumbing fixture installation for bathtubs, faucets, sinks, and shower fixtures with clean, leak-free workmanship. Whether you need a straightforward faucet installation, sink installation, or fixture connections for a remodel, we make sure every supply and drain connection is built to last.',
    seo: {
      primaryServiceName: 'Plumbing Fixture Installation',
      secondaryKeywordsLabel: 'Faucet Installation, Sink Installation & Fixture Replacement',
      serviceSummaryTemplate:
        'Plumbing fixture installation, faucet installation, and sink installation for bathrooms, kitchens, and remodels in {city}, TX.',
      metaDescriptionTemplate:
        'Need plumbing fixture installation in {city}, TX? We install kitchen faucets, bathroom sinks, bathtubs, and remodel fixtures cleanly. Call (713) 501-1214.',
    },
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
      'Complete plumbing installation for new homes, remodels, and commercial builds.',
    description:
      'Alternative Plumbing Solutions handles all phases of new construction plumbing and remodeling projects. From underground rough-in and top-out piping to final plumbing installation for new homes and commercial spaces, we coordinate with builders and homeowners to deliver code-compliant systems built to last.',
    seo: {
      primaryServiceName: 'New Construction Plumbing',
      secondaryKeywordsLabel: 'New Home Plumbing Installation & Plumbing Rough-In',
      serviceSummaryTemplate:
        'New construction plumbing and full plumbing installation for new homes, remodels, and commercial builds in {city}, TX.',
      metaDescriptionTemplate:
        'Need new construction plumbing in {city}, TX? We provide residential and commercial plumbing installation from rough-in to finish. Call (713) 501-1214.',
    },
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
        a: 'Yes. We coordinate with builders, general contractors, and homeowners on new construction and remodeling projects across our service area.',
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
      'Reliable residential plumbing repair and commercial service for leaks, dripping faucets, low pressure, and pipe issues.',
    description:
      'From a dripping faucet to a broken supply line, Alternative Plumbing Solutions handles residential plumbing repair and commercial plumbing repair with straightforward workmanship. We diagnose the root issue accurately and provide practical solutions so your plumbing works reliably.',
    seo: {
      primaryServiceName: 'Plumbing Repair',
      secondaryKeywordsLabel: 'Residential Plumbing Repair, Pipe & Fixture Repair',
      serviceSummaryTemplate:
        'Plumbing repair and residential plumbing repair for leaks, faucets, low water pressure, and pipe problems in {city}, TX.',
      metaDescriptionTemplate:
        'Need plumbing repair in {city}, TX? We offer residential plumbing repair for leaks, faucets, low pressure, and pipe troubleshooting. Call (713) 501-1214.',
    },
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
        q: 'Do you handle urgent plumbing repairs?',
        a: 'Yes. A burst pipe or active leak should be addressed promptly. Call us during business hours and we will work to schedule a plumber quickly.',
      },
      {
        q: 'Can you fix low water pressure?',
        a: 'Yes. Low pressure can come from a build-up in pipes, a pressure regulator issue, or a hidden leak. We diagnose the cause and recommend the right fix.',
      },
      {
        q: 'Should I attempt to fix a leak myself?',
        a: 'Small drips can sometimes be contained temporarily with a bucket or shutoff valve, but a proper repair requires the right parts and tools. Calling a plumber prevents the leak from worsening.',
      },
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    shortName: 'Leak Detection',
    icon: 'Droplet',
    summary:
      'Water leak detection to locate hidden pipe leaks behind walls or under slabs before damage spreads.',
    description:
      'Not every leak is obvious. A hidden pipe leak behind a wall, under a slab foundation, or underground wastes water, drives up your utility bill, and risks property damage over time. Alternative Plumbing Solutions provides focused water leak detection to pinpoint hidden pipe leaks so they can be repaired with minimal disruption.',
    seo: {
      primaryServiceName: 'Leak Detection',
      secondaryKeywordsLabel: 'Water Leak Detection, Hidden Pipe & Slab Leak Detection',
      serviceSummaryTemplate:
        'Leak detection, water leak detection, and slab leak detection to locate hidden pipe leaks in {city}, TX.',
      metaDescriptionTemplate:
        'Looking for leak detection in {city}, TX? We locate hidden pipe leaks and slab leaks before water damage spreads. Call (713) 501-1214.',
    },
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
  {
    slug: 'pipe-repair-and-repiping',
    name: 'Pipe Repair & Whole-Home Repiping',
    shortName: 'Pipe Repair & Repiping',
    icon: 'Wrench',
    summary:
      'Pipe repair, whole house repiping, and water pipe replacement for burst, corroded, or leaking plumbing lines.',
    description:
      'Whether you are dealing with burst pipes after a freeze, pinhole leaks inside walls, or low water pressure from aging galvanized supply lines, Alternative Plumbing Solutions provides dependable pipe repair and repiping. We complete targeted water pipe replacement as well as full whole house repiping using durable modern piping.',
    seo: {
      primaryServiceName: 'Pipe Repair and Repiping',
      secondaryKeywordsLabel: 'Whole House Repiping & Water Pipe Replacement',
      serviceSummaryTemplate:
        'Pipe repair and repiping, whole house repiping, and water pipe replacement for burst or aging pipes in {city}, TX.',
      metaDescriptionTemplate:
        'Need pipe repair and repiping in {city}, TX? We offer whole house repiping and water pipe replacement for leaking or corroded pipes. Call (713) 501-1214.',
    },
    image:
      'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Pipes burst or cracked due to hard freezes or shifting foundations',
      'Pinhole leaks causing water stains on drywall or ceilings',
      'Low water pressure throughout the entire house',
      'Discolored, brownish, or metallic-tasting tap water',
      'Old, corroding galvanized steel or polybutylene plumbing lines',
    ],
    process: [
      'Call us right away — we walk you through shutting off your main valve to minimize property damage.',
      'Our team locates the leak or evaluates your existing pipe system.',
      'You receive an honest recommendation: spot repair, section replacement, or whole house repiping.',
      'We complete the installation cleanly, test water pressure, and verify no leaks remain.',
    ],
    faqs: [
      {
        q: 'What should I do if a pipe bursts in my home?',
        a: 'Immediately turn off your main water shutoff valve to stop incoming water, open faucets to relieve residual pressure, and call Alternative Plumbing Solutions at (713) 501-1214.',
      },
      {
        q: 'When does a house need whole house repiping instead of a spot repair?',
        a: 'If your home has original galvanized pipes that are rusting from the inside, aging lines prone to failure, or multiple leaks in different locations, whole house repiping is often more reliable and cost-effective.',
      },
      {
        q: 'Can you replace older water pipes with modern PEX or copper?',
        a: 'Yes. We evaluate your property and discuss durable modern piping options like PEX or copper for water pipe replacement and repipes.',
      },
    ],
  },
  {
    slug: 'toilet-repair-and-installation',
    name: 'Toilet Repair & Installation',
    shortName: 'Toilet Services',
    icon: 'Bath',
    summary:
      'Toilet repair, toilet installation, toilet replacement, wax ring resealing, and clog clearing.',
    description:
      'From constantly running toilets and weak flushes to leaking bases and complete upgrades, Alternative Plumbing Solutions provides reliable toilet repair, toilet installation, and toilet replacement. We inspect seals, valves, and drain connections to keep your bathroom clean and leak-free.',
    seo: {
      primaryServiceName: 'Toilet Repair',
      secondaryKeywordsLabel: 'Toilet Installation, Replacement & Running Toilet Repair',
      serviceSummaryTemplate:
        'Toilet repair, toilet installation, and running toilet repair for wax seals, tanks, and clogs in {city}, TX.',
      metaDescriptionTemplate:
        'Need toilet repair in {city}, TX? We provide toilet installation, toilet replacement, wax ring seal repair, and clog clearing. Call (713) 501-1214.',
    },
    image:
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    problems: [
      'Toilet running continuously, wasting water and raising utility bills',
      'Water pooling around the base of the toilet from a broken wax ring',
      'Weak, incomplete, or sluggish flushes',
      'Cracked porcelain tank or bowl',
      'Stubborn clogs that standard plunging cannot clear',
    ],
    process: [
      'Describe the symptoms over the phone so we can arrive prepared with the right parts or replacement options.',
      'We inspect the fill valve, flapper, wax seal, closet bolts, and drain line.',
      'We provide straightforward pricing before starting any repair or replacement.',
      'We complete the job, test multiple flushes, check the seal, and leave your bathroom clean.',
    ],
    faqs: [
      {
        q: 'Why does my toilet keep running continuously?',
        a: 'A running toilet is usually caused by a faulty flapper that no longer seals, an improperly adjusted float, or a failing fill valve. We can repair or replace the internal components quickly.',
      },
      {
        q: 'What causes water to pool around the bottom of the toilet?',
        a: 'Water leaking around the base almost always indicates that the wax ring seal between the toilet horn and the floor flange has broken or degraded. The toilet must be pulled, flange inspected, and resealed with a new wax ring.',
      },
      {
        q: 'Can I provide my own toilet for you to install?',
        a: 'Yes. If you have purchased a toilet, we handle the toilet installation, leveling, bolting, and supply connection with new seals.',
      },
    ],
  },
];

export function getLocalizedServiceSummary(service: ServiceDef, city: string): string {
  return service.seo.serviceSummaryTemplate.replace(/\{city\}/g, city);
}

export function getLocalizedServiceMetaDescription(service: ServiceDef, city: string): string {
  return service.seo.metaDescriptionTemplate.replace(/\{city\}/g, city);
}

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
      'Alternative Plumbing Solutions serves homeowners and businesses across Pearland, TX as a trusted local plumber and plumbing contractor. Familiar with Pearland neighborhoods, shifting clay soil, and housing styles, our team handles residential plumbing repairs, water heater service, drain cleaning, and commercial installations.',
    localInfo:
      'Pearland combines established neighborhoods with fast-growing residential and commercial developments. Older properties frequently benefit from sewer line camera inspections and whole-home repiping, while newer homes often call for water heater service, plumbing fixture installation, and gas piping for appliances and generators.',
    faqs: [
      {
        q: 'Do you serve both residential and commercial properties in Pearland, TX?',
        a: 'Yes. As a Pearland plumbing contractor, we handle residential plumbing repairs as well as commercial plumbing and new construction projects throughout the city.',
      },
      {
        q: 'What plumbing services do you offer in Pearland?',
        a: 'In Pearland, we offer water heater repair and installation, drain cleaning, sewer line camera inspection, gas piping, fixture installation, new construction plumbing, general plumbing repair, leak detection, repiping, and toilet repair.',
      },
      {
        q: 'What hours is a local plumber available in Pearland?',
        a: 'We are open Monday through Saturday, 7 AM to 7 PM, and closed on Sunday. Call (713) 501-1214 during business hours to check availability and discuss your plumbing project.',
      },
    ],
  },
  {
    slug: 'friendswood-tx',
    city: 'Friendswood',
    state: 'TX',
    county: 'Galveston County',
    intro:
      'Alternative Plumbing Solutions serves Friendswood, TX as a dependable local plumber and plumbing contractor for homeowners and commercial properties. From water heater repair and drain cleaning to sewer line inspections and leak detection, we deliver practical solutions built to last.',
    localInfo:
      'Many homes in Friendswood feature mature landscaping and established plumbing systems. Tree root intrusion in sewer lines, aging tank and tankless water heaters, hidden pipe leaks, and kitchen or bathroom fixture upgrades are common plumbing needs for Friendswood property owners.',
    faqs: [
      {
        q: 'Are you available as a local plumber in Friendswood, TX?',
        a: 'Yes. Friendswood is a core service area for residential plumbing repair and commercial plumbing work. Call (713) 501-1214 to confirm scheduling for your address.',
      },
      {
        q: 'Can your Friendswood plumbers repair or replace water heaters?',
        a: 'Yes. We provide water heater repair, water heater installation, and replacement for both tank and tankless units in Friendswood homes.',
      },
      {
        q: 'Do you offer sewer line inspection in Friendswood?',
        a: 'Yes. Our camera-based sewer line inspection and diagnostics service is available throughout Friendswood to check for root intrusion, cracks, or blockages.',
      },
    ],
  },
  {
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions serves residential and commercial customers across Houston, TX as a dedicated local plumber and plumbing contractor. Whether you need water heater repair, drain cleaning, leak detection, gas line installation, or new construction plumbing, our team focuses on straightforward service and lasting workmanship.',
    localInfo:
      'Houston properties span historic neighborhoods and modern residential and commercial builds. Shifting soil conditions and heavy rainfall can stress underground water and sewer lines, making sewer camera inspections, hidden pipe leak detection, and repiping important services for Houston property owners.',
    faqs: [
      {
        q: 'How can I confirm plumber availability for my address in Houston, TX?',
        a: 'Call us directly at (713) 501-1214 with your Houston address and plumbing issue, and our team will confirm service availability and next steps.',
      },
      {
        q: 'Can you help with slab leaks and hidden pipe leaks in Houston?',
        a: 'Yes. We provide leak detection services in Houston to pinpoint hidden pipe leaks under slabs or behind walls and complete the necessary repairs.',
      },
      {
        q: 'Do you work as a commercial plumbing contractor in Houston?',
        a: 'Yes. We handle both commercial plumbing repair and residential plumbing projects across Houston, including fixture installation and new construction plumbing.',
      },
    ],
  },
  {
    slug: 'alvin-tx',
    city: 'Alvin',
    state: 'TX',
    county: 'Brazoria County',
    intro:
      'Alternative Plumbing Solutions serves homeowners and commercial properties across Alvin, TX as a local plumber and plumbing contractor. Whether you need a drain cleared, a leaking pipe repaired, or a water heater replaced, straightforward plumbing help is just a phone call away.',
    localInfo:
      'Alvin properties include historic homes, rural acreage residences, and newer subdivisions. Coastal soil movement can strain underground water and sewer lines, while older pipe systems often require targeted pipe repair, whole-home repiping, and sewer line inspection.',
    faqs: [
      {
        q: 'Do you provide local plumbing services in Alvin, TX?',
        a: 'Yes. Alvin is part of our active Brazoria County service area for both residential and commercial plumbing repairs and installations.',
      },
      {
        q: 'Can you handle water heater repair and replacement in Alvin?',
        a: 'Yes. We repair and install both traditional tank water heaters and tankless models for homes and businesses in Alvin.',
      },
      {
        q: 'Do you offer drain cleaning and sewer inspection in Alvin?',
        a: 'Yes. We clear clogged drains and run sewer camera inspections across Alvin to pinpoint blockages, root intrusion, and damaged lines.',
      },
    ],
  },
  {
    slug: 'manvel-tx',
    city: 'Manvel',
    state: 'TX',
    county: 'Brazoria County',
    intro:
      'Alternative Plumbing Solutions serves Manvel, TX as a full-service local plumber and plumbing contractor for residential and commercial properties. From water heater installation and gas line work to drain cleaning and new construction plumbing, we help Manvel homeowners and builders keep projects running smoothly.',
    localInfo:
      'With rapid growth and new residential developments throughout Manvel, property owners frequently need fixture installations, gas piping for appliances and backup generators, tank and tankless water heater setups, and new construction plumbing coordination.',
    faqs: [
      {
        q: 'How do I schedule a plumber in Manvel, TX?',
        a: 'Call us Monday through Saturday between 7 AM and 7 PM at (713) 501-1214 to discuss your plumbing needs in Manvel and arrange an appointment.',
      },
      {
        q: 'Do you handle new construction plumbing in Manvel?',
        a: 'Yes. We provide underground rough-in, top-out, and final fixture installation for residential new construction and commercial build-outs in Manvel.',
      },
      {
        q: 'Can you inspect sewer lines in Manvel homes?',
        a: 'Yes. Our camera sewer line inspection service identifies cracks, shifting lines, and blockages without unnecessary digging.',
      },
    ],
  },
  {
    slug: 'league-city-tx',
    city: 'League City',
    state: 'TX',
    county: 'Galveston County',
    intro:
      'Alternative Plumbing Solutions provides reliable residential and commercial service across League City, TX as a trusted local plumber and plumbing contractor. With clear communication and practical solutions, we help League City homeowners and businesses solve plumbing problems properly.',
    localInfo:
      'League City neighborhoods experience humid coastal conditions and mature soil shifts that affect outdoor piping, water heaters, and sewer mains. Regular water heater service, sewer camera evaluations, and prompt leak detection help protect League City properties.',
    faqs: [
      {
        q: 'Which residential plumbing services do you offer in League City, TX?',
        a: 'We serve neighborhoods across League City with water heater repair, drain cleaning, sewer inspection, leak detection, pipe repair, fixture installation, toilet repair, and gas piping.',
      },
      {
        q: 'What should I do if my water heater is leaking in League City?',
        a: 'Turn off the cold water shutoff valve to the tank and call (713) 501-1214 during business hours so we can arrange an inspection and discuss repair or replacement.',
      },
      {
        q: 'Do you repair and install tankless water heaters in League City?',
        a: 'Yes. We install and service both tank and tankless water heaters for households and commercial spaces in League City.',
      },
    ],
  },
  {
    slug: 'pasadena-tx',
    city: 'Pasadena',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions serves Pasadena, TX as an experienced local plumber and plumbing contractor for homes and commercial facilities. Our team brings honest diagnostics, practical repair options, and reliable installations to Pasadena properties.',
    localInfo:
      'Pasadena encompasses established residential subdivisions alongside active commercial corridors. Aging galvanized supply lines, corroded drain pipes, low water pressure, and main sewer blockages are frequent challenges solved through targeted repairs, repiping, and drain cleaning.',
    faqs: [
      {
        q: 'Do you repair plumbing in older Pasadena homes?',
        a: 'Yes. We regularly work on older Pasadena homes experiencing low water pressure, rusted lines, hidden leaks, or aging sewer drains.',
      },
      {
        q: 'Are commercial plumbing services available in Pasadena, TX?',
        a: 'Yes. As a commercial plumbing contractor, we support Pasadena businesses with drain cleaning, gas piping, fixture installation, and plumbing repairs.',
      },
      {
        q: 'Can you locate hidden slab or pipe leaks in Pasadena?',
        a: 'Yes. We use diagnostic leak detection methods in Pasadena to locate hidden water leaks before completing targeted repairs.',
      },
    ],
  },
  {
    slug: 'webster-tx',
    city: 'Webster',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions provides residential and commercial plumbing services in Webster, TX as a local plumber and plumbing contractor. Webster homeowners and business operators count on our team for straightforward troubleshooting, pipe repairs, water heaters, and installations.',
    localInfo:
      'Webster features bustling commercial centers, retail properties, and residential neighborhoods that depend on reliable plumbing systems. Water heater maintenance, commercial drain cleaning, toilet and fixture replacements, and code-compliant gas piping are key services across Webster.',
    faqs: [
      {
        q: 'How can I book a plumber in Webster, TX?',
        a: 'Call (713) 501-1214 Monday through Saturday, 7 AM to 7 PM. We handle all scheduling by phone so you speak directly with our plumbing team.',
      },
      {
        q: 'Can you install gas lines for appliances and generators in Webster?',
        a: 'Yes. We provide gas line installation, extension, and pressure testing for ranges, dryers, water heaters, and backup natural gas generators in Webster.',
      },
      {
        q: 'Do you offer commercial plumbing repairs in Webster?',
        a: 'Yes. We handle commercial drain clogs, fixture replacements, water heaters, and new commercial plumbing installations in Webster.',
      },
    ],
  },
  {
    slug: 'clear-lake-tx',
    city: 'Clear Lake',
    state: 'TX',
    county: 'Harris County',
    intro:
      'Alternative Plumbing Solutions serves Clear Lake, TX as a dependable local plumber and plumbing contractor for homeowners and businesses. From water heater replacements and drain cleaning to sewer camera inspections and repiping, we keep Clear Lake plumbing systems running smoothly.',
    localInfo:
      'Clear Lake neighborhoods with mature trees often experience tree root intrusion in main sewer lines alongside normal wear in water heaters and supply lines. Video sewer inspections, drain blockage removal, and fixture updates help prevent disruptive plumbing backups.',
    faqs: [
      {
        q: 'Do you provide local plumbing services throughout Clear Lake, TX?',
        a: 'Yes. We serve residential and commercial properties across the Clear Lake community with full plumbing repairs, inspections, and installations.',
      },
      {
        q: 'How can I tell if tree roots are affecting my Clear Lake sewer line?',
        a: 'Recurring slow drains, gurgling toilets, or multiple fixture backups can point to root intrusion. We can run a sewer camera inspection through a cleanout to check the line.',
      },
      {
        q: 'Can you repair or replace tankless water heaters in Clear Lake?',
        a: 'Yes. We diagnose, repair, and install both standard tank water heaters and tankless models for Clear Lake homes.',
      },
    ],
  },
  {
    slug: 'sugar-land-tx',
    city: 'Sugar Land',
    state: 'TX',
    county: 'Fort Bend County',
    intro:
      'Alternative Plumbing Solutions serves Sugar Land, TX as a residential and commercial local plumber and plumbing contractor. Homeowners and property managers in Sugar Land rely on our team for leak detection, water heater service, whole-home repiping, and general plumbing repairs.',
    localInfo:
      'Sugar Land properties benefit from accurate hidden leak detection, modern water heater upgrades, plumbing fixture installations, and durable pipe replacements that help protect interior finishes and foundations from water damage.',
    faqs: [
      {
        q: 'Do you serve homes and businesses in Sugar Land, TX?',
        a: 'Yes. Call (713) 501-1214 with your Sugar Land address and plumbing concern to confirm scheduling for water heaters, leak detection, drain cleaning, or repairs.',
      },
      {
        q: 'Can you locate slab leaks in Sugar Land homes?',
        a: 'Yes. We provide leak detection in Sugar Land to isolate leaks beneath concrete slabs or behind walls so repairs remain focused.',
      },
      {
        q: 'Do you install plumbing fixtures and toilets in Sugar Land?',
        a: 'Yes. We install faucets, sinks, bathtubs, and toilets cleanly and check all supply and drain connections for leaks.',
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
  const clean = slug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '').replace(/^services?\//, '');
  return services.find((s) => s.slug === clean);
}

export function getLocation(slug: string): LocationDef | undefined {
  const clean = slug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '');
  return locations.find((l) => l.slug === clean);
}

// The primary / headquarters location for Alternative Plumbing Solutions
export const mainLocation = locations[0];

// Canonical URL for a service area landing page: /plumber-{locationSlug}
export function getLocationUrl(locationSlug: string): string {
  const clean = locationSlug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '');
  if (clean.startsWith('plumber-')) return `/${clean}`;
  return `/plumber-${clean}`;
}

// Find location by slug, with or without state code or plumber- prefix
export function findLocation(slugOrCity: string): LocationDef | undefined {
  const normalized = slugOrCity
    .toLowerCase()
    .trim()
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/^service-areas?\//, '')
    .replace(/^plumber-/, '');
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
  const cleanService = serviceSlug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '');
  const cleanLocation = locationSlug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '');
  return `${cleanService}-${cleanLocation}`;
}

// Canonical URL for a service (defaults to main location: /{service-slug}-{mainLocation-slug})
export function getServiceUrl(serviceSlug: string, locationSlug: string = mainLocation.slug): string {
  return `/${serviceLocationSlug(serviceSlug, locationSlug)}`;
}

export function parseServiceLocationSlug(pathSlug: string): { service: ServiceDef; location: LocationDef } | null {
  const clean = pathSlug.toLowerCase().trim().replace(/^\/+/, '').replace(/\/+$/, '');
  for (const l of locations) {
    // 1. Matches with state code, e.g. "water-heater-repair-and-installation-pearland-tx"
    if (clean.endsWith('-' + l.slug)) {
      const serviceSlug = clean.slice(0, -(l.slug.length + 1));
      const svc = getService(serviceSlug);
      if (svc) return { service: svc, location: l };
    }
    // 2. Matches without state code, e.g. "water-heater-repair-and-installation-pearland"
    const baseSlug = l.slug.replace(/-tx$/, '');
    if (clean.endsWith('-' + baseSlug)) {
      const serviceSlug = clean.slice(0, -(baseSlug.length + 1));
      const svc = getService(serviceSlug);
      if (svc) return { service: svc, location: l };
    }
  }
  return null;
}

const relatedServicesMap: Record<string, string[]> = {
  'drain-cleaning': [
    'plumbing-repair',
    'sewer-line-inspection',
    'leak-detection',
    'pipe-repair-and-repiping',
  ],
  'water-heater-repair-and-installation': [
    'plumbing-repair',
    'gas-piping',
    'leak-detection',
    'pipe-repair-and-repiping',
  ],
  'sewer-line-inspection': [
    'drain-cleaning',
    'pipe-repair-and-repiping',
    'leak-detection',
    'plumbing-repair',
  ],
  'gas-piping': [
    'water-heater-repair-and-installation',
    'new-construction-plumbing',
    'plumbing-repair',
  ],
  'fixture-installation': [
    'toilet-repair-and-installation',
    'plumbing-repair',
    'new-construction-plumbing',
    'drain-cleaning',
  ],
  'new-construction-plumbing': [
    'gas-piping',
    'fixture-installation',
    'pipe-repair-and-repiping',
    'water-heater-repair-and-installation',
  ],
  'plumbing-repair': [
    'leak-detection',
    'pipe-repair-and-repiping',
    'drain-cleaning',
    'toilet-repair-and-installation',
  ],
  'leak-detection': [
    'pipe-repair-and-repiping',
    'plumbing-repair',
    'sewer-line-inspection',
    'water-heater-repair-and-installation',
  ],
  'pipe-repair-and-repiping': [
    'leak-detection',
    'plumbing-repair',
    'sewer-line-inspection',
    'new-construction-plumbing',
  ],
  'toilet-repair-and-installation': [
    'drain-cleaning',
    'fixture-installation',
    'plumbing-repair',
    'leak-detection',
  ],
};

const nearbyLocationsMap: Record<string, string[]> = {
  'pearland-tx': ['friendswood-tx', 'manvel-tx', 'alvin-tx'],
  'friendswood-tx': ['pearland-tx', 'league-city-tx', 'webster-tx'],
  'houston-tx': ['pearland-tx', 'pasadena-tx', 'sugar-land-tx'],
  'alvin-tx': ['manvel-tx', 'pearland-tx', 'friendswood-tx'],
  'manvel-tx': ['pearland-tx', 'alvin-tx', 'sugar-land-tx'],
  'league-city-tx': ['friendswood-tx', 'webster-tx', 'clear-lake-tx'],
  'pasadena-tx': ['pearland-tx', 'clear-lake-tx', 'houston-tx'],
  'webster-tx': ['clear-lake-tx', 'friendswood-tx', 'league-city-tx'],
  'clear-lake-tx': ['webster-tx', 'league-city-tx', 'pasadena-tx'],
  'sugar-land-tx': ['houston-tx', 'pearland-tx', 'manvel-tx'],
};

export function getRelatedServices(serviceSlug: string): ServiceDef[] {
  const slugs = relatedServicesMap[serviceSlug] || [];
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServiceDef => Boolean(s));
}

export function getNearbyLocations(locationSlug: string): LocationDef[] {
  const slugs = nearbyLocationsMap[locationSlug] || [];
  return slugs
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is LocationDef => Boolean(l));
}
