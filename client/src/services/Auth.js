import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    console.log(res)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    console.log('react check session working')
    console.log(localStorage.getItem('token'))
    const res = await Client.get('/auth/session')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
