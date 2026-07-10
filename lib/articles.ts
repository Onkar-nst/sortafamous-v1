export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string };

export type Article = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  author: string;
  readingTime: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "key-qualities-that-define-the-best-social-media-agency",
    tag: "Social Media",
    date: "Mar 2, 2026",
    title: "Key qualities that define the best social media agency",
    excerpt:
      "A great social partner does more than post. It builds strategy, creates content that connects, and lets data drive every decision toward measurable growth.",
    img: "/images/art/story-social-media.png",
    author: "Sorta Famous",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The social media partner a brand chooses shapes how quickly it grows online. The best agencies do more than post content — they build strategies that engage audiences, strengthen brand presence, and drive measurable business growth. Here are the qualities that separate a great social media partner from the rest.",
      },
      { type: "h2", text: "A strong understanding of brand goals" },
      {
        type: "p",
        text: "Before running a single campaign, a strong agency takes time to understand a client's long-term goals, target audience, and business vision. It studies the market, the competition, and the personality of the brand — then builds work that genuinely reflects what the business stands for. Listening well and asking the right questions is what separates generic output from strategy that compounds.",
      },
      { type: "h2", text: "Strategy over random posting" },
      {
        type: "p",
        text: "Agencies that perform never rely on guesswork. Every post, ad, and campaign is planned around research, trends, and past results, with a clear goal — awareness, leads, or engagement. A shared content calendar and real client data keep the output consistent and purposeful.",
      },
      { type: "h2", text: "Creative, engaging content" },
      {
        type: "p",
        text: "Content is what people actually see, so it has to be original, relevant, and worth stopping for. The best teams tailor each message to its platform — Instagram, LinkedIn, Facebook, YouTube — so it feels native rather than recycled. Creativity and purpose work together: posts that are both beautiful and meaningful spark real conversations.",
      },
      { type: "h2", text: "Data-driven decisions" },
      {
        type: "p",
        text: "What sets a great agency apart is the discipline to measure. Clicks, engagement, reach, and conversions are tracked closely, and tactics change based on what the numbers show — not on hunches. This constant analysis means the work keeps improving and clients get more for their budget.",
      },
      { type: "h2", text: "Consistent communication and transparency" },
      {
        type: "p",
        text: "Trust is everything in a partnership. Strong agencies share regular reports, updates, and reviews, and they explain both the plan and the results honestly. When a brand can clearly see how it's performing, the relationship only gets stronger.",
      },
      { type: "h2", text: "Paid and organic, together" },
      {
        type: "p",
        text: "The best teams blend organic content with paid media, knowing when to amplify a message and how to optimise spend. Tailored ads and a distinctive brand voice help reach new audiences without losing the loyal ones.",
      },
      { type: "h2", text: "Adaptability to change" },
      {
        type: "p",
        text: "Platforms, algorithms, and audience habits shift constantly, so an agency has to keep learning and experimenting while staying true to the brand's core message. That flexibility is what keeps a brand relevant in a fast-moving digital landscape.",
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "A premier social media agency combines strategy, creativity, transparency, and adaptability — operating as an extension of your business. It turns social platforms into genuine tools for communication and growth, with a focus on real interaction and measurable outcomes.",
      },
    ],
  },
  {
    slug: "best-pr-agencies-in-mumbai-india-driving-brand-reputation",
    tag: "PR",
    date: "Feb 19, 2026",
    title: "Best PR agencies in Mumbai, India: driving brand reputation in a competitive market",
    excerpt:
      "Top PR firms in Mumbai build strong brand reputations through strategic storytelling and modern communication — in one of the world's most competitive markets.",
    img: "/images/art/story-pr-mumbai.jpeg",
    author: "Sorta Famous",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "In a crowded marketplace, visibility alone is no longer enough — brands have to interact and connect with people to stand apart. The best PR agencies in Mumbai help companies do exactly that, building durable reputations through strategic storytelling and modern communication.",
      },
      { type: "h2", text: "The growing importance of PR in modern business" },
      {
        type: "p",
        text: "Companies increasingly recognise that being seen isn't the same as being trusted. Modern PR reaches well beyond press releases and events into thought leadership, interviews, and industry insight — the work that establishes a business as a genuine authority in its field.",
      },
      { type: "h2", text: "Building strong narratives through strategic communication" },
      {
        type: "p",
        text: "Great agencies excel at managing media relations and brand communication. Every public encounter should reflect the organisation's mission, so messages have to be carefully planned. Well-built PR strategies align marketing objectives with broader business goals, creating lasting recognition through consistent journalist relationships and real community engagement.",
      },
      { type: "h2", text: "Adapting to the digital era of PR" },
      {
        type: "p",
        text: "Digital transformation has reshaped how reputations are built. Direct digital contact lets companies speak to customers themselves, turning one-way announcements into genuine dialogue. Data-driven approaches then let teams read engagement and sentiment, and refine their strategy around what actually resonates.",
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "Partnering with a premier PR agency delivers more than media coverage — it creates an enduring, trustworthy brand. Strategic planning, clear messaging, and integrated traditional-and-digital outreach help businesses keep stakeholder confidence and adapt to shifting market dynamics.",
      },
    ],
  },
  {
    slug: "why-discipline-beats-novelty-in-brand-building",
    tag: "Strategy",
    date: "Jan 22, 2026",
    title: "Why discipline beats novelty in brand building",
    excerpt:
      "Trends fade. Brands that compound attention commit to a system and refuse to chase every new format.",
    img: "/images/art/story-strategy.jpg",
    author: "Sorta Famous",
    readingTime: "3 min read",
    body: [
      {
        type: "p",
        text: "Every week brings a new format, a new platform, and a new 'must-do' trend. The brands that actually compound attention tend to ignore most of it.",
      },
      { type: "h2", text: "Novelty is a tax, not a strategy" },
      {
        type: "p",
        text: "Chasing every format spreads a team thin and resets your learning curve each time. Discipline — a consistent system, voice, and cadence — lets each piece of work build on the last instead of starting from zero.",
      },
      { type: "h2", text: "Systems outlast trends" },
      {
        type: "p",
        text: "Pick the few channels and story angles that fit your brand, commit to them, and let repetition do the heavy lifting. Consistency is what audiences remember — and what turns scattered posts into a reputation.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
