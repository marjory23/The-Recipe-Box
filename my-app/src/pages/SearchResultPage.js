import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';
import Layout from './Layout';

function SearchResultPage() {
  const recipes = useSelector((state) => state.allRecipes.recipes);
  return (
    <Layout>
      <div>
        {recipes.length>0 && <RecipeList/> }
      </div>
    </Layout>
  )
}

export default SearchResultPage