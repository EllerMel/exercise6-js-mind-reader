# Mind Reader Exercise

### Description

Create a webapp that plays a game with the user to *read their mind*

### MVP (Minimum Viable Product)

By default, the app should prompt the user to click through the app and see a new view for every step

You need to be able to scroll through the numbers to see your symbol (page 5 on the wireframe)

#### Wireframe

See [wireframe](https://xd.adobe.com/view/d4197d89-2c18-4e0e-5a01-c4ad9240fbc2-a228/)

#### Tech Stack

1. HTML
2. CSS
3. JS

### Objectives

To complete the assignment, you must complete the following:
###### Setup:
1. Fork repo `exercise6-js-mind-reader`
2. Locally, navigate to your `Sites` folder in the terminal
3. `git clone` + `your-repo-name` into your Sites folder
4. Create a `dev` branch to commit your code to
5. Create necessary files for application
6. Import necessary css/js files (Bootstrap)

###### Optional Setup for eslint
1. in your repo top directory, 
2. `npm init`
3. `eslint --init`
4. add the following line to your `.gitignore`
   1. `node_modules/`

###### Develop:
1. Add content and elements to your website
2. View changes locally with MAMP (localhost)
3. Save often, and commit to github when important changes happen
###### Deploy:
1. Push your code to Github remote
2. Post links to your Github repo to the [exercises Slack channel](https://bootcamp-s19.slack.com/messages/CGD9QUH6E/)

### Application file structure

Minimally:

```
web/
    index.html - main page (only one page for this exercise)
    css/ - folder to contain CSS files
        /style.css - stylesheet
    img/ - folder to contain any images
    js/ - folder to contain JavaScript files
        /main.js
README.md - any important information
.gitignore - file that omits any directory/file from being tracked
```

It is okay if your project has more files and more directories, but at the least you need the ones listed above, and you must only have one index.html

### Requirements

Use javascript to successfully show the animation transitions

Successfully show state management for each step ( page 1, 2 3 ..) without refreshing the page, this means that you will only create a single index.html

The restart button refreshes the page

Use [https://fontawesome.com/icons](https://fontawesome.com/icons)

All multiples of 9 will be the same symbol

Website must be responsive

### Remember to push to Github!

Your repo should be public so that others can see your code and comment on it.

### If you finish early...
1. Improve error messaging to be more specific to the terminal.
2. Add info to your projects README.md [README.md Best Practices](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

**If you get stuck...**
- [Class Resources Repo](https://github.com/bootcamp-s19/Resources#resources)
- Ask. :-)

**Additional Resouces**
- [Learn JS](https://www.w3schools.com/js/)

For more information about using API's, see these articles:

- [W3 schools local storage](https://www.w3schools.com/html/html5_webstorage.asp)
- [Bootstrap hide element](https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements)
- [JavaScript Transitions](https://css-tricks.com/controlling-css-animations-transitions-javascript/)
