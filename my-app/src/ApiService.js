const BASE_URL = 'http://localhost:3000';

export const register = async (user) => {
  try {
    const res = await fetch(BASE_URL + '/register', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(user),
    })
    return res.json()
  } catch (e) {
    console.log(e)
  }
};

export const login = async (user) => {
  try {
    const res = await fetch(BASE_URL + '/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    return res.json()
  } catch (e) {
    console.log(e)
  }
};

export const profile = async (user) => {
  try {
    const res = await fetch(BASE_URL + '/me', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    return res.json()
  } catch (e) {
    console.log(e)
  }
};

export const logout = async (user) => {
  try {
    const res = await fetch(BASE_URL + '/logout', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    return res.json()
  } catch (e) {
    console.log(e)
  }
};

