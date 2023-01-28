
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const pId = '5uv3n8x8'
const token='skAnj41vlEMMAsALe5vzNQa7RIvPC94r31NHuOvYwHJPKJRbzERUcfo1MlPlSoRZ5LpmIN1luDVANe8IROCJVawrPnoaiVOayiDhsIutOdEIU1UotLQRbtnjfxlklNXDJLr3Ffh3ZxZZunxUBv0rJllr6bbCO0Laz7vkwnkbAiGsZkrrkKts'

const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: pId,
  dataset: "production",
  apiVersion: "2023-01-27",
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
  token: token,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

export { client, urlFor };
