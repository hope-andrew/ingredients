<template lang="html">
  <div class="ingredient-card">
    <div class="box">
      <h1>{{name}}</h1>
      <h2>{{amount}}</h2>
      <h3>{{origin}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientCard',
  props: {
    name: {
      type: String,
      required: true,
      defualt: 'Ingredient',
    },
    amount: {
      type: String,
      required: false,
      default: '1 mg',
    },
    origin: {
      type: String,
      required: false,
      default: 'California, USA',
    },
  },

};
</script>

<style lang="scss" scoped>


.ingredient-card {
  border: 1px solid #0E1B60;
}
</style>
