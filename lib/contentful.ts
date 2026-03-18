import 'server-only';
import { createClient } from "contentful";

export const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
});