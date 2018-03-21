# mjml-component-boilerplate

A boilerplate to quickly get started when creating your own component.  

You can check the three examples in */components*.  
Each of them introduce new features, so they should be checked in this order : MjBasicComponent, MjImageText, MjLayout.  
For more complex examples you can check the existing components' code (mj-carousel is a nice one).

## Getting started

* Clone the repo
* `npm install` inside
* Add your component inside `components` folder
* Add your component to the registrations in gulpfile.babel.js
* Use your own component in `index.mjml` (or uncomment if you want to test the ones already created)
* `npm run build` to build, or `npm start` if you want to watch recompile on each file change
* Result will be in `index.html`


## Later use of your component

### In Node.js
```
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MyComponent from './components/MyComponent'

registerComponent(MyComponent)

const { html, errors } = mjml2html(mjmlString)
```

### With the cli

*In Progress*
