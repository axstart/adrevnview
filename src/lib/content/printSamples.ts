export type PrintSampleCategory = "visiting-cards" | "menus" | "letterheads" | "brochures-flyers" | "banners";

export type PrintSample = {
  id: string;
  title: string;
  category: PrintSampleCategory;
  categoryLabel: string;
  slugs: string[];
  image: string;
  alt: string;
  finish: string;
};

/** Original fictional mockups — not client work, no real-world brands. */
export const PRINT_SAMPLES: PrintSample[] = [
  {
    id: "arden-vale-cards",
    title: "Arden Vale visiting cards",
    category: "visiting-cards",
    categoryLabel: "Visiting cards",
    slugs: ["printing-services", "business-card-printing"],
    image: "/print-samples/visiting-card-arden-vale.webp",
    alt: "Original sample visiting cards for fictional studio Arden Vale on cream uncoated stock",
    finish: "Uncoated cream stock",
  },
  {
    id: "nori-lane-cards",
    title: "Nori Lane foil visiting cards",
    category: "visiting-cards",
    categoryLabel: "Visiting cards",
    slugs: ["printing-services", "business-card-printing"],
    image: "/print-samples/visiting-card-nori-lane.webp",
    alt: "Original sample navy visiting cards with copper foil for fictional brand Nori Lane Interiors",
    finish: "Navy stock, copper foil",
  },
  {
    id: "mira-sol-menu",
    title: "Mira & Sol dine-in menu",
    category: "menus",
    categoryLabel: "Menus",
    slugs: ["printing-services", "restaurant-menu-printing"],
    image: "/print-samples/menu-mira-and-sol.webp",
    alt: "Original sample restaurant menu for fictional kitchen Mira and Sol on textured cream card",
    finish: "Heavy textured card",
  },
  {
    id: "brass-spoon-menu",
    title: "Brass Spoon takeout menu",
    category: "menus",
    categoryLabel: "Menus",
    slugs: ["printing-services", "restaurant-menu-printing"],
    image: "/print-samples/menu-brass-spoon.webp",
    alt: "Original sample laminated cafe menu for fictional Brass Spoon Cafe",
    finish: "Laminated takeout card",
  },
  {
    id: "cedarline-letterhead",
    title: "Cedarline letterhead suite",
    category: "letterheads",
    categoryLabel: "Letterheads",
    slugs: ["printing-services", "letterhead-printing"],
    image: "/print-samples/letterhead-cedarline.webp",
    alt: "Original sample letterhead, envelope, and compliment slip for fictional Cedarline Advisory",
    finish: "Cotton stationery set",
  },
  {
    id: "field-form-brochure",
    title: "Field & Form brochure",
    category: "brochures-flyers",
    categoryLabel: "Brochures & flyers",
    slugs: ["printing-services", "brochure-and-flyer-printing"],
    image: "/print-samples/brochure-field-and-form.webp",
    alt: "Original sample tri-fold brochure for fictional studio Field and Form",
    finish: "Tri-fold brochure",
  },
  {
    id: "oak-ember-flyer",
    title: "Oak & Ember market flyer",
    category: "brochures-flyers",
    categoryLabel: "Brochures & flyers",
    slugs: ["printing-services", "brochure-and-flyer-printing"],
    image: "/print-samples/flyer-oak-and-ember.webp",
    alt: "Original sample event flyer for fictional Oak and Ember Evening Market",
    finish: "Uncoated A5 flyer",
  },
  {
    id: "lumen-market-banner",
    title: "Lumen Market panaflex banner",
    category: "banners",
    categoryLabel: "Outdoor banners",
    slugs: ["printing-services", "panaflex-and-banner-advertising"],
    image: "/print-samples/banner-lumen-market.webp",
    alt: "Original sample shop-front panaflex banner for fictional grocer Lumen Market",
    finish: "Outdoor flex / panaflex",
  },
];

export const PRINT_SAMPLE_FILTERS: { id: "all" | PrintSampleCategory; label: string }[] = [
  { id: "all", label: "All samples" },
  { id: "visiting-cards", label: "Visiting cards" },
  { id: "menus", label: "Menus" },
  { id: "letterheads", label: "Letterheads" },
  { id: "brochures-flyers", label: "Brochures & flyers" },
  { id: "banners", label: "Outdoor banners" },
];

export function samplesForService(slug: string): PrintSample[] {
  return PRINT_SAMPLES.filter((sample) => sample.slugs.includes(slug));
}

export function cardImageForService(slug: string): string | undefined {
  return samplesForService(slug)[0]?.image;
}
