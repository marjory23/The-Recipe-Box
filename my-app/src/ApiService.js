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
    const data = await res.json()
    console.log(data)
    return data
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

export const fetchRecipes = async (search, start, end) => {
  try {
    const result = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=${start}&size=${end}&q=${search}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6f9a8a663amsh8a4d83fb438ce8bp17a448jsnf930468c0744',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    })
    const data = await result.json();
    console.log(data)
    return data;
  } catch (error) {
      console.log("error")
  }
};

export const createRecipe = async (content) => {
  try  {
    const res = await fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
      credentials: 'include',
    })
    return res.json()
  } catch (e) {
    console.log(e)
  }
};

export const deleteRecipe = async (id) => {
  try {
    const data = await fetch('http://localhost:3000/recipes/' + id, {
      method: 'DELETE',
      credentials: 'include',
    })

    const res = await data.json()
    console.log(res)
       return res
  } catch (e) {
    console.log(e)
  }
};

export const fetchMyRecipes = async () => {
  try {
    const result = await fetch('http://localhost:3000/recipes')
    const data = await result.json();
    //console.log(data)
    return data;

  } catch (error) {
      console.log("error")
  }
};

