import axios from 'axios'
import config from './config'

class RestClient {
  constructor () {
    this.setup()
  }

  setup () {
    axios.defaults.withCredentials = true
    axios.defaults.baseURL = "http://localhost:8081"
  }

  async request (type, url, data) {
    const response = await axios(url, {
      method: type,
      credentials: 'same-origin',
      data: data
    })

    return response
  }
}

const client = new RestClient()
client.setup()

export default client