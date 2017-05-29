import fetch from 'node-fetch'
import querystring from 'querystring'

import { FACEBOOK_API_URL } from './constants'

export function getAccessToken () {
  const args = querystring.stringify({
    client_id: process.env.FACEBOOK_APP_ID,
    client_secret: process.env.FACEBOOK_APP_SECRET,
    grant_type: 'client_credentials'
  })

  return fetch(`${FACEBOOK_API_URL}/oauth/access_token?${args}`)
    .then(res => res.json())
    .then(json => json.access_token)
    .then(token => {
      if (token) {
        return token
      } else {
        throw new Error('Unable to get access token from Facebook API!')
      }
    })
}

export default getAccessToken
