const formatNewIngredient = newIngredientData => (
  {
    name: newIngredientData.name,
    amount: newIngredientData.dosage,
    origin: newIngredientData.source,
    detail: {
      form: newIngredientData.form,
      manufacturer: newIngredientData.manufacturer,
      found: newIngredientData.foundIn,
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
  }
);

export default formatNewIngredient;
