<template lang="html">
  <div>
    <h1><i> Essential</i> Nutrients</h1>
    <ul>
      <li v-for="ingredient in ingredientsList" :key="ingredient">
        <p>{{ingredient}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Ingredients',
  data() {
    return {
      ingredientsList: [
        'folate',
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
</style>
