import reverse from 'lodash/reverse'

import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
registerDependencies({
  'mj-image-text': [],
  'mj-section': ['mj-image-text']
})

export default class MjImageText extends BodyComponent {

  static allowedAttributes = {
    'background-color': 'color',
    'image-position': 'enum(left,right)',
    'color': 'color',
    'font-size': 'unit(px)',
    'image-padding': 'unit(px){4}',
    'image-src': 'string',
    'image-width': 'unit(px,%)',
    'column-width': 'unit(px,%)',
  }

  static defaultAttributes = {
    'background-color': null,
    'image-position': 'right',
    'color': 'blue',
    'font-size': '10px',
    'image-padding': 0,
    'image-src': null,
    'image-width': null,
    'column-width': '50%',
  }

  renderImage() {
    return `
      <mj-image
        ${this.htmlAttributes({
          'image-padding': this.getAttribute('image-padding'),
          'image-src': this.getAttribute('image-src'),
          'image-width': this.getAttribute('image-width'),
        })}
      >
      </mj-image>
    `
  }

  renderText() {
    return `
      <mj-text
        ${this.htmlAttributes({
          color: this.getAttribute('color'),
          'font-size': this.getAttribute('font-size'),
        })}
      >
        ${this.getContent()}
      </mj-text>
    `
  }

  render() {
    /*
      Components are supposed to return html. If we want to return mjml so as to
      use existing components, we need to process it manually using this.renderMJML()
    */
    const content = [this.renderText(), this.renderImage()]
    const orderedContent = this.getAttribute('image-position') === 'right' ? content : reverse(content)

    return this.renderMJML(`
			<mj-column
        ${this.htmlAttributes({ // This is the recommended way to pass attributes to a tag
          width: this.getAttribute('column-width'),
          'background-color': this.getAttribute('background-color')
        })}
      >
        ${orderedContent}
			</mj-column>
		`)
  }
}
