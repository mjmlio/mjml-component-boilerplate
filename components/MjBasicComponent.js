import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-basic-component'],
  'mj-column': ['mj-basic-component'],
  // Tell the validator which tags are allowed as our component's children
  'mj-basic-component': []
})

/*
  Our component is a (useless) simple text tag, that adds colored stars around the text.
  It can take 3 attributes, to specify size and colors.
*/
export default class MjBasicComponent extends BodyComponent {
  // Tell the parser that our component won't contain other mjml tags
  static endingTag = true

  // Tells the validator which attributes are allowed for mj-layout
  static allowedAttributes = {
    'stars-color': 'color',
    'color': 'color',
    'font-size': 'unit(px)'
  }

  // What the name suggests. Fallback value for this.getAttribute('attribute-name').
  static defaultAttributes = {
    'stars-color': 'yellow',
    color: 'black',
    'font-size': '12px'
  }

  /*
    Render is the only required function in a component.
    It must return an html string.
  */
  render() {
    return `
      <div
        ${this.htmlAttributes({ // this.htmlAttributes() is the recommended way to pass attributes to html tags
          'font-size': this.getAttribute('font-size'), // this.getAttribute(attrName) is the recommended way to access the attributes our component received in the mjml
          color: this.getAttribute('stars-color')
        })}
      >
        <span>★</span>
        <span
          ${this.htmlAttributes({
            color: this.getAttribute('color')
          })}
        >
          ${this.getContent()}
        </span>
        <span>★</span>
      </div>
		`
  }
}
