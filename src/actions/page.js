export default function (message) {
  if (!message || !message.id) {
    return null
  }

  return {
    verb: 'GET',
    endpoint: `${message.id}`,
    fields: [
      'id',
      'name',
      'about',
      'description',
      'location'
    ]
  }
}
