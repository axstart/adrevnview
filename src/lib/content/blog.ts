export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "geo-vs-seo-2026",
    title: "GEO vs SEO: What Long Island Brands Need in 2026",
    excerpt:
      "Search is changing fast. Here's how Generative Engine Optimization complements traditional SEO so AI assistants can cite your business accurately.",
    category: "GEO",
    date: "2026-06-12",
    readTime: "6 min read",
    seoTitle: "GEO vs SEO for Long Island Brands | Adrevnview Blog",
    seoDescription:
      "Learn how Generative Engine Optimization (GEO) works alongside SEO to help Long Island and New York brands get discovered in Google and AI assistants.",
    body: [
      "## What is the difference between GEO and SEO?",
      "Traditional SEO still matters — rankings, backlinks, and technical health remain foundations for organic growth. But AI assistants now answer buyer questions before users ever click a result.",
      "## What is Generative Engine Optimization (GEO)?",
      "GEO (Generative Engine Optimization) structures your content, schema, and llms.txt so models like ChatGPT, Perplexity, and Gemini can extract accurate facts about your services, location, and differentiators.",
      "## What do Long Island brands need in 2026?",
      "For Long Island service businesses and B2B brands, the winning playbook combines both: strong on-page SEO for Google, plus extractable summaries, FAQ schema, and clear entity signals for AI citation.",
    ],
  },
  {
    slug: "conversion-focused-web-design",
    title: "5 Conversion Patterns We Use on Every Homepage",
    excerpt:
      "Premium design should drive pipeline, not vanity metrics. These layout patterns consistently lift consultation requests for B2B sites.",
    category: "Web Design",
    date: "2026-05-28",
    readTime: "5 min read",
    seoTitle: "Conversion-Focused Web Design Patterns | Adrevnview Blog",
    seoDescription:
      "Five homepage conversion patterns Adrevnview uses on B2B and enterprise websites to turn visitors into qualified leads.",
    body: [
      "## What should the homepage hero say?",
      "Hero clarity beats cleverness: one headline, one audience, one primary CTA above the fold.",
      "## Where should social proof go?",
      "Social proof near the decision point — logos, ratings, and case study links placed where hesitation happens.",
      "## How should service cards be written?",
      "Service cards that speak outcomes, not deliverables. Buyers care about pipeline, revenue, and risk reduction.",
      "## Why include an FAQ on the homepage?",
      "FAQ sections structured for humans and machines — they reduce sales friction and feed GEO-ready extractable answers.",
      "## How do visitors contact you from every page?",
      "Persistent contact paths: header phone, sticky mobile CTA, and a low-friction quote form on every key page.",
    ],
  },
  {
    slug: "shopify-speed-checklist",
    title: "Shopify Speed Checklist for eCommerce Brands",
    excerpt:
      "Slow stores lose carts. Use this technical checklist before your next campaign push.",
    category: "eCommerce",
    date: "2026-05-10",
    readTime: "4 min read",
    seoTitle: "Shopify Performance Checklist | Adrevnview Blog",
    seoDescription:
      "A practical Shopify performance checklist — image optimization, app audits, and theme hygiene for faster storefronts.",
    body: [
      "## Why is my Shopify store slow?",
      "Audit third-party apps monthly. Unused scripts are the most common cause of mobile slowdowns on Shopify stores.",
      "## How should Shopify images be served?",
      "Serve hero and collection images in modern formats with explicit dimensions to prevent layout shift.",
      "## Do custom fonts slow the first screen?",
      "Limit custom fonts to two weights and preload only what's needed for the first screen.",
      "## How do collections avoid thin duplicate pages?",
      "Use collection-level metadata and internal links so Google understands category intent without duplicate thin pages.",
    ],
  },
  {
    slug: "local-seo-long-island",
    title: "Local SEO Playbook for Long Island Businesses",
    excerpt:
      "From Garden City to Hicksville — how to rank in the NYC metro without competing on generic national keywords.",
    category: "SEO",
    date: "2026-04-22",
    readTime: "7 min read",
    seoTitle: "Local SEO for Long Island Businesses | Adrevnview Blog",
    seoDescription:
      "Local SEO strategies for Long Island businesses — Google Business Profile, location pages, reviews, and neighborhood keyword targeting.",
    body: [
      "## Do Long Island businesses need town-specific pages?",
      "Build location-specific landing pages when you serve multiple towns — each page should have unique copy, testimonials, and contact details.",
      "## What is NAP consistency?",
      "Align NAP (name, address, phone) across your website, Google Business Profile, and major directories.",
      "## How do reviews affect the local pack?",
      "Review velocity matters for local pack rankings. NFC review cards and post-service email flows help sustainable growth.",
      "## What local content should restaurants and shops publish?",
      "Publish content that answers hyper-local questions: service area pages, commute-friendly scheduling, and community involvement. Printed menus and storefront signage should match the same name, address, and offers as the website.",
    ],
  },
];

export const BLOG_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p])) as Record<string, BlogPost>;

export function getBlogPath(slug: string): string {
  return `/blog/${slug}`;
}
