# todo-app

## Requirements

### Phase 3

As a user, I want to provide a way for other users to create new accounts.

As a user, I want to provide a way for all users to login to their account.

As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.

As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.

As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.

As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

### Phase 2

In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

Implement the Context API to make some basic application settings available to components
How many To Do Items to show at once
Whether or not to show completed items
Provide the users with a form where they can change the values for those settings
This should be given in the form of a new component, perhaps linked to from the main navigation
Hint: Use Browser Router to create the page/route/component for this
Save the users choices in Local Storage
Retrieve their preferences from Local Storage and apply them to the application on startup

### Phase 1

In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.  
Style the application using the Blueprint Component API{target:_blank}.
Properly modularize the application into separate components.
Implement the Context API to make some basic application settings available to components.
How many To Do Items to show at once.
Whether or not to show completed items.

## Deployed Site

[Deployed](https://gilded-centaur-e4d0fd.netlify.app/)

## Testing

Run npm test

![UML](img/lab31.jpg)
![UML](img/lab31-1.jpg)
![UML](img/lab31-2.jpg)

## Resource

[Blueprint](https://blueprintjs.com/docs/)
