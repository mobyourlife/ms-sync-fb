import { consume } from '@mobyourlife/amqp-wrapper'

import api from './api'
import page from './actions/page'
import photos from './actions/photos'

const actions = {
  page,
  photos
}

consume('sync-fb', async (message) => {
  const createRequest = actions[message.type]
  if (createRequest) {
    const req = createRequest(message.payload)
    const res = await api(req)
    message.answer('cache', res)
  } else {
    message.error('No valid handler for this message type!')
  }
})
