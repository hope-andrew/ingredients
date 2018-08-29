<template lang="html">
  <div>
    <h1><i> Essential</i> Nutrients</h1>
    <ul class="ingredient-list">
      <li v-for="ingredient in ingredientsList" :key="ingredient.name">
        <ingredient-card
          :name="ingredient.name"
          :amount="ingredient.amount"
          :origin="ingredient.origin"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IngredientCard from '../components/IngredientCard.vue';

export default {
  name: 'Ingredients',
  components: {
    IngredientCard,
  },
  data() {
    return {
      ingredientsList: [
        {
          name: 'Folate',
          amount: '600 MCG',
          origin: 'Pisticci, Italy',
        },
        {
          name: 'Omega-3',
          amount: '320 MG',
          origin: 'South Carolina, USA',
        },
        {
          name: 'Vitamin D3',
          amount: '2000 IU',
          origin: 'United Kingdom',
        },
        {
          name: 'Iron',
          amount: '8 MG',
          origin: 'Utah, USA',
        },
        {
          name: 'Vitamin K2',
          amount: '90 MCG',
          origin: 'Oslo, Norway',
        },
        {
          name: 'Magnesium',
          amount: '50 MG',
          origin: 'Pisa, Italy',
        },
      ],
    };
  },
};
</script>

<style lang="scss">

.ingredient-list {
  list-style: none;
}
</style>
