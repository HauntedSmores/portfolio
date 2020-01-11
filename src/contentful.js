import * as contentful from 'contentful'

export default contentful.createClient({
  space: process.env.VUE_APP_CONTENTFUL_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_KEY
});