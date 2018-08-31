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
        <li class="add-button" @click="handleAddClick()">
          <img class="add-button__img" src="../assets/plus-button.png" alt="add"/>
          <p class="add-button__text">Add a new ingredient</p>
        </li>
      </ul>

      <ingredient-detail
        v-if="!showAddForm"
        class="ingredient-detail"
        :name="currentIngredient.name"
        :amount="currentIngredient.amount"
        :origin="currentIngredient.origin"
        :detail="currentIngredient.detail"
      />
      <ingredient-add-form
        v-if="showAddForm"
        :cancelHandler="handleCancelClick"
        :createNewIngredient="createNewIngredient"
      />

    </div>
  </div>
</template>

<script>
import IngredientCard from '../components/IngredientCard.vue';
import IngredientDetail from '../components/IngredientDetail.vue';
import IngredientAddForm from '../components/IngredientAddForm.vue';
import Data from '../data';
import formatNewIngredient from '../utils';

export default {
  name: 'Ingredients',
  components: {
    IngredientCard,
    IngredientDetail,
    IngredientAddForm,
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
      showAddForm: false,
    };
  },
  methods: {
    handleIngredientSelect(selectedIngredientIndex) {
      this.currentIngredientIndex = selectedIngredientIndex;
    },
    handleAddClick() {
      this.showAddForm = true;
    },
    handleCancelClick() {
      this.showAddForm = false;
    },
    createNewIngredient(newIngredientData) {
      this.ingredientsList.push(formatNewIngredient(newIngredientData));
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

.add-button {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  background-color: #0E1B60;
  color: #FFFFFF;
  padding-top: 50px;
  padding-bottom: 50px;

  &__img {
    margin: auto;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
  }
  &__text {
    display: inline-block;
    vertical-align: middle;
    padding-left: 20px;
  }
}

</style>
