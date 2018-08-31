# Ingredients 

## Difficulties 
One thing that I found difficult was finding an appropriate way to pass a new ingredient object from the addIngredientForm component to the parent Ingredients view.  This was challenging because the data (ingredients list) lives in the parent view and the new ingredient data lives in the child component. Typically, I would expect an action in the component to call a service to generate a new ingredient and the parent/child would be more decoupled, however there isn’t a need for a service in this case. Instead, I chose to  pass a handler (createNewIngredient) from the parent view down to child component to generate a new ingredient with access to the data from the parent.

## Inspiration/Fun 
It was fun to work on something new, and to get to pick all of the tooling / architecture for a project. I was also entertaining to build out the project step by step. I was trying to take a very simple step-by-step approach. Hopefully, my commits read like instructions. The time crunch also made it fun and allowed me to focus more getting things functional. 


## More Time 
If I had more time I would like to do a lot of clean up, particularly with names, and also how the new ingredients are handled. Right now the data is very dependent on the data structure for each ingredient, it would be nice to decouple this from what the template is expecting.

I would also like persist the ingredient list to local storage, so if you add or delete an item, they are persisted between navigation or closing a tab. Taking that further, it would not be difficult to write an add/delete endpoint or lambda to persist the ingredient list to a store.

Other features that I considered were more robust error handling on the field and including a map package to have a simple visitation of where the source is. 