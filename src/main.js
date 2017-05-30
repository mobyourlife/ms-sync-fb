import { consume } from '@mobyourlife/amqp-wrapper'

import api from './api'
import actions from './actions'

consume('sync-fb', (message) => {
  const createRequest = actions[message.type]
  if (createRequest) {
    const req = createRequest(message.payload)
    api(req)
      .then(res => message.answer('cache', res))
      .catch(err => message.error(err.message, err))
  } else {
    message.error('No valid handler for this message type!')
  }
})
