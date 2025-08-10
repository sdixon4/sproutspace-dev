// src/data/plantsData.ts

export interface Plant {
  id: number;
  name: string;
  aliases: string[];
  description: string;
  care: {
    light: string;
    water: string;
    soil: string;
  };
  image: string;
}

export const plantsDatabase: Plant[] = [
  {
    id: 1,
    name: "Rose",
    aliases: ["rose", "rosa", "garden rose"],
    description: "A woody perennial flowering plant known for its fragrant blooms.",
    care: { light: "Full sun, 6+ hours/day", water: "Water deeply twice per week", soil: "Well-draining, loamy soil" },
    image: "/images/plants/rose.jpeg"
  },
  {
    id: 2,
    name: "Sunflower",
    aliases: ["sunflower", "helianthus annuus"],
    description: "Bright yellow flowers that track the sun across the sky.",
    care: { light: "Full sun", water: "Keep soil moist but not waterlogged", soil: "Loose, well-draining soil" },
    image: "/images/plants/sunflower.jpeg"
  },
  {
    id: 3,
    name: "Lavender",
    aliases: ["lavender", "lavandula"],
    description: "Fragrant herb with purple flowers, used for calming scent.",
    care: { light: "Full sun", water: "Water sparingly; drought tolerant", soil: "Sandy, well-draining soil" },
    image: "/images/plants/lavender.jpeg"
  },
  {
    id: 4,
    name: "Tomato Plant",
    aliases: ["tomato", "solanum lycopersicum"],
    description: "Common vegetable plant producing edible fruit.",
    care: { light: "Full sun", water: "Water regularly; keep soil moist", soil: "Fertile, well-drained soil" },
    image: "/images/plants/tomato.jpeg"
  },
  {
    id: 5,
    name: "Basil",
    aliases: ["basil", "ocimum basilicum"],
    description: "Aromatic herb used in cooking.",
    care: { light: "Full sun to partial shade", water: "Water regularly but avoid waterlogging", soil: "Well-draining soil" },
    image: "/images/plants/basil.jpeg"
  },
  {
    id: 6,
    name: "Cactus",
    aliases: ["cactus", "succulent"],
    description: "Drought-tolerant plant with thick stems.",
    care: { light: "Full sun", water: "Water sparingly; let soil dry between waterings", soil: "Sandy, well-drained soil" },
    image: "/images/plants/cactus.jpeg"
  },
  {
    id: 7,
    name: "Orchid",
    aliases: ["orchid", "orchidaceae"],
    description: "Exotic flowering plant with diverse species.",
    care: { light: "Bright indirect light", water: "Water once a week", soil: "Orchid bark or mix" },
    image: "/images/plants/orchid.jpeg"
  },
  {
    id: 8,
    name: "Daisy",
    aliases: ["daisy", "bellis perennis"],
    description: "Simple flower with white petals and yellow center.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/daisy.jpeg"
  },
  {
    id: 9,
    name: "Fern",
    aliases: ["fern", "pteridophyte"],
    description: "Lush, green foliage plant that prefers shade.",
    care: { light: "Indirect light", water: "Keep soil moist", soil: "Rich, well-drained soil" },
    image: "/images/plants/fern.jpeg"
  },
  {
    id: 10,
    name: "Mint",
    aliases: ["mint", "mentha"],
    description: "Herb with fragrant leaves used in cooking and drinks.",
    care: { light: "Partial sun", water: "Water regularly", soil: "Moist, well-draining soil" },
    image: "/images/plants/mint.jpeg"
  },
  {
    id: 11,
    name: "Aloe Vera",
    aliases: ["aloe vera", "aloe"],
    description: "Succulent plant known for its soothing gel.",
    care: { light: "Bright indirect light", water: "Water every 3 weeks", soil: "Sandy soil" },
    image: "/images/plants/aloe-vera.jpeg"
  },
  {
    id: 12,
    name: "Peony",
    aliases: ["peony", "paeonia"],
    description: "Large flowering plant with fragrant blooms.",
    care: { light: "Full sun to partial shade", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/peony.jpeg"
  },
  {
    id: 13,
    name: "Chrysanthemum",
    aliases: ["chrysanthemum", "mum"],
    description: "Flowering plant popular in autumn gardens.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/chrysanthemum.jpeg"
  },
  {
    id: 14,
    name: "Hydrangea",
    aliases: ["hydrangea"],
    description: "Flowering shrub with large clusters of blooms.",
    care: { light: "Partial sun", water: "Water frequently", soil: "Moist, well-drained soil" },
    image: "/images/plants/hydrangea.jpeg"
  },
  {
    id: 15,
    name: "Jasmine",
    aliases: ["jasmine"],
    description: "Fragrant climbing plant with white flowers.",
    care: { light: "Full sun to partial shade", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/jasmine.jpeg"
  },
  {
    id: 16,
    name: "Lavender Cotton",
    aliases: ["lavender cotton", "santolina"],
    description: "Small shrub with gray foliage and yellow flowers.",
    care: { light: "Full sun", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/lavender-cotton.jpeg"
  },
  {
    id: 17,
    name: "Lemon Tree",
    aliases: ["lemon tree", "citrus limon"],
    description: "Fruit tree producing sour yellow lemons.",
    care: { light: "Full sun", water: "Water deeply once a week", soil: "Well-draining soil" },
    image: "/images/plants/lemon-tree.jpeg"
  },
  {
    id: 18,
    name: "Maple Tree",
    aliases: ["maple", "acer"],
    description: "Deciduous tree known for vibrant fall foliage.",
    care: { light: "Full sun to partial shade", water: "Water regularly", soil: "Moist, well-drained soil" },
    image: "/images/plants/maple-tree.jpeg"
  },
  {
    id: 19,
    name: "Marigold",
    aliases: ["marigold", "tagetes"],
    description: "Bright orange or yellow flowering plant.",
    care: { light: "Full sun", water: "Water moderately", soil: "Well-draining soil" },
    image: "/images/plants/marigold.jpeg"
  },
  {
    id: 20,
    name: "Orchid Cactus",
    aliases: ["orchid cactus", "epiphyllum"],
    description: "Cactus species with large, showy flowers.",
    care: { light: "Indirect light", water: "Water regularly", soil: "Well-draining soil" },
    image: "/images/plants/orchid-cactus.jpeg"
  },
  {
    id: 21,
    name: "Peach Tree",
    aliases: ["peach tree", "prunus persica"],
    description: "Fruit tree producing sweet peaches.",
    care: { light: "Full sun", water: "Water deeply once a week", soil: "Well-draining soil" },
    image: "/images/plants/peach-tree.jpeg"
  },
  {
    id: 22,
    name: "Petunia",
    aliases: ["petunia"],
    description: "Flowering plant with trumpet-shaped flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/petunia.jpeg"
  },
  {
    id: 23,
    name: "Pine Tree",
    aliases: ["pine", "pinus"],
    description: "Evergreen coniferous tree with needle-like leaves.",
    care: { light: "Full sun", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/pine-tree.jpeg"
  },
  {
    id: 24,
    name: "Poinsettia",
    aliases: ["poinsettia"],
    description: "Popular Christmas plant with red and green foliage.",
    care: { light: "Bright indirect light", water: "Water when dry", soil: "Well-drained soil" },
    image: "/images/plants/poinsettia.jpeg"
  },
  {
    id: 25,
    name: "Primrose",
    aliases: ["primrose"],
    description: "Early spring flowering plant with colorful blooms.",
    care: { light: "Partial sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/primrose.jpeg"
  },
  {
    id: 26,
    name: "Snapdragon",
    aliases: ["snapdragon"],
    description: "Flowering plant with tall spikes of colorful blooms.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/snapdragon.jpeg"
  },
  {
    id: 27,
    name: "Spider Plant",
    aliases: ["spider plant", "chlorophytum comosum"],
    description: "Popular indoor plant with arching green and white leaves.",
    care: { light: "Indirect light", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/spider-plant.jpeg"
  },
  {
    id: 28,
    name: "Tulip",
    aliases: ["tulip"],
    description: "Spring-blooming plant with brightly colored flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/tulip.jpeg"
  },
  {
    id: 29,
    name: "Venus Flytrap",
    aliases: ["venus flytrap", "dionaea muscipula"],
    description: "Carnivorous plant with hinged leaves that trap insects.",
    care: { light: "Full sun", water: "Keep soil moist", soil: "Acidic, nutrient-poor soil" },
    image: "/images/plants/venus-flytrap.jpeg"
  },
  {
    id: 30,
    name: "Water Lily",
    aliases: ["water lily", "nymphaea"],
    description: "Aquatic plant with floating leaves and beautiful flowers.",
    care: { light: "Full sun", water: "Keep in water", soil: "Aquatic soil" },
    image: "/images/plants/water-lily.jpeg"
  },
  {
    id: 31,
    name: "Zinnia",
    aliases: ["zinnia"],
    description: "Bright, daisy-like flowers popular in summer gardens.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/zinnia.jpeg"
  },
  {
    id: 32,
    name: "African Violet",
    aliases: ["african violet", "saintpaulia"],
    description: "Small indoor flowering plant with velvety leaves.",
    care: { light: "Indirect light", water: "Water from bottom", soil: "Light, well-drained soil" },
    image: "/images/plants/african-violet.jpeg"
  },
  {
    id: 33,
    name: "Begonia",
    aliases: ["begonia"],
    description: "Flowering plant with colorful leaves and blooms.",
    care: { light: "Indirect light", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/begonia.jpeg"
  },
  {
    id: 34,
    name: "Bluebell",
    aliases: ["bluebell"],
    description: "Spring-flowering plant with bell-shaped blue flowers.",
    care: { light: "Partial shade", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/bluebell.jpeg"
  },
  {
    id: 35,
    name: "Camellia",
    aliases: ["camellia"],
    description: "Evergreen shrub with large, showy flowers.",
    care: { light: "Partial shade", water: "Water regularly", soil: "Acidic, well-drained soil" },
    image: "/images/plants/camellia.jpeg"
  },
  {
    id: 36,
    name: "Carnation",
    aliases: ["carnation", "dianthus"],
    description: "Popular cut flower with spicy-scented blooms.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/carnation.jpeg"
  },
  {
    id: 37,
    name: "Daffodil",
    aliases: ["daffodil", "narcissus"],
    description: "Spring bulb with trumpet-shaped yellow flowers.",
    care: { light: "Full sun to partial shade", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/daffodil.jpeg"
  },
  {
    id: 38,
    name: "Fuchsia",
    aliases: ["fuchsia"],
    description: "Shrub with colorful, drooping flowers.",
    care: { light: "Partial shade", water: "Keep soil moist", soil: "Well-drained soil" },
    image: "/images/plants/fuchsia.jpeg"
  },
  {
    id: 39,
    name: "Geranium",
    aliases: ["geranium"],
    description: "Flowering plant popular in gardens and pots.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/geranium.jpeg"
  },
  {
    id: 40,
    name: "Hibiscus",
    aliases: ["hibiscus"],
    description: "Tropical shrub with large, trumpet-shaped flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/hibiscus.jpeg"
  },
  {
    id: 41,
    name: "Ivy",
    aliases: ["ivy", "hedera"],
    description: "Climbing plant with evergreen leaves.",
    care: { light: "Partial shade", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/ivy.jpeg"
  },
  {
    id: 42,
    name: "Jade Plant",
    aliases: ["jade plant", "crassula ovata"],
    description: "Succulent with thick, shiny leaves.",
    care: { light: "Bright light", water: "Water sparingly", soil: "Well-drained soil" },
    image: "/images/plants/jade-plant.jpeg"
  },
  {
    id: 43,
    name: "Lilac",
    aliases: ["lilac", "syringa"],
    description: "Deciduous shrub with fragrant purple flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/lilac.jpeg"
  },
  {
    id: 44,
    name: "Magnolia",
    aliases: ["magnolia"],
    description: "Large flowering tree or shrub with fragrant blooms.",
    care: { light: "Full sun to partial shade", water: "Water regularly", soil: "Moist, well-drained soil" },
    image: "/images/plants/magnolia.jpeg"
  },
  {
    id: 45,
    name: "Maranta",
    aliases: ["maranta", "prayer plant"],
    description: "Indoor plant with striking patterned leaves.",
    care: { light: "Indirect light", water: "Keep soil moist", soil: "Well-drained soil" },
    image: "/images/plants/maranta.jpeg"
  },
  {
    id: 46,
    name: "Nasturtium",
    aliases: ["nasturtium"],
    description: "Edible flowering plant with peppery leaves.",
    care: { light: "Full sun", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/nasturtium.jpeg"
  },
  {
    id: 47,
    name: "Oleander",
    aliases: ["oleander"],
    description: "Toxic flowering shrub with showy flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/oleander.jpeg"
  },
  {
    id: 48,
    name: "Peperomia",
    aliases: ["peperomia"],
    description: "Small houseplant with thick, waxy leaves.",
    care: { light: "Indirect light", water: "Water moderately", soil: "Well-drained soil" },
    image: "/images/plants/peperomia.jpeg"
  },
  {
    id: 49,
    name: "Petunia",
    aliases: ["petunia"],
    description: "Flowering annual with bright, trumpet-shaped flowers.",
    care: { light: "Full sun", water: "Water regularly", soil: "Well-drained soil" },
    image: "/images/plants/petunia.jpeg"
  },
  {
    id: 50,
    name: "Zebra Plant",
    aliases: ["zebra plant", "aphelandra squarrosa"],
    description: "Tropical houseplant with striking striped leaves.",
    care: { light: "Bright indirect light", water: "Keep soil moist", soil: "Well-drained soil" },
    image: "/images/plants/zebra-plant.jpeg"
  },
];
