<template lang="html">
  <div>
    <h1><i> Essential</i> Nutrients</h1>
    <div class="ingredients-container">
      <ul class="ingredient-list">
        <li v-for="(ingredient, index) in ingredientsList" :key="index">
          <ingredient-card @click.native="handleIngredientSelect(index)"
          :class="{active : index===currentIngredientIndex}"
          :name="ingredient.name"
          :amount="ingredient.amount"
          :origin="ingredient.origin"
          />
        </li>
      </ul>
      <ingredient-detail class="ingredient-detail"
        :name="currentIngredient.name"
        :amount="currentIngredient.amount"
        :origin="currentIngredient.origin"
        :detail="currentIngredient.detail"
      />
    </div>
  </div>
</template>

<script>
import IngredientCard from '../components/IngredientCard.vue';
import IngredientDetail from '../components/IngredientDetail.vue';
import Data from '../data';

export default {
  name: 'Ingredients',
  components: {
    IngredientCard,
    IngredientDetail,
  },
  computed: {
    currentIngredient() {
      return this.ingredientsList[this.currentIngredientIndex];
    },
  },
  data() {
    return {
      currentIngredientIndex: 0,
      ingredientsList: Data,
    };
  },
  methods: {
    handleIngredientSelect(selectedIngredientIndex) {
      this.currentIngredientIndex = selectedIngredientIndex;
    },
  },
};
</script>

<style lang="scss">
.ingredients-container{
  display: flex;
  flex-direction: row;
}
.ingredient-list {
  list-style: none;
  width: 25%;
}

.ingredient-detail {
  width: 75%;
}

.active {
  background-color: #0E1B60;
  color: #FFFFFF;
}

</style>
