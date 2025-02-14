//import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // ✅ Import the correct type


// Initialize Sanity Client
export const sanityClient = createClient({
  projectId: "NEXT_PUBLIC_SANITY_PROJECT_ID",
  dataset: "NEXT_PUBLIC_SANITY_DATASET",
  apiVersion: "2021-03-25",
  useCdn: false,
  token:"NEXT_PUBLIC_SANITY_TOKEN",
});

// Configure Image URL Builder
const builder = imageUrlBuilder(sanityClient);
//export const urlFor = (source) => builder.image(source);
export const urlFor = (source: SanityImageSource) => builder.image(source); // ✅ Fix: Explicit type





// Define Sanity Fetch Function
