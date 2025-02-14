export const productQuery = `*[_type == "product"]{
    _id,
    sku,
    name,
    shortDescription,
    price,
    "mainImageUrl": mainImage.asset->url,
    "sideImageUrl": sideImage.asset->url,
    "backImageUrl": backImage.asset->url
  }`;
  
    