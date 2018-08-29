<template lang="html">
  <div class="ingredient-detail">
    <div class="ingredient-detail__heading">
      <h1>{{name}}</h1>
      <p>{{amount}}</p>
      <img :src="detail.image" alt="">
    </div>
    <div class="ingredient-detail__text">
      <p>FORM: {{detail.form}}</p>
      <p>DOSAGE: {{amount}}</p>
      <p>SOURCE: {{origin}}</p>
      <p>MANUFACTURER: {{detail.manufacturer}}</p>
    </div>
    <div class="ingredient-detail__icons">
      <ul>
        <li v-for="icon in detail.icons" :key="icon.name">
          <img :src="icon.source" :alt="icon.name">
          <p>{{icon.name}}</p>
        </li>
      </ul>
    </div>
    <div class="ingredient-detail__sub-detail">
      <h2>FOUND IN</h2>
      <p><i>{{detail.found}}</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngrdientDetail',
  props: {
    name: String,
    amount: String,
    origin: String,
    detail: Object,
  },
};
</script>

<style lang="scss">
</style>
