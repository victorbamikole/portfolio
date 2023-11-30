import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'rszq3kfv',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
