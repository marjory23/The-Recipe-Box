import React from 'react';
import { MenuItem, TextField, Button, Box, Select } from '@mui/material';

function IngredientInput({ i, ingredients, handleIngredientChange }) {

  return (
<>
    <Box sx={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <TextField
        required
        type='text'
        value={ingredients[i].food}
        name='food'
        label='Ingredient'
        placeholder='ingredient'
        onChange={(e) => handleIngredientChange(i, e)}
      />

      <TextField
        required
        type='number'
        value={ingredients[i].quantity}
        name='quantity'
        label='Quantity'
        placeholder='quantity'
        sx={{ maxWidth: '100px' }}
        onChange={(e) => handleIngredientChange(i, e)}
      />

<Select
        required
        name='measure'
        value={ingredients[i].measure}
        onChange={(e) => handleIngredientChange(i, e)}
        style={{ flex: '1' }} // Utilizzo flex per occupare lo spazio rimanente
      >
        <MenuItem value='unit'>unit</MenuItem>
        <MenuItem value='can'>can</MenuItem>
        <MenuItem value='teaspoon'>teaspoon</MenuItem>
        <MenuItem value='tablespoon'>tablespoon</MenuItem>
        <MenuItem value='cup'>cup</MenuItem>
        <MenuItem value='slice'>slice</MenuItem>
        <MenuItem value='ounce'>ounce</MenuItem>
        <MenuItem value='pint'>pint</MenuItem>
        <MenuItem value='quart'>quart</MenuItem>
        <MenuItem value='gallon'>gallon</MenuItem>
      </Select>
    </Box>

{/* <Box sx={{ marginBottom: '1rem' }}>
<TextField
  required
  type='text'
  value={ingredients[i].food}
  name='food'
  label='Ingredient'
  placeholder='ingredient'
  onChange={(e) => handleIngredientChange(i, e)}
/>

<TextField
  required
  type='number'
  value={ingredients[i].quantity}
  name='quantity'
  label='Quantity'
  placeholder='quantity'
  onChange={(e) => handleIngredientChange(i, e)}
/>

<TextField
  select
  required
  name='measure'
  value={ingredients[i].measure}
  label='Measure'
  onChange={(e) => handleIngredientChange(i, e)}
>
  <MenuItem value='unit'>unit</MenuItem>
  <MenuItem value='can'>can</MenuItem>
  <MenuItem value='teaspoon'>teaspoon</MenuItem>
  <MenuItem value='tablespoon'>tablespoon</MenuItem>
  <MenuItem value='cup'>cup</MenuItem>
  <MenuItem value='slice'>slice</MenuItem>
  <MenuItem value='ounce'>ounce</MenuItem>
  <MenuItem value='pint'>pint</MenuItem>
  <MenuItem value='quart'>quart</MenuItem>
  <MenuItem value='gallon'>gallon</MenuItem>
</TextField>
</Box> */}
</>
  )
}

export default IngredientInput