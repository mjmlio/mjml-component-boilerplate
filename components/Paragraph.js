import { BodyComponent } from 'mjml-core'

export default class Paragraph extends BodyComponent {
  render() {
    return this.renderMJML(`
     <mj-section>
        <mj-column>
          <text>${this.getContent()}</text>
        </mj-column>
      </mj-section>
    `)
  }
}
