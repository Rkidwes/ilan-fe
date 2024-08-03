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

// export const homeQuery = groq`*[_type == "siteSettings"]{
//   hpTitle,
//   hpText,
//   hpLinkText,
//   hpLinkURL
// }`;

// export const sliderQuery = groq`*[_type == "siteSettings"]{
//   slide1->,
//   slide2->,
//   slide3->,
//   slide4->
// }`;

// export const bioQuery = groq`*[_type == "siteSettings"]{
//   biographyTitle,
//   biography
// }`;

// export const bookingsBgQuery = groq`*[_type == "siteSettings"]{
//   bookingsBg,
//   bookingsBgOpacity
// }`;

// export const galleryBgQuery = groq`*[_type == "siteSettings"]{
//   galleryBg,
//   galleryBgOpacity
// }`;

// export const musicBgQuery = groq`*[_type == "siteSettings"]{
//   musicBg,
//   musicBgOpacity
// }`;

// export const tourBgQuery = groq`*[_type == "siteSettings"]{
//   tourBg,
//   tourBgOpacity
// }`;

export const imagesQuery = groq`*[_type == "gallery"] {
  _id,
  image,
  alt,
  caption
}|order(date desc)`;

export const eventsQuery = groq`*[_type == "event"]{
  _id, 
  eventName, 
  location, 
  startDate, 
  endDate, 
  ticketsURL
}|order(date desc)`;
