/**
 * Selected work, the real client campaigns supplied by Sorta Famous.
 * Each case has an outward-facing cover (the homepage card) and an inside
 * asset, the actual coverage, shown on its detail page at /work/[slug].
 */
export type CaseStudy = {
  slug: string;
  n: string;
  client: string;
  /** Card headline, mirrors the wording burned into the cover artwork. */
  t: string;
  /** One line under the card headline. */
  d: string;
  cover: string;
  inside: string;
  /** Caption sitting under the coverage image on the detail page. */
  insideCaption: string;
  /**
   * Further coverage stacked below the inside asset on the detail page, in
   * order. Use when one campaign has more than a single piece of artwork.
   */
  extra?: { src: string; caption: string }[];
  /**
   * Kept out of the Selected work grid. The detail page still builds and stays
   * reachable by URL, so this hides a case without discarding its copy.
   */
  hidden?: boolean;
  outlet: string;
  services: string[];
  /**
   * The client-approved scope of work, shown as the written brief on the
   * detail page. The first sentence is set as the serif lead-in.
   */
  scope?: string;
  /** The client's Instagram profile, linked from the detail page. */
  instagram?: string;
  summary: string;
  body: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "ambar-house-womans-era",
    n: "01",
    client: "Ambar House",
    t: "In the Spotlight of Woman's Era",
    d: "Print feature for a luxury 22K gold jewellery label",
    cover: "/images/work/ambar-house-womans-era-cover.jpg",
    inside: "/images/work/ambar-house-womans-era-inside.jpg",
    insideCaption: "Ambar House featured in Woman's Era.",
    // The coverage now sits on the Ambar House digital case, so this one is
    // kept off the grid rather than shown twice.
    hidden: true,
    instagram: "https://www.instagram.com/ambarhousejewellery",
    outlet: "Woman's Era",
    services: ["Public Relations", "Brand storytelling", "Print media"],
    summary:
      "Ambar House is an Indian luxury jewellery label founded by Shivam Garg and Nandini Mahant, creating antique-inspired pieces in 22K gold. We placed the brand's story in Woman's Era, a title its buyers already read and trust.",
    body: [
      "Ambar House builds jewellery around a deep admiration for Indian artistry — vintage aesthetics, exceptional craftsmanship, and pieces designed to be lightweight enough to actually wear. The challenge was not the product. It was getting a young label read as heritage rather than as another new name in a crowded category.",
      "We built the pitch around the brand's own philosophy: jewellery that transcends generations. That framing let the story sit naturally inside a magazine whose readers think about gold in exactly those terms — as something bought once and handed down, not something bought seasonally.",
      "The result was a full feature in Woman's Era positioning Ambar House as a label committed to preserving heritage through contemporary design, in front of an audience already predisposed to buy it.",
    ],
  },
  {
    slug: "ambar-house-digital",
    n: "02",
    client: "Ambar House",
    t: "From Strategy to Execution",
    d: "Shaping a luxury jewellery label's digital identity",
    cover: "/images/work/ambar-house-digital-cover.jpg",
    inside: "/images/work/ambar-house-digital-inside.jpg",
    insideCaption: "The Ambar House social presence, strategy through execution.",
    extra: [
      {
        src: "/images/work/ambar-house-womans-era-inside.jpg",
        caption: "Ambar House featured in Woman's Era.",
      },
    ],
    instagram: "https://www.instagram.com/ambarhousejewellery",
    outlet: "Social & digital",
    services: ["Social media", "Content", "Brand identity"],
    scope:
      "We manage the complete social media presence for Ambar House, including content planning, strategy, ideation, and execution. Our work involves developing the content calendar, creating and coordinating content, writing captions and copy, managing regular postings, and ensuring the brand maintains a consistent visual and communication style across its social media platforms. We handle the overall day-to-day social media management to build a strong and cohesive digital presence for the brand.",
    summary:
      "Beyond earned media, we own Ambar House's digital identity end to end — positioning, content direction, and the day-to-day grid that makes a young label look established.",
    body: [
      "A luxury jewellery brand lives or dies on how it looks in a nine-square grid. Ambar House needed a digital presence that matched the weight of the product: antique craftsmanship in 22K gold, photographed and sequenced so the feed reads as a house, not a catalogue.",
      "We set the positioning first — rooted in tradition, defined by detail — then built every content pillar underneath it. Product films, craft close-ups, and framed stills that borrow from the brand's own arched, stamp-like design language.",
      "Strategy and execution stay under one roof, which is why the output holds together. The bio, the highlights, the grid, and the press all say the same thing.",
    ],
  },
  {
    slug: "anangsha-biswas",
    n: "03",
    client: "Anangsha Biswas",
    t: "This is what Strategic PR looks like",
    d: "Sunday Mid-Day feature ahead of Mirzapur: The Movie",
    cover: "/images/work/anangsha-biswas-cover.jpg",
    inside: "/images/work/anangsha-biswas-inside.jpg",
    insideCaption:
      "A feature in Sunday Mid-Day spotlighting Anangsha Biswas and her journey with Mirzapur: The Movie.",
    outlet: "Sunday Mid-Day",
    services: ["Public Relations", "Media relations", "Personal branding"],
    scope:
      "We manage the complete PR strategy and media outreach for Anangsha Biswas, including positioning, story development, media mapping, journalist outreach, and securing relevant opportunities. Our work involves identifying the right narratives around her work and career, developing compelling pitches, connecting with relevant journalists and publications, and creating opportunities for meaningful media coverage. We handle the overall PR process to strengthen her public profile, build credibility, and maintain a consistent presence across relevant media platforms.",
    summary:
      "A Sunday Mid-Day feature that let Anangsha Biswas reframe her most famous role on her own terms, timed to her return in Mirzapur: The Movie.",
    body: [
      "Anangsha Biswas shot to fame as Zarina in Mirzapur. That recognition came with a cost the actor has been candid about: audiences blur the line between the performer and the character.",
      "Rather than avoid it, we made it the story. The pitch centred on an actor reflecting honestly on the downside of a career-defining role, while teasing her return in Mirzapur: The Movie — a piece with a reason to run now and something real to say.",
      "Sunday Mid-Day carried the feature in full, giving Anangsha the space to speak about craft and perception ahead of the film's release.",
    ],
  },
  {
    slug: "shivam-khajuria",
    n: "04",
    client: "Shivam Khajuria",
    t: "In the News",
    d: "Exclusive coverage for a leading television actor",
    cover: "/images/work/shivam-khajuria-cover.jpg",
    inside: "/images/work/shivam-khajuria-inside.jpg",
    insideCaption:
      "Shivam Khajuria, a leading TV actor, placed in CAT A entertainment media.",
    outlet: "Zoom / Telly Talk India",
    services: ["Public Relations", "Media relations", "Entertainment PR"],
    scope:
      "We work on building and strengthening Shivam Khajuria’s presence across the entertainment media landscape. Our PR efforts focus on identifying relevant moments from his career, turning them into strong media stories, and creating targeted opportunities with entertainment publications, journalists, and digital platforms. From media pitching and interview opportunities to developing timely conversations around his work, we aim to keep Shivam visible, relevant, and consistently part of the industry conversation.",
    summary:
      "Shivam Khajuria plays Prem in Rupali Ganguly's Anupamaa. We placed him in CAT A entertainment media with an exclusive tied to the show's biggest storyline turn.",
    body: [
      "Daily television moves fast, and coverage follows the plot. When Anupamaa built to a major turn in the Kothari and Shah households, that was the window.",
      "We pitched Shivam as the voice to explain what the shift means for his character and where the story goes next — an exclusive with genuine news value rather than a generic actor interview.",
      "Zoom and Telly Talk India ran the conversation as an exclusive, putting him in front of the audience that follows the show most closely.",
    ],
  },
  {
    slug: "sudhir-yaduvanshi",
    n: "05",
    client: "Sudhir Yaduvanshi",
    t: "In the Media",
    d: "India Today and Firstpost coverage for the Dhurandhar singer",
    cover: "/images/work/sudhir-yaduvanshi-cover.jpg",
    inside: "/images/work/sudhir-yaduvanshi-inside.jpg",
    insideCaption:
      "Bollywood singer Sudhir Yaduvanshi covered by top entertainment media.",
    outlet: "India Today · Firstpost",
    services: ["Public Relations", "Media relations", "Music PR"],
    scope:
      "We handle Sudhir Yaduvanshi’s PR with a focus on expanding his visibility within the music and entertainment space. Our approach involves identifying newsworthy aspects of his work, creating relevant media narratives, and connecting him with publications and journalists across the entertainment ecosystem. Through strategic pitching, interview opportunities, and targeted media conversations, we work towards keeping his music and career in the spotlight while strengthening his overall presence in the industry.",
    summary:
      "Sudhir Yaduvanshi sang the title track of Dhurandhar. We converted a hit song into sustained coverage across India Today and Firstpost.",
    body: [
      "A hit title track opens doors, but the window is short. The work was turning one song into a body of coverage that outlives the release week.",
      "We built two distinct angles rather than pushing the same story twice. India Today ran the reflective piece — patience, managing expectations, and what success actually opened up. Firstpost took the forward-looking hook: whether he returns with a song in Dhurandhar 2.",
      "Both landed as exclusives with top-tier entertainment desks, establishing Sudhir as a name worth calling rather than a one-track credit.",
    ],
  },
  {
    slug: "kredme",
    n: "06",
    client: "KredMe",
    t: "Performance Meets Precision",
    d: "Performance marketing driving app downloads for a credit card app",
    cover: "/images/work/kredme-cover.jpg",
    inside: "/images/work/kredme-inside.jpg",
    insideCaption:
      "KredMe, reaching the right audience and driving app downloads through strategic performance marketing.",
    instagram: "https://www.instagram.com/kredmeapp",
    outlet: "Performance marketing",
    services: ["Performance marketing", "Paid media", "App growth"],
    scope:
      "We manage the social media marketing and performance marketing for KredMe, handling the brand’s digital presence across content and paid campaigns. Our social media scope includes content strategy, planning and ideation, content calendar development, copy and caption writing, content coordination, and regular posting. Alongside this, we manage performance marketing campaigns focused on driving app downloads, reaching the right audience, and improving overall campaign performance through targeted digital advertising.",
    summary:
      "KredMe tells you which card earns the most before you pay. We run the performance marketing that puts the app in front of the people who will actually use it.",
    body: [
      "A card-rewards app only works once it is on the phone, so every rupee of spend is judged on one thing: installs from people who open it again.",
      "We built the targeting around the moment of intent — shoppers comparing cards at checkout — and wrote creative that leads with the payoff rather than the feature list.",
      "Strategic performance marketing keeps the cost per install honest while the audience stays the right one.",
    ],
  },
  {
    slug: "sraavyam",
    n: "07",
    client: "Sraavyam",
    t: "Curating Social Media Presence",
    d: "Building an Andhra kitchen's digital presence from the ground up",
    cover: "/images/work/sraavyam-cover.jpg",
    inside: "/images/work/sraavyam-inside.jpg",
    insideCaption:
      "Sraavyam The Andhra Kitchen, built from launch planning through social media management and influencer collaborations.",
    instagram: "https://www.instagram.com/sraavyam_pune",
    outlet: "Social & digital",
    services: ["Social media", "Influencer marketing", "Launch strategy"],
    summary:
      "Sraavyam The Andhra Kitchen came to us before it opened. We handle launch planning, social media management, and influencer collaborations, building the digital presence from the ground up.",
    body: [
      "A restaurant's first impression now happens on a profile, not at the door. Sraavyam needed one that already looked like a place worth booking on opening week.",
      "We set the positioning — authentic Andhra, pure veg, bold flavours, honest ingredients — then built the grid, highlights, and launch calendar underneath it.",
      "Influencer collaborations brought the first wave of tables in, and the content pipeline keeps the feed running past launch.",
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
