<template lang="html">
  <div class="ingredient-detail-container">
    <div class="ingredient-detail__heading">
      <div class="ingredient-detail__heading__text">
        <h1 class="ingredient-detail__heading__text-name">{{name}}</h1>
        <p class="ingredient-detail__heading__text-amount">{{amount}}</p>
      </div>
      <img
        class="ingredient-detail__heading__img"
        :src="detail.image"
        :alt="detail.image"
      />
    </div>

    <div class="ingredient-detail__text">
      <p>FORM: {{detail.form}}</p>
      <p>DOSAGE: {{amount}}</p>
      <p>SOURCE: {{origin}}</p>
      <p>MANUFACTURER: {{detail.manufacturer}}</p>
      <hr/>
    </div>

    <div class="ingredient-detail__icons">
      <div v-for="icon in detail.icons" :key="icon.name">
        <img :src="icon.source" :alt="icon.name">
        <p>{{icon.name}}</p>
      </div>
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
.ingredient-detail-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #0E1B60;
}

.ingredient-detail__heading {
  display: flex;
  flex-direction: row;

  &__text {
    width: auto;
    text-align: left;
    &-name {
      font-size: 80px;
    }
    &-amount {
      font-size: 20px;
    }
  }

  &__img {
    max-height: 200px;
  }
}

.ingredient-detail__text {
  text-align: left;
  font-size: 26px;
  color: #0E1B60;
  font-weight: 600;
}

.ingredient-detail__icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    height: 120px;
  }
}

.ingredient-detail__sub-detail {
  text-align: left;
  padding-left: 20px;
  font-size: 26px;
  font-weight: 300;

}
</style>
