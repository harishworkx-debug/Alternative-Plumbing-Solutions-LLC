import { services } from './business';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface PlumbingArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  image: string;
  excerpt: string;
  intro: string[];
  sections: ArticleSection[];
  keyTakeaways: string[];
  faqs: ArticleFaq[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
}

function getServiceImage(slug: string): string {
  return (
    services.find((s) => s.slug === slug)?.image ||
    'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600'
  );
}

export const articles: PlumbingArticle[] = [
  {
    slug: 'signs-you-need-professional-drain-cleaning',
    title: 'Signs You Need Professional Drain Cleaning',
    metaTitle: 'Signs You Need Professional Drain Cleaning | Alternative Plumbing Solutions',
    metaDescription:
      'Learn the early signs of clogged drains, slow sinks, recurring backups, and main sewer line blockages before water damage occurs.',
    targetKeyword: 'Signs of clogged drains',
    category: 'Drains & Sewer',
    readTime: '5 min read',
    publishedDate: '2026-11-12',
    updatedDate: '2026-11-12',
    image: getServiceImage('drain-cleaning'),
    excerpt:
      'Slow drains, gurgling pipes, and odors often appear days or weeks before a total backup. Here is how to recognize when a household plunger is not enough.',
    intro: [
      'Most severe drain backups give warning signs well before standing water covers a shower floor or kitchen cabinet. Catching signs of clogged drains early helps you resolve buildup inside a branch line before wastewater backs up into multiple fixtures.',
      'In Pearland and Greater Houston homes, a mix of cooking grease, hair, soap scum, mineral buildup, and clay-soil ground shifting around exterior sewer lines frequently causes recurring slow drainage.',
    ],
    sections: [
      {
        heading: '1. Multiple Drains Slowing Down at the Same Time',
        paragraphs: [
          'A single slow bathroom sink usually points to hair and soap accumulation inside the local P-trap or pop-up assembly. However, when a tub, shower, and nearby toilet all begin draining sluggishly together, the restriction is usually further downstream in a shared branch pipe or the main sewer line.',
          'Continuing to run dishwashers or washing machines while a main branch line is restricted forces greywater to seek the lowest open fixture—often a downstairs bathtub or floor drain.',
        ],
        bullets: [
          'Water backing up into a shower when you flush a nearby toilet',
          'Downstairs fixtures slowing down while upstairs drains seem normal',
          'Washing machine discharge cycles causing nearby sink gurgles',
        ],
      },
      {
        heading: '2. Gurgling Sounds From Toilets or Sinks',
        paragraphs: [
          'Drains should empty smoothly and quietly. When water passes a partial blockage in the pipe, trapped air is pushed backward and escapes through the water seal of another trap, creating a bubbling or glugging sound.',
          'Gurgling right after running a washing machine or draining a full sink indicates either a partial obstruction downstream or a plumbing vent restriction.',
        ],
      },
      {
        heading: '3. Persistent Sewer or Musty Odors',
        paragraphs: [
          'When grease, food particles, or organic buildup adhere to pipe walls, odor-producing bacteria build up along the pipe interior. Cleaning only the visible drain strainer rarely removes foul smells originating below the floor.',
          'In addition, recurring clogs can siphon water out of fixture P-traps, allowing sewer gas to enter bathrooms or utility rooms.',
        ],
      },
      {
        heading: '4. Recurring Clogs Shortly After Using a Plunger or Chemical Cleaner',
        paragraphs: [
          'If a plunger only restores normal flow for a few days before the fixture slows down again, the blockage was likely only punctured rather than fully cleared. Soft grease and soap buildup often seal right back over.',
          'Over-the-counter chemical drain openers can generate heat inside PVC traps or corrode older metal drain piping while failing to remove dense obstructions deeper in the line.',
        ],
        bullets: [
          'Avoid repeating caustic liquid drain cleaners in slow fixtures',
          'Note which fixtures back up together so you can share that detail on the phone',
          'Schedule a mechanical drain cleaning or camera check when clogs return',
        ],
      },
    ],
    keyTakeaways: [
      'Multiple slow fixtures usually point to a main branch or sewer line restriction rather than a single trap clog.',
      'Gurgling toilets and foul odors indicate trapped air or organic buildup deeper in the drain system.',
      'Avoid caustic chemical cleaners—mechanical clearing protects pipes and solves the root cause.',
    ],
    faqs: [
      {
        q: 'When should I stop running water during a drain backup?',
        a: 'Stop using fixtures immediately if water rises in a tub when you flush a toilet or run the washing machine, because wastewater has nowhere else to go until the blockage is cleared.',
      },
      {
        q: 'Can recurring drain clogs mean a broken sewer line?',
        a: 'Yes. If main drains clog repeatedly across multiple bathrooms, a sewer camera inspection can check whether tree roots, pipe bellies, or cracked joints are causing the blockage.',
      },
      {
        q: 'Who can inspect a recurring drain problem in Pearland?',
        a: 'Call Alternative Plumbing Solutions at (713) 501-1214 (Monday–Saturday, 7 AM–7 PM) to describe which fixtures are backing up and arrange a service visit.',
      },
    ],
    relatedServiceSlugs: [
      'drain-cleaning',
      'sewer-line-inspection',
      'plumbing-repair',
    ],
    relatedArticleSlugs: [
      'how-sewer-camera-inspections-work',
      'common-causes-of-hidden-water-leaks',
    ],
  },
  {
    slug: 'why-water-heater-stops-producing-hot-water',
    title: 'Why Does My Water Heater Stop Producing Hot Water?',
    metaTitle: 'Why Water Heater Stops Heating Water | Alternative Plumbing Solutions',
    metaDescription:
      'Explore common reasons a gas, electric, or tankless water heater stops heating water—from pilot and thermostat issues to sediment buildup.',
    targetKeyword: 'Water heater not heating',
    category: 'Water Heaters',
    readTime: '6 min read',
    publishedDate: '2026-11-12',
    updatedDate: '2026-11-12',
    image: getServiceImage('water-heater-repair-and-installation'),
    excerpt:
      'Losing hot water suddenly points to distinct culprits depending on whether your home uses a gas tank, electric tank, or tankless water heater.',
    intro: [
      'Waking up to a cold shower is one of the most disruptive household plumbing issues. Fortunately, a water heater that stops producing hot water does not automatically mean the entire tank needs replacement.',
      'Understanding the most common causes—separated by gas, electric, and tankless systems—helps you check basic homeowner shutoffs safely before calling a plumber.',
    ],
    sections: [
      {
        heading: '1. Gas Water Heater Pilot Light or Thermocouple Faults',
        paragraphs: [
          'Traditional gas tank water heaters rely on a standing pilot flame (or electronic igniter on newer models) and a safety sensor called a thermocouple or flame sensor. If drafts extinguish the pilot or a failing sensor stops reading heat, the gas control valve shuts off fuel to the burner.',
          'Sometimes a tripped thermal switch on a sealed combustion chamber can also interrupt operation if airflow around the heater base is blocked by dust or storage items.',
        ],
        bullets: [
          'Verify the gas shutoff valve handle is aligned parallel with the pipe',
          'Check around the burner compartment—never ignite if you smell natural gas',
          'Leave 18 inches of clear airflow around floor-mounted gas appliances',
        ],
      },
      {
        heading: '2. Tripped Breakers, Heating Elements, or High-Limit Reset (Electric Tanks)',
        paragraphs: [
          'Electric tank water heaters use upper and lower resistive heating elements controlled by upper and lower thermostats. If the upper element burns out, you get no hot water at all; if only the lower element fails, hot water turns lukewarm after just a few minutes.',
          'A tripped double-pole breaker in the electrical panel or a tripped high-limit safety button (ECO reset) inside the upper thermostat panel can also cut power instantly.',
        ],
      },
      {
        heading: '3. Heavy Mineral Sediment Accumulation Inside the Tank',
        paragraphs: [
          'Hard water minerals settle at the bottom of storage tanks over time. In gas units, a thick crust insulates the burner heat from the water above, causing popping or rumbling noises and forcing the unit to overheat.',
          'In electric heaters, accumulated sediment can bury and burn out the lower heating element prematurely. Flushing the tank helps preserve heating capacity when caught before tank corrosion sets in.',
        ],
      },
      {
        heading: '4. Broken Dip Tube or Tankless Error Lockout',
        paragraphs: [
          'Every standard tank has a cold-water dip tube that directs incoming cold supply water to the bottom of the tank. If that plastic tube cracks near the top, cold supply mixes straight into your hot outlet pipe, leaving water lukewarm almost immediately.',
          'For tankless units, mineral scale inside the heat exchanger, clogged inlet water screens, or ignition errors can shut down heating on demand until descaled and serviced.',
        ],
        bullets: [
          'Check for error codes flashing on tankless digital displays before resetting',
          'Inspect around the tank drain pan and cold shutoff valve for dripping moisture',
          'Know your tank age (typically 8–12 years for conventional storage tanks)',
        ],
      },
    ],
    keyTakeaways: [
      'A failing lower heating element or cracked dip tube causes lukewarm water that runs cold fast, not just total cold water.',
      'Sediment buildup reduces heating efficiency and causes popping sounds at the tank base.',
      'Repair vs replacement depends on tank age, valve/thermostat health, and whether the inner tank itself is leaking.',
    ],
    faqs: [
      {
        q: 'Can a leaking water heater tank be repaired?',
        a: 'Loose fittings, valves, and drain valves on the outside of a unit can often be repaired, whereas rust or water seeping from the steel inner storage tank wall usually requires unit replacement.',
      },
      {
        q: 'What should I check if I smell gas near my water heater?',
        a: 'Do not light anything or operate switches. Leave the immediate area, contact your gas utility or emergency line if you detect strong odor, and have qualified gas piping technicians inspect connections.',
      },
      {
        q: 'Who repairs and installs water heaters in Pearland, TX?',
        a: 'Call Alternative Plumbing Solutions at (713) 501-1214 (Monday–Saturday, 7 AM–7 PM) for tank and tankless diagnostics, repair, and replacement.',
      },
    ],
    relatedServiceSlugs: [
      'water-heater-repair-and-installation',
      'gas-piping',
      'leak-detection',
    ],
    relatedArticleSlugs: [
      'common-causes-of-hidden-water-leaks',
      'when-to-consider-whole-home-repiping',
    ],
  },
  {
    slug: 'how-sewer-camera-inspections-work',
    title: 'How Sewer Camera Inspections Work',
    metaTitle: 'How Sewer Camera Inspections Work | Alternative Plumbing Solutions',
    metaDescription:
      'See how waterproof sewer camera inspections diagnose tree roots, cracked clay or cast iron lines, pipe bellies, and grease buildup accurately.',
    targetKeyword: 'Sewer camera inspection',
    category: 'Drains & Sewer',
    readTime: '5 min read',
    publishedDate: '2026-11-12',
    updatedDate: '2026-11-12',
    image: getServiceImage('sewer-line-inspection'),
    excerpt:
      'Instead of guessing why a main sewer line backs up—or digging up your yard blindly—a sewer camera shows the exact condition and depth of your pipe.',
    intro: [
      'Because residential and commercial sewer lines run underground beneath yards, driveways, and concrete slabs, diagnosing chronic drain trouble without seeing inside the pipe leaves property owners guessing.',
      'A sewer camera inspection sends a specialized waterproof video head attached to a flexible push rod down your cleanout so the plumber and homeowner can see pipe conditions in real time.',
    ],
    sections: [
      {
        heading: '1. Accessing the Line Through Cleanouts',
        paragraphs: [
          'Most inspections begin at the exterior main sewer cleanout cap located near the foundation wall or in the yard. If no accessible cleanout exists, entry may sometimes be performed through a roof vent or pulled toilet flange depending on layout.',
          'Once water standing in a backed-up line is cleared enough to restore visibility, the camera advances toward the city sewer tap or septic tank.',
        ],
      },
      {
        heading: '2. Common Sewer Issues Visible on Camera',
        paragraphs: [
          'Video footage separates simple soft blockages from structural pipe defects that drain snaking alone will never permanently fix.',
        ],
        bullets: [
          'Tree root intrusion growing through tiny hub joints in older clay or cast iron pipe',
          'Pipe bellies (sunken sections) where expansive clay soil shifting holds standing water and solids',
          'Cracked, collapsed, or offset joints where two pipe sections no longer align cleanly',
          'Heavy kitchen grease buildup or foreign objects lodged at pipe transitions',
        ],
      },
      {
        heading: '3. Pinpointing Exact Depth and Location Above Ground',
        paragraphs: [
          'Modern sewer camera heads contain a radio sonde transmitter. When the camera reaches a crack, root mass, or collapsed fitting, an electronic locator wand above ground traces the exact signal spot and depth under grass or concrete.',
          'Targeted location data allows any needed spot repair to focus solely on the damaged section rather than trenching an entire lawn unnecessarily.',
        ],
      },
      {
        heading: '4. When a Camera Inspection Is Most Valuable',
        paragraphs: [
          'Homeowners frequently request video sewer inspections before purchasing a home built more than 20 years ago, when experiencing backups across multiple drains, or after noticing unexplained green patches over a sewer path.',
        ],
      },
    ],
    keyTakeaways: [
      'Sewer cameras eliminate guesswork by visually showing roots, grease, cracks, and pipe sags on screen.',
      'Sonde locators mark the exact underground spot and depth of defects before excavation.',
      'Pre-purchase camera inspections on older homes can uncover costly sewer defects before closing.',
    ],
    faqs: [
      {
        q: 'Can a sewer camera inspection work if my drain is currently backed up?',
        a: 'Murky standing wastewater blocks the camera lens, so clearing standing blockage enough to restore flow is often necessary before inspecting the entire line clearly.',
      },
      {
        q: 'Should older homes get a sewer inspection before buying?',
        a: 'Yes. Homes older than 20 years or properties with large mature yard trees benefit significantly from checking main sewer pipe condition prior to closing.',
      },
      {
        q: 'How do I book a sewer line camera inspection in Pearland or Friendswood?',
        a: 'Call Alternative Plumbing Solutions at (713) 501-1214 (Monday–Saturday, 7 AM–7 PM) to discuss symptoms and arrange an inspection.',
      },
    ],
    relatedServiceSlugs: [
      'sewer-line-inspection',
      'drain-cleaning',
      'pipe-repair-and-repiping',
    ],
    relatedArticleSlugs: [
      'signs-you-need-professional-drain-cleaning',
      'when-to-consider-whole-home-repiping',
    ],
  },
  {
    slug: 'common-causes-of-hidden-water-leaks',
    title: 'Common Causes of Hidden Water Leaks',
    metaTitle: 'Common Causes of Hidden Water Leaks | Alternative Plumbing Solutions',
    metaDescription:
      'Discover how hidden pipe leaks start behind drywall, inside ceilings, and under concrete slabs—plus simple water-meter checks every homeowner can run.',
    targetKeyword: 'Hidden water leaks',
    category: 'Leaks & Piping',
    readTime: '5 min read',
    publishedDate: '2026-11-12',
    updatedDate: '2026-11-12',
    image: getServiceImage('leak-detection'),
    excerpt:
      'Silent water leaks waste thousands of gallons and damage subfloors long before puddles appear. Learn where hidden leaks originate and how to spot them.',
    intro: [
      'Not every plumbing leak announces itself with a visible drip beneath a sink. Supply lines hidden inside exterior walls, attic spaces, and underneath concrete slab foundations can seep quietly for weeks before staining drywall or warping flooring.',
      'Recognizing early clues of hidden water leaks—and knowing how to check your residential water meter—can prevent extensive structural and mold remediation.',
    ],
    sections: [
      {
        heading: '1. Warning Signs of a Hidden Water Leak',
        paragraphs: [
          'Even when water stays out of sight, escaping pressurized water leaves indirect physical clues throughout a home:',
        ],
        bullets: [
          'A sudden jump in your monthly water bill without changes in irrigation or household usage',
          'The sound of faint running water behind walls when every faucet and appliance is turned off',
          'Warm spots on tile or wood flooring indicating a hot-water slab leak beneath concrete',
          'Musty odors, bubbling paint, or unexplained damp baseboards along lower walls',
        ],
      },
      {
        heading: '2. Why Hidden Pipe Leaks Develop Over Time',
        paragraphs: [
          'In Gulf Coast Texas homes, several factors accelerate wear on concealed water piping:',
        ],
        bullets: [
          'Foundation soil expansion and contraction placing stress on under-slab copper tubing',
          'Pinhole corrosion from local water chemistry thinning copper walls internally over decades',
          'Hard freeze events splitting poorly insulated PEX, copper, or PVC risers in attics and walls',
          'High static water pressure stressing braided supply hoses, angle stops, and solder joints',
        ],
      },
      {
        heading: '3. Quick Homeowner Water Meter Test',
        paragraphs: [
          'Before assuming a high bill comes from an outdoor hose or running toilet flapper, perform a 15-minute meter isolation check: turn off every faucet, ice maker, sprinkler zone, and appliance inside and outside your home.',
          'Open the street-side water meter box cover and look at the small low-flow leak indicator triangle or dial. If that dial spins while every fixture is shut off, pressurized water is escaping somewhere on your property side of the meter.',
        ],
      },
    ],
    keyTakeaways: [
      'A spinning water meter triangle while all fixtures are turned off confirms water loss on your property.',
      'Warm floor patches, rising water bills, and continuous hissing behind walls point toward slab or wall leaks.',
      'Finding a hidden leak before opening walls prevents guesswork demolition.',
    ],
    faqs: [
      {
        q: 'Could a silent running toilet cause a high water bill instead of a pipe leak?',
        a: 'Yes! Before assuming you have a slab leak, turn off toilet shutoff valves behind each tank or perform a food-coloring test in toilet tanks to see if worn flappers are silently leaking into bowls.',
      },
      {
        q: 'What should I do immediately if I discover an active leak in a wall or ceiling?',
        a: 'Turn off your main water shutoff valve to limit damage, protect belongings below wet drywall, and call Alternative Plumbing Solutions at (713) 501-1214 during business hours (Mon–Sat 7 AM–7 PM).',
      },
    ],
    relatedServiceSlugs: [
      'leak-detection',
      'pipe-repair-and-repiping',
      'plumbing-repair',
    ],
    relatedArticleSlugs: [
      'when-to-consider-whole-home-repiping',
      'why-water-heater-stops-producing-hot-water',
    ],
  },
  {
    slug: 'when-to-consider-whole-home-repiping',
    title: 'When Should You Consider Whole-Home Repiping?',
    metaTitle: 'When to Consider Whole-Home Repiping | Alternative Plumbing Solutions',
    metaDescription:
      'Learn how to decide between targeted pipe repair and whole-home repiping when dealing with corroded galvanized steel, polybutylene, or recurring leaks.',
    targetKeyword: 'Whole house repiping',
    category: 'Leaks & Piping',
    readTime: '6 min read',
    publishedDate: '2026-11-12',
    updatedDate: '2026-11-12',
    image: getServiceImage('pipe-repair-and-repiping'),
    excerpt:
      'Fixing a single isolated leak makes sense when piping is healthy, but recurring leaks across aging lines often mean spot repairs cost more over time.',
    intro: [
      'When a pinhole water leak appears behind a bathroom wall or beneath a slab, homeowners naturally want to know whether patching that single section is enough or if older supply plumbing across the house is reaching the end of its service life.',
      'Evaluating pipe material, leak frequency, water pressure, and corrosion signs helps you make a practical long-term decision.',
    ],
    sections: [
      {
        heading: '1. Pipe Materials That Commonly Need Replacement',
        paragraphs: [
          'Pipe lifespan depends heavily on what was installed when your home was built:',
        ],
        bullets: [
          'Galvanized steel pipes: Installed heavily before the 1970s, they rust internally from the inside out—choking down water flow and turning first water rusty.',
          'Polybutylene gray plastic piping: Used roughly from the late 1970s to mid-1990s, susceptible to internal flaking and brittle sudden splits caused by water oxidants.',
          'Severely pitted under-slab copper: When one pinhole is followed quickly by two more in nearby rooms, thinning wall thickness throughout the manifold is likely.',
        ],
      },
      {
        heading: '2. Signs Repiping Makes More Sense Than Another Patch',
        paragraphs: [
          'Consider a whole-home repipe evaluation if multiple symptoms happen together rather than as a single isolated freeze event:',
        ],
        bullets: [
          'Recurring slab or wall leaks occurring every few months in different areas',
          'Noticeable drop in water pressure whenever two showers or faucets run simultaneously',
          'Discolored, rusty, or metallic-tasting water after fixtures sit unused overnight',
          'Visible green/white oxidation crust or active weeping across exposed shutoffs and fittings',
        ],
      },
      {
        heading: '3. Copper vs PEX Repiping Options',
        paragraphs: [
          'Modern residential repiping typically utilizes flexible cross-linked polyethylene (PEX) or Type L copper, chosen around budget, attic routing access, freeze resilience, and local code requirements.',
          'Because PEX bends smoothly around framing with fewer intermediate couplings, it often reduces drywall openings needed in occupied homes while offering stronger expansion tolerance during cold snaps.',
        ],
      },
    ],
    keyTakeaways: [
      'One isolated puncture caused by a nail or localized freeze usually warrants spot pipe repair.',
      'Repeated leaks across different rooms, rusty water, or legacy polybutylene/galvanized lines point toward whole-home repiping.',
      'Proper pipe sizing and new shutoff valves during repiping restore balanced water pressure throughout the home.',
    ],
    faqs: [
      {
        q: 'Does whole-home repiping replace drain pipes too, or only water supply lines?',
        a: 'Standard water repiping focuses on hot and cold pressurized supply lines, though compromised cast-iron or PVC drain piping can also be evaluated separately if backups occur.',
      },
      {
        q: 'How can I discuss repair vs repiping options for my home?',
        a: 'Call Alternative Plumbing Solutions at (713) 501-1214 (Monday–Saturday, 7 AM–7 PM) to describe your home age and symptoms and arrange an evaluation.',
      },
    ],
    relatedServiceSlugs: [
      'pipe-repair-and-repiping',
      'leak-detection',
      'fixture-installation',
    ],
    relatedArticleSlugs: [
      'common-causes-of-hidden-water-leaks',
      'how-sewer-camera-inspections-work',
    ],
  },
];

export function getArticleBySlug(slug: string): PlumbingArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticlesForService(serviceSlug: string): PlumbingArticle[] {
  return articles.filter((a) => a.relatedServiceSlugs.includes(serviceSlug));
}
