import type { LocationDef, ServiceDef } from './business';

export type ServiceDomain =
  | 'water-heater'
  | 'drain-sewer'
  | 'gas-construction'
  | 'fixtures-repair'
  | 'leaks-piping';

export interface ServiceExpertiseContent {
  domain: ServiceDomain;
  h1Template: string;
  expertiseH2: string;
  overviewH2Template: string;
  problemsH2Template: string;
  signsH2: string;
  processH2: string;
  localH2Template: string;
  faqH2: string;
  ctaH2Template: string;
  introCore: string;
  expertiseParagraphs: string[];
  signs: string[];
  comparisonNotes: { label: string; detail: string }[];
  extraFaq: { q: string; a: string };
}

export const serviceExpertiseMap: Record<string, ServiceExpertiseContent> = {
  'water-heater-repair-and-installation': {
    domain: 'water-heater',
    h1Template: 'Water Heater Repair & Installation in {city}, TX',
    overviewH2Template: 'Professional Water Heater Repair & Replacement in {city}',
    problemsH2Template: 'Common Water Heater Problems in {city} Homes',
    expertiseH2: 'Tank vs. Tankless Water Heater Options & Maintenance',
    signsH2: 'Signs Your Water Heater Needs Repair or Replacement',
    processH2: 'Our Water Heater Inspection and Service Process',
    localH2Template: 'Water Heater Service Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Water Heater Service',
    ctaH2Template: 'Request Water Heater Service in {city}, TX',
    introCore:
      'Losing hot water disrupts cooking, cleaning, and daily routines across any home or commercial property. Whether you have a water heater not heating water, lukewarm output, or water leaking around the base of your tank, Alternative Plumbing Solutions handles hot water system repair, water heater replacement, and tankless water heater installation with clear diagnostics before work begins.',
    expertiseParagraphs: [
      'A reliable hot water system depends on properly functioning heating elements or burners, thermostats, pressure relief valves, and leak-free supply connections. When diagnosing a water heater not heating water or running out prematurely, we check whether a focused component repair will restore capacity safely or whether tank corrosion and age make full water heater replacement the more practical option.',
      'For customers evaluating tankless water heater installation versus a traditional storage tank unit, each option offers distinct advantages. Conventional tanks provide straightforward installation and lower initial replacement cost, while tankless systems heat water on demand, save floor space, and reduce standby energy losses when gas supply or electrical capacity is properly sized.',
      'Routine water heater maintenance also extends equipment service life and protects capacity. Sediment accumulation inside storage tanks forces heating elements to work harder and causes rumbling or popping sounds; periodic inspection and flushing help preserve consistent hot water delivery and catch early valve or fitting wear.',
    ],
    signs: [
      'Water heater not heating water or temperature swinging unpredictably between warm and cold',
      'Visible moisture, rusted fittings, or slow pooling around the base of the storage tank',
      'Rumbling, crackling, or popping sounds during heating cycles from mineral sediment buildup',
      'Discolored, metallic-smelling, or rusty water flowing exclusively from hot water taps',
      'A storage unit reaching 10 to 12 years of service life with recurring repair needs',
    ],
    comparisonNotes: [
      {
        label: 'Hot Water System Repair',
        detail: 'Ideal for faulty thermostats, failed heating elements, pilot assemblies, or leaking shutoff and relief valves on otherwise sound tanks.',
      },
      {
        label: 'Water Heater Replacement',
        detail: 'Recommended when the inner steel tank shows corrosion leaks, structural aging, or repeated multi-part failures.',
      },
      {
        label: 'Tankless Water Heater Installation',
        detail: 'Compact on-demand heating sized for household flow demand, complete with proper venting and gas or electrical sizing.',
      },
    ],
    extraFaq: {
      q: 'Does routine water heater maintenance help prevent sudden breakdowns?',
      a: 'Yes. Checking connections, inspecting the temperature and pressure relief valve, and flushing built-up sediment help maintain heating efficiency and reveal small leaks before a tank fails unexpectedly.',
    },
  },
  'drain-cleaning': {
    domain: 'drain-sewer',
    h1Template: 'Drain Cleaning Services in {city}, TX',
    overviewH2Template: 'Kitchen and Bathroom Drain Cleaning in {city}',
    problemsH2Template: 'Common Drain Problems in {city} Homes',
    expertiseH2: 'Main Drain Blockage Diagnosis & Clearing',
    signsH2: 'Signs Your Drain Needs Professional Cleaning',
    processH2: 'Our Drain Cleaning Process',
    localH2Template: 'When to Request Professional Drain Service in {city}',
    faqH2: 'Frequently Asked Questions About Drain Cleaning',
    ctaH2Template: 'Request Drain Cleaning in {city}, TX',
    introCore:
      'Clogged drains can interrupt everyday activities, from using kitchen sinks to taking showers and operating bathroom fixtures. Whether you are experiencing slow drainage, recurring drain clogs, or a completely blocked pipe, the first step is identifying the cause and location of the restriction so the line can be cleared thoroughly rather than temporarily pushed deeper.',
    expertiseParagraphs: [
      'A clogged kitchen drain typically forms from cooking grease, soap scum, and food debris hardening along the interior pipe walls over months of use. In contrast, bathroom drain cleaning frequently addresses hair accumulation, toothpaste residue, and mineral soap deposits trapped inside sink P-traps and tub or shower branch lines.',
      'When a slow draining sink affects only one fixture, the blockage is usually isolated in that local trap or branch pipe. When toilets gurgle while a tub runs or multiple fixtures back up simultaneously, however, the issue points toward a main drain blockage deeper in the sewer line serving the entire building.',
      'Over-the-counter chemical drain openers often eat at older metal or glued joints while leaving compacted buildup intact. Professional mechanical clearing and targeted diagnostics remove recurring drain clogs safely while allowing us to spot underlying pipe bellies, root intrusion, or structural defects before another backup occurs.',
    ],
    signs: [
      'A slow draining sink, tub, or shower where standing water lingers after shutting off the faucet',
      'Gurgling or bubbling noises coming from toilet bowls or floor drains when other fixtures run',
      'Recurring drain clogs in the same kitchen or bathroom fixture shortly after plunging',
      'Sewage or sour organic odors rising through sink traps or shower drains',
      'Water backing up into lower-level tubs or floor drains during laundry or heavy drain use',
    ],
    comparisonNotes: [
      {
        label: 'Clogged Kitchen Drain',
        detail: 'Clearing compacted grease, detergent scale, and disposal line buildup cleanly through kitchen cleanouts or trap connections.',
      },
      {
        label: 'Bathroom Drain Cleaning',
        detail: 'Removing hair, soap residue, and mineral scale from sink drains, tub overflows, and shower lines without harsh chemicals.',
      },
      {
        label: 'Main Drain Blockage Removal',
        detail: 'Restoring flow across main building drains and sewer laterals when multiple fixtures back up together.',
      },
    ],
    extraFaq: {
      q: 'What can I do to help prevent recurring drain clogs between service visits?',
      a: 'Use drain strainers on showers and tubs to catch hair, avoid pouring cooking grease or fibrous food scraps down a kitchen sink, and address early slow drainage before a full main drain blockage develops.',
    },
  },
  'sewer-line-inspection': {
    domain: 'drain-sewer',
    h1Template: 'Sewer Line Inspection in {city}, TX',
    overviewH2Template: 'Professional Sewer Camera Inspection in {city}',
    problemsH2Template: 'Common Sewer Line Problems in {city} Properties',
    expertiseH2: 'What Sewer Camera Inspection Diagnostics Reveal',
    signsH2: 'Warning Signs You Need a Sewer Pipe Inspection',
    processH2: 'Our Sewer Camera Inspection Process',
    localH2Template: 'Sewer Line Inspection Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Sewer Line Inspection',
    ctaH2Template: 'Request a Sewer Line Inspection in {city}, TX',
    introCore:
      'Underground sewer lines stay out of sight until a major backup hits. Alternative Plumbing Solutions provides sewer camera inspection and sewer diagnostics to evaluate the interior condition of residential and commercial sewer lines without tearing up yards, patios, or floors. Pinpointing cracks, root intrusion, or bellied sections early helps owners make informed repair decisions.',
    expertiseParagraphs: [
      'During a sewer pipe inspection, a waterproof high-resolution fiber-optic camera on a flexible cable is guided through an existing exterior or interior cleanout access. This live visual feed lets our plumber examine pipe joints, transitions, wall thickness, and slope from the building foundation out toward the municipal sewer tap.',
      'Effective sewer blockage diagnosis removes guesswork when drains repeatedly slow down. Rather than blindly snaking a broken line or guessing where a leak lies, camera inspection shows whether trouble stems from tree root infiltration, settled pipe bellies holding standing waste, offset clay or PVC joints, grease accumulation, or collapsed cast iron.',
      'A pre-purchase sewer line inspection is also one of the smartest steps before closing on any residential property more than 20 years old. Standard home inspections typically run faucets briefly without looking underground, whereas dedicated sewer diagnostics reveal hidden structural line defects prior to finalizing a sale.',
    ],
    signs: [
      'Repeated backups across multiple fixtures even after recent drain clearing',
      'Distinct sewer odors lingering in yards, bathrooms, or near slab edges',
      'Patches of unusually tall, dark green grass or persistently soggy yard spots above the sewer path',
      'Buying or selling an established home over 20 years old and wanting clarity on pipe condition',
      'Foundation settling signs paired with sluggish floor drains or gurgling toilets',
    ],
    comparisonNotes: [
      {
        label: 'Sewer Blockage Diagnosis',
        detail: 'Distinguishes temporary grease/debris buildup from structural pipe bellies, root growth, or separated underground joints.',
      },
      {
        label: 'Pre-Purchase Home Evaluation',
        detail: 'Shows buyers the actual condition of hidden lateral pipes before closing on an older home.',
      },
      {
        label: 'Non-Invasive Cleanout Access',
        detail: 'Performed directly through existing cleanout ports with no exploratory trenching across your lawn.',
      },
    ],
    extraFaq: {
      q: 'What happens once the sewer camera inspection finds a problem?',
      a: 'We explain the exact nature and location of what the camera shows — whether simple clearing, section repair, or pipe replacement makes the most sense — along with straightforward pricing before any repair begins.',
    },
  },
  'gas-piping': {
    domain: 'gas-construction',
    h1Template: 'Gas Piping Services in {city}, TX',
    overviewH2Template: 'Safe Residential & Commercial Gas Piping in {city}',
    problemsH2Template: 'Common Gas Piping Needs in {city} Properties',
    expertiseH2: 'Gas Line Installation, Pipe Repair & Pressure Testing',
    signsH2: 'Signs Your Gas Piping Needs Professional Inspection',
    processH2: 'Our Code-Compliant Gas Piping Process',
    localH2Template: 'Gas Piping Service Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Gas Piping',
    ctaH2Template: 'Request Gas Piping Service in {city}, TX',
    introCore:
      'Natural gas systems power kitchen ranges, dryers, water heaters, fireplaces, outdoor grills, and backup home generators safely only when pipe sizing, joints, and regulators meet strict plumbing standards. Alternative Plumbing Solutions provides residential gas piping, commercial gas pipe installation, gas line repair, and gas line pressure testing performed carefully to code.',
    expertiseParagraphs: [
      'Planning a gas pipe installation involves far more than running steel or approved piping from point A to point B. Load calculations must account for total BTU demand across existing furnaces and water heaters alongside newly added appliances or standby generators so every unit receives stable pressure under peak operation.',
      'Whether extending a branch for an outdoor kitchen or performing gas line repair on aging threaded fittings, every joint must remain completely tight and corrosion-protected. Above-ground black iron, exterior coated risers, and sediment traps are fitted neatly with accessible shutoff valves at each appliance point.',
      'Safety verification concludes with thorough gas line pressure testing. By pressurizing isolated line sections with calibrated gauges before restoring service, qualified technicians confirm there are zero slow leaks inside wall cavities, attics, or underground runs — giving property owners documented confidence in their gas system.',
    ],
    signs: [
      'Detecting the distinct sulfur-like smell of natural gas near appliances, meters, or pipe walls',
      'Adding a high-BTU standby generator, tankless water heater, gas range, or patio grill',
      'Rusting, pitted, or visibly deteriorated exposed black steel gas pipes or shutoff valves',
      'Appliance burners dropping flame height whenever another gas fixture switches on',
      'Municipal gas inspection requirements before restoring gas utility service to a property',
    ],
    comparisonNotes: [
      {
        label: 'Residential Gas Piping',
        detail: 'New appliance hookups, gas line extensions, shutoff valve upgrades, and code-compliant branch routing.',
      },
      {
        label: 'Generator Gas Pipe Installation',
        detail: 'Properly sized supply runs engineered for standby natural gas generator load requirements.',
      },
      {
        label: 'Gas Line Pressure Testing',
        detail: 'Thorough gas line pressure testing and leak verification before restoring gas service.',
      },
    ],
    extraFaq: {
      q: 'Why does adding a backup generator or tankless heater often require upsizing gas piping?',
      a: 'Generators and high-output tankless water heaters consume substantial BTU volume at peak load. If existing pipes are undersized, appliances starve for fuel or stall, so proper diameter sizing and pressure testing are essential.',
    },
  },
  'fixture-installation': {
    domain: 'fixtures-repair',
    h1Template: 'Plumbing Fixture Installation in {city}, TX',
    overviewH2Template: 'Faucet, Sink & Fixture Replacement in {city}',
    problemsH2Template: 'Common Plumbing Fixture Needs in {city} Homes',
    expertiseH2: 'Kitchen, Bathroom & Remodel Fixture Compatibility',
    signsH2: 'Signs It Is Time for Plumbing Fixture Replacement',
    processH2: 'Our Fixture Installation & Testing Process',
    localH2Template: 'Fixture Installation Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Fixture Installation',
    ctaH2Template: 'Request Fixture Installation in {city}, TX',
    introCore:
      'Upgrading kitchen and bathroom fixtures improves everyday comfort while protecting cabinets and subfloors against slow drips. Alternative Plumbing Solutions handles plumbing fixture installation across kitchens, baths, and utility rooms — including faucet installation, kitchen sink installation, bathroom sink installation, bathtubs, and remodel trim connections.',
    expertiseParagraphs: [
      'Clean plumbing fixture replacement begins with verifying compatibility between the new unit and existing wall rough-ins, countertop cutouts, drain tailpiece elevations, and shutoff valve threads. Matching center-set or widespread faucet spacing and drain basket depth upfront avoids mid-install delays or awkward jury-rigged adapters.',
      'During kitchen sink installation or bathroom sink installation, aging compression angle stops and braided supply hoses are checked closely alongside the new P-trap assembly. Replacing brittle valves and worn gaskets at the same time prevents hidden cabinet drips from soaking particleboard or tile surfaces weeks later.',
      'Once new bathtubs, shower valves, faucets, and sinks are leveled, sealed, and secured, every hot and cold supply connection and drain test cycle is inspected under operating pressure. Our goal is clean alignment, smooth handle operation, and dry cabinets when we leave.',
    ],
    signs: [
      'A worn kitchen or bathroom faucet that drips continuously or stiffens when turned',
      'Corroded under-sink shutoff valves that fail to close completely during routine maintenance',
      'Planning a kitchen or bath remodel with new farmhouse sinks, vanities, or shower trim',
      'Rust staining, loose mounting nuts, or moisture warping under a sink cabinet base',
      'Outdated fixtures wasting excessive water due to degraded internal cartridges',
    ],
    comparisonNotes: [
      {
        label: 'Faucet Installation',
        detail: 'Leak-free mounting of single-hole, center-set, pull-down kitchen, and widespread vanity faucets with fresh supply lines.',
      },
      {
        label: 'Kitchen & Bathroom Sink Installation',
        detail: 'Connecting drop-in, undermount, and pedestal sinks with properly vented P-traps and disposal drains.',
      },
      {
        label: 'Tub & Shower Fixture Upgrades',
        detail: 'Rough valve and trim connections fitted securely to code for bathroom renovations.',
      },
    ],
    extraFaq: {
      q: 'Should shutoff valves and supply lines be replaced along with a new faucet or sink?',
      a: 'Yes, when existing multi-turn shutoff valves are stiff, corroded, or dripping at the stem, upgrading to quarter-turn ball valves and fresh braided supply lines during fixture installation is inexpensive insurance against future cabinet leaks.',
    },
  },
  'new-construction-plumbing': {
    domain: 'gas-construction',
    h1Template: 'New Construction Plumbing in {city}, TX',
    overviewH2Template: 'Residential & Commercial New Build Plumbing in {city}',
    problemsH2Template: 'Plumbing Phases Handled for {city} Builds',
    expertiseH2: 'Planning, Rough-In, Top-Out & Trim Coordination',
    signsH2: 'What Builders & Owners Should Plan Early',
    processH2: 'Our New Construction Plumbing Process',
    localH2Template: 'New Construction Plumbing Information in {city}',
    faqH2: 'Frequently Asked Questions About New Construction Plumbing',
    ctaH2Template: 'Request a New Construction Estimate in {city}, TX',
    introCore:
      'Reliable plumbing in any newly constructed home or commercial space starts underground long before drywall or flooring goes down. As an experienced plumbing installation contractor and new construction plumbing contractor, Alternative Plumbing Solutions coordinates rough-in layouts, top-out distribution, inspection readiness, and final fixture installation across residential builds, whole-home remodels, and commercial build-outs.',
    expertiseParagraphs: [
      'Every successful new home plumbing installation begins with reviewing architectural plans and fixture schedules to size drain, waste, vent, and water distribution runs accurately. Proper slope, cleanout placement, and balanced hot-and-cold trunk lines ensure quiet, high-flow operation once the building is occupied.',
      'During residential plumbing rough-in, underground DWV (drain-waste-vent) piping is trenched, tested before concrete slab pours, and protected through framing. At top-out stage, hot and cold supply lines, shower valves, water heater chases, and venting stacks are anchored securely and pressure-tested ahead of municipal framing inspections.',
      'When finish carpentry and tile are complete, our team returns for final trim: mounting faucets, sinks, toilets, disposals, and water heaters, followed by a complete live-pressure and drainage walkthrough. Steady schedule coordination keeps builders and other trades moving smoothly.',
    ],
    signs: [
      'Custom home build or residential addition requiring complete underground and top-out plumbing',
      'Commercial tenant build-out needing restrooms, breakroom sinks, water heaters, and code venting',
      'Major gut remodel relocating bathroom wet walls, kitchen islands, or main drain stacks',
      'Coordinating municipal plumbing inspections cleanly without holding back framing or slab pours',
      'Installing standby gas lines alongside primary new construction water and drain piping',
    ],
    comparisonNotes: [
      {
        label: 'Residential Plumbing Rough-In',
        detail: 'Accurate underground slab layout, drain sizing, cleanouts, and pre-pour hydrostatic testing.',
      },
      {
        label: 'Top-Out & Venting',
        detail: 'Clean supply manifolds, shower valve bodies, vent stacks, and gas runs ready for city inspection.',
      },
      {
        label: 'Final Fixture Trim',
        detail: 'Finished installation of water heaters, toilets, sinks, tubs, and appliance shutoffs after paint and countertops.',
      },
    ],
    extraFaq: {
      q: 'At what stage should a new construction plumbing contractor be involved?',
      a: 'Bringing your plumber in during plan review — well before foundation site prep — allows pipe routing, slab penetrations, and fixture specifications to be aligned cleanly and avoids costly rework later.',
    },
  },
  'plumbing-repair': {
    domain: 'fixtures-repair',
    h1Template: 'Plumbing Repair Services in {city}, TX',
    overviewH2Template: 'Residential & Commercial Plumbing Troubleshooting in {city}',
    problemsH2Template: 'Common Home Plumbing Problems in {city}',
    expertiseH2: 'Diagnostic Plumbing Troubleshooting & Lasting Repairs',
    signsH2: 'Signs You Need Professional Plumbing Repair',
    processH2: 'Our Plumbing Inspection and Repair Process',
    localH2Template: 'Plumbing Repair Service Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Plumbing Repair',
    ctaH2Template: 'Request Plumbing Repair in {city}, TX',
    introCore:
      'Small plumbing faults rarely stay small. A steady drip under a sink, an unexplained drop in shower water pressure, or a leaking shutoff valve wastes water daily and slowly damages cabinetry and drywall. Alternative Plumbing Solutions provides residential plumbing repair and commercial troubleshooting focused on fixing root causes rather than temporary patches.',
    expertiseParagraphs: [
      'Thorough plumbing troubleshooting separates isolated fixture hardware wear from system-wide pipe or pressure regulator issues. When water pressure weakens across a home, for example, inspecting pressure-reducing valves, main shutoffs, aerators, and visible supply runs tells us quickly whether a part replacement or targeted pipe leak repair is warranted.',
      'Addressing home plumbing problems promptly also protects surrounding finishes. A slow compression drip under a kitchen vanity or worn shower diverter inside a wall cavity can trigger subfloor rot or mold if left unaddressed, whereas timely stem, cartridge, supply line, or valve replacement resolves the leak cleanly.',
      'Because every home is piped differently, we inspect connections closely, discuss practical repair choices with clear upfront pricing, and test every repaired line under full operating pressure before finishing the call.',
    ],
    signs: [
      'Noticeable water stains, bubbling paint, or dampness under kitchen and bath sinks',
      'A sudden drop in water pressure at showers, outdoor hose bibs, or multiple faucets',
      'Stiff, corroded, or weeping main shutoff and under-fixture angle stop valves',
      'Constant trickling sounds from toilet tanks or dripping spouts that raise water usage',
      'Water hammer banging inside walls when washing machines or faucets shut off',
    ],
    comparisonNotes: [
      {
        label: 'Residential Plumbing Repair',
        detail: 'Troubleshooting and repairing faucets, valves, shower bodies, P-traps, and supply lines.',
      },
      {
        label: 'Pipe Leak Repair',
        detail: 'Isolating and repairing weeping joints, pinholes, and damaged exposed copper, PEX, or PVC pipes.',
      },
      {
        label: 'Preventative Valve Upgrades',
        detail: 'Replacing frozen multi-turn gate valves with dependable quarter-turn shutoff ball valves.',
      },
    ],
    extraFaq: {
      q: 'Is it better to call a plumber for multiple small repairs in one visit?',
      a: 'Yes. Mention all small issues when you call — combining a dripping faucet, loose toilet valve, and stiff shutoff replacement into one scheduled visit saves time and gets everything verified together.',
    },
  },
  'leak-detection': {
    domain: 'leaks-piping',
    h1Template: 'Water Leak Detection Services in {city}, TX',
    overviewH2Template: 'Hidden Water & Slab Leak Detection in {city}',
    problemsH2Template: 'Common Hidden Leak Symptoms in {city} Properties',
    expertiseH2: 'Slab Leak Detection & High Water Bill Leak Diagnosis',
    signsH2: 'Warning Signs of Hidden Water Pipe Leaks',
    processH2: 'Our Systematic Leak Detection Process',
    localH2Template: 'Leak Detection Service Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Leak Detection',
    ctaH2Template: 'Request Leak Detection Service in {city}, TX',
    introCore:
      'Not every plumbing leak announces itself with water across the floor. Water lines routed beneath concrete slabs, inside drywall cavities, and through exterior trenches can lose hundreds of gallons quietly while driving up utility bills and stressing foundations. Alternative Plumbing Solutions provides targeted hidden water leak detection and water pipe leak detection to isolate the source before repair begins.',
    expertiseParagraphs: [
      'A high water bill leak diagnosis often starts with checking your utility water meter with all interior and exterior fixtures shut completely off. If the leak indicator dial continues spinning, pressurized water is escaping somewhere between the meter box and interior fixtures.',
      'Slab leak detection requires pinning down whether water is escaping on the cold supply side, hot distribution manifold, or yard service line. Warning clues such as localized warm spots across tile or laminate flooring, subtle hissing sounds near baseboards, damp carpet edges, or hot water heaters cycling continuously all narrow down the affected circuit.',
      'Our step-by-step water pipe leak detection isolates zones systematically so any access opening inside walls or slabs remains tightly targeted rather than tearing open entire rooms needlessly. Once pinpointed, we walk through straightforward spot repair or rerouting choices clearly.',
    ],
    signs: [
      'A sudden unexplained spike in monthly water bills with normal household water habits',
      'Noticeably warm patches on tile, wood, or vinyl floors indicating a hot-water slab leak',
      'The faint sound of running water inside quiet rooms when all taps and appliances are closed',
      'Dampness along lower drywall baseboards, musty odors, or stained ceilings below upper baths',
      'A water meter test dial turning continuously even after shutting off interior fixtures',
    ],
    comparisonNotes: [
      {
        label: 'Hidden Water Leak Detection',
        detail: 'Tracing water loss inside drywall chases, ceiling runs, and behind shower or tub walls.',
      },
      {
        label: 'Slab Leak Detection',
        detail: 'Pinpointing pressurized hot or cold water line breaks beneath concrete foundations.',
      },
      {
        label: 'High Water Bill Leak Diagnosis',
        detail: 'Meter isolation, yard line testing, and fixture checks to stop unexplained utility increases.',
      },
    ],
    extraFaq: {
      q: 'How can I check at home if a hidden leak is likely before calling?',
      a: 'Turn off every faucet, ice maker, sprinkler zone, and appliance, then look at the small triangular or gear-shaped flow indicator on your water meter. If it moves at all, water is leaking downstream of the meter.',
    },
  },
  'pipe-repair-and-repiping': {
    domain: 'leaks-piping',
    h1Template: 'Pipe Repair & Repiping Services in {city}, TX',
    overviewH2Template: 'Whole House Repiping & Water Pipe Replacement in {city}',
    problemsH2Template: 'Common Pipe & Freeze Issues in {city} Properties',
    expertiseH2: 'Pipe Deterioration, Copper Pipe Repair & Whole House Repiping',
    signsH2: 'Signs Your Property Needs Pipe Repair or Repiping',
    processH2: 'Our Pipe Repair and Repiping Process',
    localH2Template: 'Pipe Repair & Repiping Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Pipe Repair & Repiping',
    ctaH2Template: 'Request Pipe Repair or Repiping in {city}, TX',
    introCore:
      'Aging galvanized steel pipes, brittle lines damaged during winter freezes, and recurring pinhole leaks slowly undermine water quality, pressure, and peace of mind. Alternative Plumbing Solutions provides focused copper pipe repair, targeted water pipe replacement, and full whole house repiping so homeowners and commercial operators can count on steady water flow and dry walls.',
    expertiseParagraphs: [
      'Over decades, internal rust and mineral scaling choke galvanized water lines down to a narrow channel, producing rusty tap water and weak shower flow whenever another fixture opens. At the same time, localized corrosion or mechanical wear can cause recurring pinhole failures along aging copper pipe sections.',
      'When only a single exposed elbow, freeze-split outdoor bib line, or accessible fitting fails, clean copper pipe repair or targeted section water pipe replacement solves the issue efficiently. When multiple leaks emerge across different walls or under slabs, however, residential pipe replacement through whole house repiping eliminates repeated repair costs and drywall disruption.',
      'Careful whole house repiping is planned zone by zone to minimize downtime while swapping outdated supply piping for durable modern lines. Once installed, every branch manifold and fixture riser is pressure-tested thoroughly before final restoration.',
    ],
    signs: [
      'Chronically low water pressure when more than one sink, toilet, or shower operates',
      'Brownish, rusty, or metallic-tasting cold water coming out of kitchen or bath faucets',
      'Two or more separate pipe leaks appearing in different areas of the building over recent months',
      'Visible flaking corrosion, green oxidation, or wet spots along attic or garage supply pipes',
      'Exposed exterior or attic piping cracked during hard Texas winter cold snaps',
    ],
    comparisonNotes: [
      {
        label: 'Spot Pipe & Copper Pipe Repair',
        detail: 'Clean replacement of damaged elbows, pinholes, or freeze-burst pipe runs.',
      },
      {
        label: 'Water Pipe Replacement',
        detail: 'Upgrading specific failing branch lines feeding baths, kitchens, or utility rooms.',
      },
      {
        label: 'Whole House Repiping',
        detail: 'System-wide residential pipe replacement to permanently solve low pressure and multi-leak aging pipes.',
      },
    ],
    extraFaq: {
      q: 'Will whole house repiping leave me without water for days?',
      a: 'We plan repipe work in organized stages so household water downtime is kept as brief as possible, testing new lines systematically as connections are transitioned.',
    },
  },
  'toilet-repair-and-installation': {
    domain: 'fixtures-repair',
    h1Template: 'Toilet Repair & Installation in {city}, TX',
    overviewH2Template: 'Running Toilet Repair & Toilet Replacement in {city}',
    problemsH2Template: 'Common Toilet Problems in {city} Homes',
    expertiseH2: 'Repairing Seals & Valves vs. Full Toilet Replacement',
    signsH2: 'Signs Your Toilet Needs Repair or Replacement',
    processH2: 'Our Toilet Repair and Installation Process',
    localH2Template: 'Toilet Service Information for {city} Residents',
    faqH2: 'Frequently Asked Questions About Toilet Repair',
    ctaH2Template: 'Request Toilet Service in {city}, TX',
    introCore:
      'Even a single malfunctioning toilet can waste hundreds of gallons of water or damage bathroom subfloors through slow base seepage. Alternative Plumbing Solutions provides prompt running toilet repair, wax ring resealing for a toilet leaking at base, stubborn clog clearing, and complete toilet installation and toilet replacement for homes and businesses.',
    expertiseParagraphs: [
      'Many everyday toilet flushing problems trace back to worn internal tank components: hardened flappers that fail to seal, noisy fill valves sticking open, broken flush chains, or calcified rim jets restricting bowl siphon speed. In those cases, precision running toilet repair and internal rebuild parts restore quiet, single-flush performance rapidly.',
      'A toilet leaking at base signals a more urgent condition: water escaping past a compressed or cracked wax ring each time the bowl flushes. Ignoring base seepage or rocking bolts lets moisture rot wood subfloors and warp adjacent flooring, making immediate pulling, flange inspection, and resealing essential.',
      'When porcelain tanks crack, older high-gallon bowls clog chronically, or you are remodeling a bath, full toilet replacement delivers cleaner flushing mechanics and reduced water bills. Our toilet installation ensures a solid floor flange, fresh seal, level shimming, new supply hose, and repeated flush verification.',
    ],
    signs: [
      'Toilet tank refilling periodically on its own due to a leaking flapper or worn fill valve',
      'Dampness, staining, or water pooling around the base bolts after flushing (toilet leaking at base)',
      'Toilet bowl wobbling or shifting slightly when seated due to loose closet bolts or damaged flange',
      'Weak, sluggish toilet flushing problems requiring double flushes or frequent plunging',
      'Hairline cracks visible in a porcelain tank or bowl base',
    ],
    comparisonNotes: [
      {
        label: 'Running Toilet Repair',
        detail: 'Replacing worn flappers, fill valves, flush valves, and corroded tank bolts cleanly.',
      },
      {
        label: 'Base Leak & Wax Ring Resealing',
        detail: 'Pulling the bowl, inspecting the floor closet flange, and setting a fresh leak-proof seal.',
      },
      {
        label: 'Toilet Replacement & Installation',
        detail: 'Setting standard, comfort-height, or high-efficiency two-piece and one-piece units level and leak-free.',
      },
    ],
    extraFaq: {
      q: 'Should I caulk around the base if a toilet is leaking slightly?',
      a: 'Never seal over an active leak with caulk. That only traps escaping flush water underneath the subfloor where it causes hidden rot; the toilet must be pulled and properly resealed at the flange first.',
    },
  },
};

// Authentic, location-specific context per domain (no fake customer stories, no other city stuffing!)
const locationDomainNotes: Record<string, Record<ServiceDomain, string>> = {
  'pearland-tx': {
    'water-heater':
      'Across Pearland neighborhoods — from established homes with older garage storage tanks to newer multi-bath builds with higher hot water demand — choosing reliable repair or appropriately sized replacement ensures steady hot water year-round. Being based right in Pearland allows our team to help residents inspect leaking tanks, plan tankless transitions, and resolve lost hot water promptly.',
    'drain-sewer':
      'Pearland combines mature residential lots with fast-growing subdivisions, meaning drain and sewer issues range from kitchen grease buildup in busy households to soil settlement or root intrusion in older clay-soil neighborhoods. Proper drain clearing and sewer camera diagnostics protect Pearland homeowners from surprise backups.',
    'gas-construction':
      'As residential development, custom remodels, and commercial corridors continue expanding across Pearland, gas piping additions for outdoor kitchens, appliances, and backup generators alongside full new-construction plumbing rough-ins remain key services throughout Brazoria County.',
    'fixtures-repair':
      'Whether updating bathroom faucets and toilets in long-standing Pearland residences or troubleshooting unexpected pressure drops and valve drips in newer subdivisions, thoughtful fixture installation and targeted plumbing repair keep Pearland households running smoothly.',
    'leaks-piping':
      'Pearland\'s expansive clay soils and occasional severe winter freezes place significant seasonal strain on underground slab pipes, attic supply lines, and aging copper or galvanized connections. Careful hidden leak detection and clean repiping help Pearland homeowners protect foundations and interior finishes.',
  },
  'friendswood-tx': {
    'water-heater':
      'Many established homes in Friendswood operate older storage water heaters located in garages or attic utility closets where undetected pan drips can stain drywall. Timely hot water diagnostics, element repairs, and clean tank or tankless installations protect Friendswood households from disruption.',
    'drain-sewer':
      'Friendswood\'s abundant mature trees and settled suburban lots make main sewer lines particularly vulnerable to fine tree root intrusion seeking moisture at underground joints. Combining thorough drain clearing with camera inspections gives Friendswood property owners clear visibility inside their lines.',
    'gas-construction':
      'Homeowners across Friendswood frequently invest in thoughtful kitchen upgrades, backyard natural gas hookups, standby generator lines, and residential additions requiring careful rough-in planning, code-compliant gas pipe sizing, and documented pressure testing.',
    'fixtures-repair':
      'From replacing worn multi-turn shutoff valves and bathroom toilets in classic Friendswood homes to installing updated kitchen sinks and vanity faucets during renovations, careful workmanship prevents hidden cabinet leaks.',
    'leaks-piping':
      'Established subdivisions across Friendswood feature a mix of copper and aging water distribution piping affected over decades by ground movement and seasonal temperature swings. Accurate slab leak detection and well-planned repiping help maintain dependable household water pressure.',
  },
  'houston-tx': {
    'water-heater':
      'Properties across Houston span compact utility rooms in historic inner neighborhoods to high-demand multi-story residences and commercial buildings. Correct water heater sizing, clean venting checks, and reliable repair or tankless replacement keep Houston hot water systems performing steadily.',
    'drain-sewer':
      'Houston\'s heavy seasonal downpours, shifting gumbo clay soils, and decades-old municipal and private lateral lines frequently contribute to slow main drains, offset sewer joints, and root blockages. Camera diagnostics pinpoint whether simple clearing or deeper lateral work is warranted.',
    'gas-construction':
      'Across Houston\'s diverse residential remodels and commercial build-outs, natural gas piping for ranges, tankless heaters, and emergency backup generators — alongside full ground-up rough-in plumbing — must satisfy strict code and pressure-testing standards.',
    'fixtures-repair':
      'High daily usage across Houston residences and local commercial spaces accelerates wear on kitchen faucets, flush valves, shower trims, and under-sink angle stops. Accurate troubleshooting solves drips and toilet base leaks without unnecessary fixture swaps.',
    'leaks-piping':
      'Expansive soil movement and aging supply infrastructure across Houston make slab leaks, underground yard line breaks, and low pressure from corroded galvanized pipes common concerns. Zone-isolated leak detection and repiping restore confidence.',
  },
  'alvin-tx': {
    'water-heater':
      'Alvin homes range from rural ranch properties and long-standing neighborhood houses to newer residential developments, with varied gas and electric utility setups. Properly inspecting thermostats, valves, and tank integrity ensures dependable hot water across every Alvin household.',
    'drain-sewer':
      'Coastal prairie soil shifts and mature rural properties in Alvin can place uneven stress on septic-adjacent or municipal sewer laterals, leading to settled bellies and root clogs. Clean camera evaluation and thorough mechanical clearing identify line troubles accurately.',
    'gas-construction':
      'Property owners and builders around Alvin regularly coordinate new-home rough-ins, barn or workshop plumbing tie-ins, and safely sized natural gas piping for stoves, heaters, and backup power generators built to pass inspections.',
    'fixtures-repair':
      'From replacing aging toilets leaking at floor flanges in older Alvin bungalows to fitting new kitchen sinks and utility faucets cleanly, upgrading worn trim and valves prevents slow water loss.',
    'leaks-piping':
      'Mineral-rich water conditions and older galvanized or exposed exterior lines in Alvin can lead to pipe corrosion, low water pressure, and winter freeze bursts. Targeted spot repairs and whole-home repiping deliver lasting relief.',
  },
  'manvel-tx': {
    'water-heater':
      'With rapid growth across Manvel\'s master-planned neighborhoods and acreage estates, multi-bath homes frequently demand high-recovery tank water heaters or well-sized tankless systems. Proper maintenance and timely part repairs preserve reliable hot water capacity.',
    'drain-sewer':
      'Even relatively young subdivisions in Manvel experience clogged kitchen lines from heavy family cooking, construction debris left in drains, or shifting clay soil around yard cleanouts. Thorough drain cleaning and video camera checks restore proper slope and flow.',
    'gas-construction':
      'Manvel\'s active residential and commercial construction boom makes coordinated new-build rough-in, top-out piping, outdoor kitchen gas extensions, and generator gas pipe installation essential services delivered strictly to code.',
    'fixtures-repair':
      'Homeowners across Manvel frequently customize kitchens, utility sinks, showers, and high-efficiency toilets after move-in or during renovations. Careful fixture compatibility checks and clean trim installation ensure leak-free results.',
    'leaks-piping':
      'Expanding home footprints and wide suburban lots in Manvel make early yard-line and slab leak detection vital whenever utility bills climb unexpectedly, allowing fast isolation before flooring or landscaping damage spreads.',
  },
  'league-city-tx': {
    'water-heater':
      'League City\'s humid coastal atmosphere can accelerate rust on exposed flue piping, exterior drain pans, and older tank valves. Inspecting anode health, gas connections, and tankless flushing needs keeps League City hot water systems dependable.',
    'drain-sewer':
      'Between tree-lined established streets and bay-area soil moisture across League City, stubborn main line clogs, bathroom hair accumulation, and root intrusion into sewer pipes require thorough mechanical clearing and visual camera verification.',
    'gas-construction':
      'League City homeowners investing in storm-ready standby generators, outdoor living areas, or residential remodels count on corrosion-aware gas piping installation and properly inspected new-build plumbing.',
    'fixtures-repair':
      'Coastal moisture and daily household traffic take a steady toll on bathroom faucets, shower cartridges, and toilet hardware in League City. Replacing weathered valves and resetting leaking toilet bases protects interior tile and cabinets.',
    'leaks-piping':
      'Shifting coastal soils and older plumbing materials in established League City pockets frequently surface as hidden slab leaks, yard line seepage, or corroded pipe pinholes. Focused diagnostics keep leak repairs minimally invasive.',
  },
  'pasadena-tx': {
    'water-heater':
      'Across Pasadena\'s established homes and active commercial corridors, aging tank water heaters often suffer sediment buildup and worn burners or heating elements. Honest evaluations confirm when repair makes sense versus upgrading to a dependable replacement.',
    'drain-sewer':
      'Many classic Pasadena properties still rely on cast iron or early drain laterals prone to scale buildup, root penetration, and recurring clogs. Combining safe drain clearing with sewer camera diagnostics lets Pasadena owners address problems cleanly.',
    'gas-construction':
      'Remodeling older homes, supporting light commercial storefronts, and upgrading gas appliance lines across Pasadena require strict attention to older gas piping sizing, shutoff accessibility, and thorough pressure testing.',
    'fixtures-repair':
      'Practical fixture updates, replacement toilets, new kitchen faucets, and prompt plumbing troubleshooting help Pasadena property owners modernize bathrooms and eliminate noisy dripping lines.',
    'leaks-piping':
      'Older galvanized steel supply pipes in Pasadena neighborhoods frequently corrode from the inside out, narrowing water flow and causing rusty water or pinhole wall leaks. Whole-home repiping or targeted line replacement restores strong water pressure.',
  },
  'webster-tx': {
    'water-heater':
      'Webster mixes bustling commercial centers, retail properties, and residential neighborhoods where hot water reliability keeps both households and businesses operating normally. Timely valve, burner, and tank replacement minimizes downtime.',
    'drain-sewer':
      'High-traffic restrooms, commercial kitchens, and nearby residential drains in Webster demand reliable clog removal and preventive sewer diagnostics so grease buildup or main line restrictions never interrupt daily operations.',
    'gas-construction':
      'Commercial tenant build-outs, restaurant gas hookups, medical office suites, and residential installations across Webster depend on accurate blueprint rough-ins, proper gas line sizing, and clean code compliance.',
    'fixtures-repair':
      'Busy residential baths and commercial restrooms in Webster require sturdy flush valves, properly sealed toilet bases, heavy-duty faucets, and responsive repair whenever a leak or cartridge failure occurs.',
    'leaks-piping':
      'Unexpected utility spikes or slab dampness in Webster commercial buildings or residences require prompt, methodical leak detection and clean piping repair so operations and finishes remain protected.',
  },
  'clear-lake-tx': {
    'water-heater':
      'Clear Lake\'s coastal air and established residential architecture often expose aging water heaters to pan moisture, sediment accumulation, and valve scale. Regular checks and straightforward tank or tankless upgrades deliver reliable hot water.',
    'drain-sewer':
      'Clear Lake neighborhoods are known for mature trees whose roots frequently enter older sewer line joints, alongside normal household grease and shower clogs. Camera sewer inspection quickly locates root intrusion before total backup.',
    'gas-construction':
      'Homeowners across Clear Lake modernizing kitchens, adding backup natural gas generators for gulf storm readiness, or remodeling bathrooms rely on safe gas pipe sizing and pressure-tested installations.',
    'fixtures-repair':
      'Refreshing dated vanities, replacing corroded supply stops, fixing running toilets, and sealing toilet floor flanges cleanly help Clear Lake homeowners prevent hidden moisture damage.',
    'leaks-piping':
      'Decades-old copper and galvanized supply piping in established Clear Lake homes is vulnerable to pinhole leaks and foundation shifting. Pinpoint leak detection and organized repiping protect wood and tile interiors.',
  },
  'sugar-land-tx': {
    'water-heater':
      'Large multi-bathroom homes and commercial facilities in Sugar Land often rely on dual storage tanks or high-output tankless systems. Accurate hot water diagnostics, valve servicing, and balanced unit replacement maintain comfort across busy households.',
    'drain-sewer':
      'From busy kitchen lines and bathroom branch drains in established Sugar Land estates to main sewer evaluations in tree-lined yards, clean clearing and video inspection preserve free-flowing plumbing.',
    'gas-construction':
      'Upscale kitchen remodels, outdoor cooking islands, standby backup generators, and custom commercial projects in Sugar Land demand carefully sized gas lines, neat routing, and verified pressure tests.',
    'fixtures-repair':
      'Modernizing faucets, undermount sinks, showers, and quiet high-efficiency toilets in Sugar Land requires careful finish protection, exact valve alignment, and thorough leak testing.',
    'leaks-piping':
      'Protecting hardwood floors, custom cabinetry, and concrete foundations in Sugar Land makes fast hidden leak detection and clean pipe repair or repiping essential whenever water bills climb or dampness appears.',
  },
};

export function getServiceLocationContent(service: ServiceDef, location: LocationDef) {
  const expertise = serviceExpertiseMap[service.slug];
  const city = location.city;
  const state = location.state;

  // Special Pearland Drain Cleaning intro matching Phase 5 / Section 6 example cleanly!
  let introParagraphs: string[];
  if (service.slug === 'drain-cleaning' && location.slug === 'pearland-tx') {
    introParagraphs = [
      'Clogged drains can interrupt everyday activities, from using kitchen sinks to taking showers and operating bathroom fixtures. Alternative Plumbing Solutions provides drain cleaning services for customers in Pearland, Texas. Whether you are experiencing slow drainage, recurring blockages or a completely clogged drain, the first step is identifying the cause of the problem and determining the appropriate cleaning method.',
      `Properties across Pearland and ${location.county} range from established neighborhoods with mature trees near sewer lines to newer two-story subdivisions. We locate whether slow flow originates in a local trap or deeper main branch so the line is cleared thoroughly rather than temporarily pushed further down the pipe.`,
    ];
  } else {
    introParagraphs = [
      `${expertise.introCore} Serving ${city}, ${state} and surrounding ${location.county} properties, our team helps residential and commercial customers diagnose the underlying issue and complete lasting ${service.seo.primaryServiceName.toLowerCase()} work.`,
      `Homeowners, property managers, and businesses across ${city}, ${state} count on clear diagnostics and practical ${service.seo.primaryServiceName.toLowerCase()} options tailored to the property rather than one-size-fits-all recommendations.`,
    ];
  }

  const localContext = locationDomainNotes[location.slug]?.[expertise.domain] ?? location.localInfo;

  const localizedFaqs = [
    {
      q: `Do you provide ${service.seo.primaryServiceName.toLowerCase()} in ${city}, ${state}?`,
      a: `Yes. Alternative Plumbing Solutions provides ${service.seo.primaryServiceName.toLowerCase()} (${service.seo.secondaryKeywordsLabel.toLowerCase()}) for residential and commercial properties in ${city}, ${state}. Call (713) 501-1214 during business hours (Monday–Saturday, 7 AM–7 PM) to confirm scheduling.`,
    },
    ...service.faqs,
    expertise.extraFaq,
  ];

  const replaceCity = (template: string) => template.replace(/\{city\}/g, city).replace(/\{state\}/g, state);

  return {
    h1: replaceCity(expertise.h1Template),
    overviewH2: replaceCity(expertise.overviewH2Template),
    problemsH2: replaceCity(expertise.problemsH2Template),
    expertiseH2: expertise.expertiseH2,
    signsH2: expertise.signsH2,
    processH2: expertise.processH2,
    localH2: replaceCity(expertise.localH2Template),
    faqH2: expertise.faqH2,
    ctaH2: replaceCity(expertise.ctaH2Template),
    introParagraphs,
    expertiseParagraphs: expertise.expertiseParagraphs,
    signs: expertise.signs,
    comparisonNotes: expertise.comparisonNotes,
    localRelevanceParagraphs: [
      localContext,
      `Call (713) 501-1214 to speak directly with our plumbing team about ${service.seo.primaryServiceName.toLowerCase()} in ${city}, ${state}. We confirm availability for your ${location.county} address by phone and discuss straightforward pricing and next steps before work begins.`,
    ],
    whyChoosePoints: [
      `Serving residential and commercial properties in ${city}, ${state} and ${location.county}`,
      'Focused on practical, alternative plumbing solutions rather than pushing unnecessary upgrades',
      'Direct phone troubleshooting and straightforward upfront explanations before work starts',
      'Available Monday through Saturday, 7:00 AM to 7:00 PM at (713) 501-1214',
      '4.0★ average customer rating across 48 Google reviews',
    ],
    faqs: localizedFaqs,
  };
}
