import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2022-04-01", // use current UTC date - see "specifying API version"!
	token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
	// useCdn: true, // `false` if you want to ensure fresh data
	ignoreBrowserTokenWarning: true,
});

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);
