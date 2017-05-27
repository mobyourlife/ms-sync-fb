import { consume } from '@mobyourlife/amqp-wrapper'

import actions from './actions'

// handleMessage may throw errors
// consume's callback will wrap each call in a try/catch block and log errors
// message.error will always include message type and payload in error reports

consume('sync-fb', async (message) => {
  const handleMessage = actions[message.type]
  if (handleMessage) {
    const response = await handleMessage(message.payload)
    message.answer('cache', response)
  } else {
    message.error('No valid handler for this message type!')
  }
})
