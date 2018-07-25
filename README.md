# mjml-component-boilerplate

A boilerplate to quickly get started when creating your own component.  

3 examples can be found in */components*. Each of them introduce new features, so they should be checked in this order : MjBasicComponent, MjImageText, MjLayout.

For more complex examples, have a look at standard MJML components code such as [mj-carousel](https://github.com/mjmlio/mjml/tree/master/packages/mjml-accordion).

## Getting started

A step-by-step tutorial is available [here](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36).

* Clone the repo
* `npm install` inside
* Add your component inside `components` folder
* Add your component to the registrations in gulpfile.babel.js
* Use your own component in `index.mjml`
* `npm run build` to build, or `npm start` if you want to watch recompile on change you make (to your component or to `index.mjml`)
* The result will be outputted in `index.html`


## Later use of your component

### In Node.js
```js
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MyComponent from './components/MyComponent'

registerComponent(MyComponent)

const { html, errors } = mjml2html(mjmlString)
```

### With the cli

Using custom components with the CLI is not ready yet.
