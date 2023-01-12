
/* const YOUR_APP_ID ='191b066f';
const YOUR_APP_KEY ='6d33790b9d5fc0e22fdf061923940ab5'
const search = ''
const BASE_URL = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

export const fetchRecipes = async () => {
  try {
    const result = await fetch(BASE_URL, {
      mode: 'cors'
    })
    const data = await result.json();
    console.log(data)
    return data.hits;

  } catch (error) {
      console.log("error")
  }
} */