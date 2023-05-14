import  imageUrlBuilder  from "@sanity/image-url";
import {createClient} from "@sanity/client";

const client = createClient({
    projectId:"zgy770o1",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-03-12"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source);
export default client;
