//import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // ✅ Import the correct type


// Initialize Sanity Client
export const sanityClient = createClient({
  projectId: "birgj4m8",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
  token:"skEg0JTFahyq6Aghdzr9ngPdsqB8t5oRGLHgAwIqBn1BzrLK5HZYVgbFVhzMy15xVH9KDPtr8mTeWJJXtnD5oz0i2m2KOGmKhYCj67t0CG8uXBpKXg3F1KvIjKprKsyeSuow6raOD91ANVV5Jc5fPMMoVdzw1kZXCKbVg3yFrjdc4sVtGYUx",
});

// Configure Image URL Builder
const builder = imageUrlBuilder(sanityClient);
//export const urlFor = (source) => builder.image(source);
export const urlFor = (source: SanityImageSource) => builder.image(source); // ✅ Fix: Explicit type





// Define Sanity Fetch Function
