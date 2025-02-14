import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const generateImageUrl = (ref: string) =>
  ref.replace(
    "image-",
    `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/`
  ).replace("-jpg", ".jpg");

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

export const fetchProducts = async () => {
  try {
    const response = await fetch(
      `https://${sanityProjectId}.api.sanity.io/${sanityApiVersion}/data/query/${sanityDataset}?query=` +
        encodeURIComponent('*[_type == "product"]')
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (err: unknown) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};


