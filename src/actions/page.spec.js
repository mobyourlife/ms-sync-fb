/* global describe, it, expect */

import createAction from './page'

describe('Page action creator', () => {
  it('should return null for empty requests', () => {
    const undefinedReq = createAction()
    expect(undefinedReq).toEqual(null)

    const nullReq = createAction(null)
    expect(nullReq).toEqual(null)

    const emptyReq = createAction({})
    expect(emptyReq).toEqual(null)
  })

  it('should return action for valid requests', () => {
    const req = createAction({
      id: '1234567890'
    })
    expect(req).toEqual({
      verb: 'GET',
      endpoint: '/v2.9/1234567890',
      fields: [
        'id',
        'name',
        'about',
        'description',
        'location'
      ]
    })
  })
})
