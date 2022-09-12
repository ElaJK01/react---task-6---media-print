# Assignment - React 5

***

## Configuration steps
Add react-dnd and possible dependent packages to your project

## Assignment goal

<details>
The goal of this assignment is to get familiar with libraries that enable more "visual" way of app interaction, such as react-dnd
</details>

## Formal requirements

Keep in mind that CSS should be adjusted so that the app looks coherent.

<details>

* data lists should be reorderable via drag and drop
* the "details" view should have all elements reorderable via drag and drop
* OPTIONAL: make it so that other elements "make space" visually in a smooth manner for the one that you are dropping
</details>

# Assignment - React 4

***

## Configuration steps
No steps this time.

## Assignment goal

<details>
The goal of this assignment is to get more familiar with efficiend code structurization via React hooks and HOCs, and learning some uses of refs.
</details>

## Formal requirements

<details>

* your data fetching logic should be contained within an appropriate hook
* you should aim to implement a minimal number of generalized hooks to cover your needs
* while loading a new page of data and while spinner is displayed, previous page data should still be displayed
* above should be achieved via a custom hook that uses a ref for previous value - try to write it yourself, even though it most probably is readily available on the internet
* Both data fetching and loading should be handled via a very general HOC that will supply every page
* Your application should now have a "dark mode" (or a light mode, if it is already dark). This should be handled with styled components theming and via a custom hook. User should be able to switch between modes via a button in the header of the page. The value of current mode should be stored in local storage
</details>

# Assignment - React 3

***

## Configuration steps

<details>

Make a copy of your React 2 repository with review changes applied
Install Js GraphQL plugin for Webstorm
</details>

## Assignment goal

<details>

The goal of this assignment is to get familiar with GraphQL and further improvement of Fluture knowledge via integration with GraphQL, as well as the ability to resolve configuration tasks
</details>

## Formal requirements

<details>

***KEEP IN MIND***

Fluture should be used to wrap your GraphQL calls and async logic. Please use the pipeline operator whenever possible


***TECHNICAL REQUIREMENTS***

* your application should be refactored to take advantage of a real GraphQL API of your choice (example: https://beta.pokeapi.co/graphql/console/)
* the general theme of your application can, but does not have to be changed - however, try to find a structure similar to players/teams
* API calls should be wrapped in Futures sufficiently for reusability purposes
* your application should have a schema.graphql file that contains the schema of the API you are using
* schema mentioned above should be generated manually via yarn generate-schema command
* yarn generate-schema should act according to a changable configuration
* your application should provide autocompletion for gql calls based on the schema that was generated
* your application should use graphql-tag for gql queries
* please remove your fake API from the application
* the details of player/team that were previously opened in a modal should now have separate pages parametrized by ID which will fetch that precise player/team
* you should take advantage of pagination data provided by the API (if it does provide pagination data)

</details>

# Assignment - React 2

***

## Configuration steps

<details>

* Make a copy of your React 1 repository with review changes applied, make sure to have this README.md present

</details>

## Assignment goal

<details>

The goal of this assignment is to modernize your freshly-completed React project with a proper functional package stack, as well as refactor your pure CSS into a more modern solution in form of styled-components, training your css-in-js skill.

</details>

## Formal requirements

<details>

***KEEP IN MIND***
Pay extra attention to using Fluture properly, where it benefits your project.

***TECHNICAL REQUIREMENTS***
* your application should be refactored to take advantage of Fluture **wherever possible**
* loading and error states should be handled via Fluture
* your application should contain a minimal amount of .css files - refactor to use styled-components instead
* your application should take advantage of pipeline operator **wherever possible**
* components and logic should aim to be reusable


</details>

# Assignment - React 1

***

## Configuration steps

<details>

* Fork this repository to have this README.md present 
* Set your application with React up - ***WITHOUT CREATE-REACT-APP or similar***

</details>

## Assignment goal

<details>

The goal of this assignment is to set up a functioning React application, utilizing previously written code that now will have to undergo some refactorization, as well as using most of React's basic functionalities.

</details>

## Formal requirements

<details>

***KEEP IN MIND***
This task will require you to use your players/teams code - however, your HTML/CSS tasks are all themed differently. Try to make players/teams fit that theme - be it a team of hockey players, a team of random professions or familiada :)

Your application should utilize ***BOTH*** your HTML/CSS and JS projects, refactored accordingly.



***TECHNICAL REQUIREMENTS***
* your application will be available via **yarn dev**
* your JS assignment code - fake "backend" for this project - should now generate players and teams with information about them - name, surname, description  for players; team name, list of player names, description for teams
  * there should now be 1-3 second delay when requesting players/teams, ***per request, not per team/player***
  * there should be a 20% chance to get an error, ***per request, not per team/player***
  * loading state and error state must be handled appropriately
  * you should use either a short predefined list to generate from, or a specialized module (such as faker)
* upper navbar should contain two links - to a list of players and to a list of teams
  * your application should contain routing to accomodate this
* your application should fetch 2000 players/teams
* left navbar should now be a pagination component, used to navigate the whole list of players/teams, 20 per page for players, 10 per page for teams
 * you should split the whole list into pages locally
* clicking on "details" button should show a modal window with a bigger version of the card that will fit all the details that may be cut off in small-format cards
* Ramda must be utilized wherever possible
* components should be reusable where possible
* try to look for an optimal solution to problems that arise, especially regarding your bundler configuration
* player list should be sorted by player name and surname
* team list should be sorted by team name


</details>
