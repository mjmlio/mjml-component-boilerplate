import { BodyComponent } from 'mjml-core'

export default class Text extends BodyComponent {
  render() {
    return this.renderMJML(`
			<mj-text css-class="test-class">${this.getContent()}</mj-text>
		`)
  }
}
