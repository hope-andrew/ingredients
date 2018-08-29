<template lang="html">
  <div>
    <h1><i> Essential</i> Nutrients</h1>
    <ul class="ingredient-list">
      <li v-for="ingredient in ingredientsList" :key="ingredient">
        <ingredient-card
          :name="ingredient"
          amount="600 mg"
          origin="Vancouver, BC"
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
        'Folate',
        'Omega-3',
        'Vitamin D3',
        'Iron',
        'Vitain K2',
        'Magnesium',
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
