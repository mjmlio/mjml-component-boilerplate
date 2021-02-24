import reverse from 'lodash/reverse'

import { BodyComponent } from 'mjml-core'

export default class MjImageText extends BodyComponent {
  static endingTag = true

  static dependencies = {
    'mj-image-text': [],
    'mj-body': ['mj-image-text'],
    'mj-wrapper': ['mj-image-text'],
  }
  
  /*
    We could obviously handle all the attributes accepted for Mj Section,
    Column, Image and Text, but let's keep it simple for this example.
  */
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
    'color': 'white',
    'font-size': '10px',
    'image-padding': 0,
    'image-src': null,
    'image-width': null,
    'column-width': '50%',
  }

  renderImage() {
    return `
      <mj-column
        ${this.htmlAttributes({
          width: this.getAttribute('column-width'),
          'background-color': this.getAttribute('background-color')
        })}
      >
        <mj-image
          ${this.htmlAttributes({
            padding: this.getAttribute('image-padding'),
            src: this.getAttribute('image-src'),
            width: this.getAttribute('image-width'),
          })}
        >
        </mj-image>
    </mj-column>
    `
  }

  renderText() {
    return `
      <mj-column
        ${this.htmlAttributes({
          width: this.getAttribute('column-width'),
          'background-color': this.getAttribute('background-color')
        })}
      >
        <mj-text
          ${this.htmlAttributes({
            color: this.getAttribute('color'),
            'font-size': this.getAttribute('font-size'),
          })}
        >
          ${this.getContent()}
        </mj-text>
      </mj-column>
    `
  }

  render() {
    const content = [this.renderText(), this.renderImage()]
    const orderedContent = this.getAttribute('image-position') === 'right' ? content : reverse(content)

    return this.renderMJML(`
			<mj-section
        ${this.htmlAttributes({
          'background-color': this.getAttribute('background-color')
        })}
      >
        ${orderedContent}
			</mj-section>
		`)
  }
}
