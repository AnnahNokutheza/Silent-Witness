import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'dq0j5ek5',
  dataset: 'crime_reports',
  useCdn: false, // Set to true for production to enable CDN
  apiVersion: '2021-03-25'
});

export default client;

