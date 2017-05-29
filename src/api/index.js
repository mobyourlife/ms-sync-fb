import fetch from 'node-fetch'
import getAccessToken from './access-token'
import querystring from 'querystring'

import { FACEBOOK_API_URL } from './constants'

export default async function (request) {
  return new Promise((resolve, reject) => {
    return getAccessToken().then(access_token => {
      const qs = querystring.stringify({
        fields: request.fields.join(','),
        access_token
      })
      const url = `${FACEBOOK_API_URL}/${request.endpoint}?${qs}`

      return fetch(url)
        .then(res => res.json())
        .then(json => {
          if (json.error) {
            reject(json.error)
          } else {
            resolve(json)
          }
        })
    })
  })
}
