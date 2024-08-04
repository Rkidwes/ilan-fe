import { groq } from "next-sanity";

// export const postQuery = groq`*[_type == "post"] {
//   _id,
//   _createdAt,
//   title,
//   "slug": slug.current,
//   cover {
//     "image": asset->url,
//     "lqip": asset->metadata.lqip,
//     alt,
//   },
//   content,
// }`;

// export const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0] {
//   title,
//   content,
// }`;

// export const imagesQuery = groq`*[_type == "gallery"] {
//   _id,
//   image,
//   alt,
//   caption
// }|order(date desc)`;

export const imagesQueryNew = groq`*[_type == "altGallery"]{
  images[]{
    ...
  }
}`;

export const eventsQuery = groq`*[_type == "event"]{
  _id, 
  eventName, 
  location, 
  startDate, 
  endDate, 
  ticketsURL
}|order(date desc)`;
