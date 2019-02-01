import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://dio-axios.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance