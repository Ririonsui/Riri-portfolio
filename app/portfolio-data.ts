export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "Brand" | "UGC" | "Educational" | "Creative" | "Editing";
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  videoSrc?: string;
};

export const projects: Project[] = [
  { slug: "product-in-motion", title: "Product in Motion", client: "Your brand here", year: "20—", category: "Brand", role: "Concept → Edit", description: "A placeholder for a product story built around texture, tension, and one clear reason to care.", image: "/images/project-product.png", imageAlt: "Unbranded cobalt glass bottle in dramatic studio light — illustrative placeholder" },
  { slug: "the-explainer-cut", title: "The Explainer Cut", client: "Project placeholder", year: "20—", category: "Educational", role: "Script → Edit", description: "A placeholder for a complex idea translated into a sharp, visual story.", image: "/images/project-storyboard.png", imageAlt: "Storyboard and camera on a creative desk — illustrative placeholder" },
  { slug: "creator-first", title: "Creator, First", client: "Campaign placeholder", year: "20—", category: "UGC", role: "On-camera → Edit", description: "A space for an authentic social-first story with a human hook.", image: "/images/riri-hero.png", imageAlt: "Creator reviewing a scene in a dark studio — illustrative placeholder" },
  { slug: "cut-for-culture", title: "Cut for Culture", client: "Personal study", year: "20—", category: "Editing", role: "Edit → Sound", description: "A placeholder for a rhythm-led edit shaped by sound, pacing, and internet culture.", image: "/images/project-storyboard.png", imageAlt: "Handmade storyboard frames arranged on a dark table — illustrative placeholder" },
  { slug: "the-campaign-thought", title: "The Campaign Thought", client: "Pitch placeholder", year: "20—", category: "Creative", role: "Idea → Direction", description: "A placeholder for a campaign concept that turns one thought into a visual system.", image: "/images/project-product.png", imageAlt: "Cobalt product silhouette in a cinematic studio — illustrative placeholder" },
];
