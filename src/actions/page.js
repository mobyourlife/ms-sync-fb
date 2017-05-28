export default function (message) {
  if (!message || !message.id) {
    return null
  }

  return {
    verb: 'GET',
    endpoint: `/v2.9/${message.id}`,
    fields: [
      'id',
      'name',
      'about',
      'description',
      'location'
    ]
  }
}
