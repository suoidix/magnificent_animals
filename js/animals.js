const animalsArr = [

    { name: 'American bison', class: 'mammal', herbivore: true, region: 'North America', youTube: "L4eOhuLDfeU", desc: 'Bison are the iconic image of the Great Plains and the Old West. They are massive, shaggy beasts and the heaviest land animals in North America. Despite their hefty size, bison are quick on their feet. When the need arises they can run at speeds up to 40 miles (65 km) an hour. Their curved, sharp horns can grow to be 2 feet (61 cm) long. Once roaming in vast herds, the species nearly became extinct by a combination of commercial hunting and slaughter in the 19th century.' },

    { name: 'Andean bear', class: 'mammal', herbivore: false, region: 'South America', youTube: "rwIwRH6r8KY", desc: 'The Andean bear, or spectacled bear, is the only bear native to South America. It is a clever, arboreal animal that builds platforms and nests in trees for eating and sleeping. Whitish or cream spectacles encircle these bears\' eyes. The light color variably extends down to the animals\' throats and chests, giving each individual a unique set of markings. Andean bears\' thick coats are usually either black or brown.' },

    { name: 'Andean condor', class: 'bird', herbivore: false, region: 'South America', youTube: "aeoIg0rvXPg", desc: 'The Andean condor is a South American bird in the New World vulture family Cathartidae and is the only member of the genus Vultur. Found in the Andes mountains and adjacent Pacific coasts of western South America, the Andean condor is the largest flying bird in the world by combined measurement of weight and wingspan. It has a maximum wingspan of 3.3 m (10 ft 10 in) and weight of 15 kg (33 lb).' },

    { name: 'giraffe', class: 'mammal', herbivore: true, region: 'Africa', youTube: "P_ckAbOr0r4", desc: 'The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Female giraffes are up to 14 feet tall and weigh up to 1,500 pounds. Meanwhile, males are up to 18 feet tall and can weigh 3,000 pounds. At this height, a giraffe can look into a second-story window. The giraffe\'s chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, and its spotted coat patterns. '},

    { name: 'green anaconda', class: 'reptile', herbivore: false, region: 'South America', youTube: "gP0xoRrf8i0", desc: 'The green anaconda is the largest snake in the world in weight and length. It can reach a length of 30 feet (9 m) and weigh up to 550 pounds (227 kg). The green anaconda is a member of a family of snakes called constrictors. Constrictors are not venomous snakes. They don\'t kill prey by delivering venom through a bite. Instead, constrictors wrap their bodies around their prey and squeeze until it stops breathing.'},

    { name: 'kangaroo', class: 'mammal', herbivore: true, region: 'Australia', youTube: "8BbZTCdB2X4", desc: 'The kangaroo is a marsupial from the family Macropodidae (macropods, meaning "large foot"). Kangaroos are indigenous to Australia and New Guinea. Kangaroos possess powerful hind legs, a long, strong tail, and small front legs. Kangaroos belong to the animal family Macropus, literally "big foot." Thanks to their large feet, kangaroos can leap some 30 feet (9 meters) in a single bound, and travel more than 30 miles (48 kilometers) per hour.'},

    { name: 'King cobra', class: 'reptile', herbivore: false, region: 'Asia', youTube: "7ZGx8iQbj4A", desc: 'The king cobra is a venomous snake species  endemic to jungles in Southern and Southeast Asia. The king cobra is the world\'s longest venomous snake, with an average length of 3.18 to 4 m (10.4 to 13.1 ft). Its skin colour varies across the habitats, from black with white stripes to unbroken brownish grey. It preys chiefly on other snakes, including its own species. Unlike other snakes, it rarely hunts other vertebrates, such as rodents and lizards.' },

    { name: 'Kodiak bear', class: 'mammal', herbivore: false, region: 'North America', youTube: "9jq8AD8M5po", desc: 'he Kodiak bear, also known as the Kodiak brown bear, sometimes the Alaskan brown bear, inhabits the islands of the Kodiak Archipelago in southwest Alaska. It is the largest recognized subspecies or population of the brown bear, and one of the two largest bears alive today, the other being the polar bear. The Kodiak bear commonly reaches sizes of 300 to 600 kg (660 to 1,320 lb). When standing fully upright on its hind legs, a large male could reach a height of 3 m (9.8 ft).'},

    { name: 'Komodo dragon', class: 'reptile', herbivore: false, region: 'Indonesian islands', youTube: "C20t4OJDpVA", desc: 'The Komodo dragon (Varanus komodoensis), is a member of the monitor lizard family Varanidae that is endemic to the Indonesian islands of Komodo, Rinca, Flores, and Gili Motang. It is the largest extant species of lizard, growing to a maximum length of 3 metres (10 ft), and weighing up to approximately 70 kilograms (150 lb). Komodo dragons are apex predators, dominating the ecosystems in which they live. Komodo dragons hunt and ambush prey including invertebrates, birds, and mammals.' },

    { name: 'lion', class: 'mammal', herbivore: false, region: 'Africa', youTube: "OMkEVX23BdM", desc: 'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. Lions are at the top of the food chain, with no natural predators. The length of a female is typically between 4.6 and 5.7 feet, while the length of a male is between 5.6 and 8.3 feet. Female lions weigh 270 to 400 pounds, while males weigh 330 to 570 pounds.' },

    { name: 'moose', class: 'mammal', herbivore: true, region: 'North America', youTube: "683YLpinsi8", desc: 'The moose is a member of the New World deer subfamily and is the largest and heaviest extant species in the deer family. Most adult male moose have distinctive broad, palmate ("open-hand shaped") antlers. Moose typically inhabit boreal forests and temperate broadleaf and mixed forests of the Northern Hemisphere in temperate to subarctic climates. Males (or "bulls") normally weigh from 380 to 700 kg (838 to 1,543 lb) and females (or "cows") typically weigh 200 to 490 kg (441 to 1,080 lb).' },

    { name: 'ostrich', class: 'bird', herbivore: false, region: 'Africa', youTube: "OBRppKPXKuU", desc: 'Ostriches are large flightless birds native to Africa. They lay the largest eggs of any living land animal. With the ability to run at 70 km/h (43.5 mph), they are the fastest birds on land. They are farmed worldwide, particularly for their feathers, skin and meat. Ostriches are notable for being the heaviest living birds. An adult male may be 2.75 metres (about 9 feet) tall, with almost half of its height its neck, and weigh more than 150 kg (330 pounds); the female is somewhat smaller.' },

    { name: 'panda', class: 'mammal', herbivore: true, region: 'China', youTube: "dqT-UlYlg1s", desc: 'The giant panda (Ailuropoda melanoleuca), or simply the panda, is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet. Adults measure around 1.2 to 1.9 metres (3 feet 11 inches to 6 feet 3 inches) long, and 60 to 90 cm (24 to 35 in) tall at the shoulder. Males can weigh up to 160 kg (350 lb).' },

    { name: 'penguin', class: 'bird', herbivore: false, region: 'Antarctica', youTube: "r1_8rRDHtQ8", desc: 'Penguins are a group of aquatic flightless birds native to the extreme Southern Hemisphere. Penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea. The largest living species is the Emperor penguin: on average, adults are about 1.1 m (3 ft 7 in) tall and weigh 35 kg (77 lb).' },

    { name: 'quetzal', class: 'bird', herbivore: false, region: 'Central America', youTube: "F0ppCaEiU2U", desc: 'Quetzals are strikingly colored birds in the trogon family. They are found in forests, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while a single species, the eared quetzal, Euptilotis neoxenus, is found in Mexico and very locally in the southernmost United States. Quetzals are fairly large (all over 32 cm or 13 inches long), slightly bigger than other trogon species.' },

    { name: 'rhinoceros', class: 'mammal', herbivore: true, region: 'Africa', youTube: "R02QrS2aCDM", desc: 'Rhinoceroses are by far the largest of the perissodactyls, an order of hoofed mammals that also includes the horses and zebras. Rhinoceroses possess one or two horns made of ketatin, a fibrous protein found in hair. Modern rhinoceroses are large animals, with the white rhinoceros reaching a size of up to 4 metres (13 feet) long and nearly 2 metres (7 feet) high in the white rhinoceros. Adults of larger species weigh 3–5 tons. Rhinoceroses are noted for their thick hide, which forms platelike folds.' },

    { name: 'Siberian tiger', class: 'mammal', herbivore: false, region: 'Asia', youTube: "ifErUXPdw8Y", desc: 'The Siberian tiger is a population of the tiger subspecies Panthera tigris tigris native to the Russian Far East and Northeast China. It once ranged throughout the Korean Peninsula, northern China and eastern Mongolia. The tiger is reddish-rusty, or rusty-yellow in colour, with narrow black transverse stripes. he typical weight range of wild Siberian tigers was indicated as 180 to 306 kg (397 to 675 lb) for males and 100 to 167 kg (220 to 368 lb) for females.' },

    { name: 'zebra', class: 'mammal', herbivore: true, region: 'Africa', youTube: "U5uN4VtV__A", desc: 'Zebras are African equines with distinctive black-and-white striped coats. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a deterrent for biting flies. Zebras inhabit eastern and southern Africa and can be found in a variety of habitats such as savannahs, grasslands, woodlands, shrublands, and mountainous areas. Zebras may migrate to better watered areas and have been recorded travelling 500 km (310 mi).' },

    { name: 'elephant', class: 'mammal', herbivore: true, region: 'Africa, Asia', youTube: "Aw6GkiCvcWs", desc: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. The trunk is used for breathing and is prehensile, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia and are found in different habitats, including savannahs, forests, deserts, and marshes. They are herbivorous, and they stay near water when it is accessible.' },

    { name: 'armadillo', class: 'mammal', herbivore: false, region: 'North America', youTube: "hu-byUo3nP0", desc: 'Armadillos (meaning "little armored ones" in Spanish) are New World placental mammals in the order Cingulata. The Chlamyphoridae and Dasypodidae are the only surviving families in the order, which is part of the superorder Xenarthra, along with the anteaters and sloths. Nine extinct genera and 21 extant species of armadillo have been described, some of which are distinguished by the number of bands on their armor. All species are native to the Americas, where they inhabit a variety of different environments. Armadillos are characterized by a leathery armor shell and long, sharp claws for digging. They have short legs, but can move quite quickly.' },

    { name: 'porcupine', class: 'mammal', herbivore: true, region: 'North America', youTube: "jN3Swgh9dg8", desc: 'Porcupines are large rodents with coats of sharp spines, or quills, that protect them against predation. The term covers two families of animals: the Old World porcupines of family Hystricidae, and the New World porcupines of family Erethizontidae. The Old World porcupines (Hystricidae) live in Italy, Asia , and most of Africa. They are large, terrestrial, and strictly nocturnal. The New World porcupines (Erethizontidae) are indigenous to North America and northern South America. They live in wooded areas and can climb trees, where some species spend their entire lives.' },

    { name: 'capybara', class: 'mammal', herbivore: true, region: 'South America', youTube: "TCLRfSWi0lc", desc: 'The capybara or greater capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent and a member of the genus Hydrochoerus. Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests, and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually live in groups of 10-20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin. It is not considered a threatened species.' },

    { name: 'cheetah', class: 'mammal', herbivore: false, region: 'Africa', youTube: "N7e_lDDojas", desc: 'The cheetah (Acinonyx jubatus) is a large cat native to Africa, central Iran and India (reintroduced). It is the fastest land animal, capable of running at 80 to 98 km/h (50 to 61 mph); as such, it has evolved specialized adaptations for speed, including a light build, long thin legs and a long tail. Adults weigh between 21 and 72 kg (46 and 159 lb). Its head is small and rounded, with a short snout and black tear-like facial streaks. The coat is typically tawny to creamy white or pale buff and is mostly covered with evenly spaced, solid black spots. The cheetah is active during the day, with peaks during dawn and dusk. It feeds on small- to medium-sized prey, mostly weighing under 40 kg (88 lb), and prefers medium-sized ungulates such as impala, springbok and Thomson\'s gazelles.' },

    { name: 'turkey vulture', class: 'bird', herbivore: false, region: 'North and South America', youTube: "_yllQwGMbi0", desc: 'The turkey vulture (Cathartes aura) is the most widespread of the New World vultures, ranging from southern Canada to the southernmost tip of South America. It inhabits a variety of open and semi-open areas, including subtropical forests, shrublands, pastures, and deserts. The turkey vulture is a scavenger and feeds almost exclusively on carrion. It finds its food using its keen eyes and sense of smell. In flight, it uses thermals to move through the air, flapping its wings infrequently. It roosts in large community groups. Lacking a syrinx—the vocal organ of birds—its only vocalizations are grunts or low hisses. It nests in caves, hollow trees, or thickets.' },

];