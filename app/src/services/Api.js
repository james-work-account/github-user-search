import axios from 'axios'
import store from '@/store'

const headers = () => { // needs to be a function since getter isn't resolved by the time this is needed. Not sure why.
  return {
    authorization: store.getters.get_bearer_token,
    'Content-Type': 'application/graphql'
  }
}

export default () => {
  return axios.create({
    baseURL: 'http://localhost:4000',
    headers: headers()
  })
}
