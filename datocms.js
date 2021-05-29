import { GraphQLClient } from 'graphql-request'

export function request({ query, variables, preview }) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NUXT_ENV_DATOCMS_API_TOKEN}`,
    },
  })

  return client.request(query, variables)
}
