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
    <div>
      <ingredient-detail
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

export default {
  name: 'Ingredients',
  components: {
    IngredientCard,
    IngredientDetail,
  },
  computed: {
    currentIngredient() {
      return this.ingredientsList[0];
    },
  },
  data() {
    return {
      ingredientsList: [
        {
          name: 'Folate',
          amount: '600 MCG',
          origin: 'Pisticci, Italy',
          detail: {
            form: '5MTHF GLUCOSAMINE SALT',
            manufacturer: 'Gnosis',
            found: 'Lentils, avocado, and oranges.',
            image: 'https://5.imimg.com/data5/EX/IU/MY-2290318/folic-acid-250x250.jpg',
            icons: [
              {
                source: 'https://image.flaticon.com/icons/svg/39/39272.svg',
                name: 'MOOD',
              },
              {
                source: 'https://image.flaticon.com/icons/svg/340/340624.svg',
                name: 'DNA SYNTHESIS',
              },
              {
                source: 'https://image.flaticon.com/icons/svg/109/109727.svg',
                name: 'BRAIN HEALTH',
              },
            ],
          },
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
