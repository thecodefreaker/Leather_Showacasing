//import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // ✅ Import the correct type


// Initialize Sanity Client
export const sanityClient = createClient({
  projectId: "NAME_PROJECT",
  dataset: "NAME_DATASET",
  apiVersion: "V_API",
  useCdn: false,
  token:"API_TOKEN",
});

// Configure Image URL Builder
const builder = imageUrlBuilder(sanityClient);
//export const urlFor = (source) => builder.image(source);
export const urlFor = (source: SanityImageSource) => builder.image(source); // ✅ Fix: Explicit type





// Define Sanity Fetch Function
