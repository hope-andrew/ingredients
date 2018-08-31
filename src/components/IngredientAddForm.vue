<template lang="html">
  <div>
    <h1> Add Ingredient </h1>
    <button @click="cancelHandler"> cancel </button>
    <form @submit.prevent="handleSubmit(newIngredient)">
      <p v-if="errors.length">
        <b>Please correct the following error:</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>
      <p>
        <label>
          Ingredient Name:
          <input type="text" v-model="newIngredient.name">
        </label>
      </p>
      <p>
        <label>
          Dosage:
          <input type="text" v-model="newIngredient.dosage">
        </label>
      </p>
      <p>
        <label>
          Form:
          <input type="text" v-model="newIngredient.form">
        </label>
      </p>
      <p>
        <label>
          Source:
          <input type="text" v-model="newIngredient.source">
        </label>
      </p>
      <p>
        <label>
          Manufacturer:
          <input type="text" v-model="newIngredient.manufacturer">
        </label>
      </p>
      <p>
        <label>
          Found In:
          <input type="text" v-model="newIngredient.foundIn">
        </label>
      </p>

      <button type="submit">Save</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'IngredientAddForm',
  props: {
    cancelHandler: Function,
    createNewIngredient: Function,
  },
  data() {
    return {
      errors: [],
      newIngredient: {
        name: '',
        dosage: '',
        form: '',
        source: '',
        manufacturer: '',
        foundIn: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      if (Object.values(this.newIngredient).includes('')) {
        this.errors.push('Please include all fields.');
      } else {
        this.createNewIngredient(this.newIngredient);
        this.cancelHandler();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
