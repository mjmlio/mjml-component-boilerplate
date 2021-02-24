import { BodyComponent } from 'mjml-core'

/*
  This component is an example of layout, which uses existing mjml components
  and can take some as children.
  It also introduces the two 'headStyle' functions
*/
export default class MjLayout extends BodyComponent {
  /* 
    Notice we don't put "static endingTag = true" here,
    because we want this tag's content to be parsed as mjml.
    Examples of non-endingTags are mj-section, mj-column, etc.
  */
  
  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 9) + 1
  }
  
  static dependencies = {
    // Tell the validator which tags are allowed as our component's children
    'mj-layout': [
      'mj-accordion',
      'mj-button',
      'mj-carousel',
      'mj-divider',
      'mj-html',
      'mj-image',
      'mj-raw',
      'mj-social',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-navbar'
    ],
    // Now tell the validator which tags are allowed as our component's parent
    'mj-wrapper': ['mj-layout'],
    'mj-body': ['mj-layout'],
  }

  // Tells the validator which attributes are allowed for mj-layout
  static allowedAttributes = {
    'background-color': 'color',
    color: 'color'
  }

  // Exactly what the name suggests. Fallback value for this.getAttribute('attribute-name').
  static defaultAttributes = {
    'background-color': 'white',
    color: 'black'
  }

  /*
    This function allows to pass css directly to the <head>
    Mostly useful for adding media queries
    This css will only be added once even if the component is used multiple times
  */
  headStyle = breakpoint => `
      .mj-layout {
        border: 10px solid black !important;
      }
      @media only screen and (max-width:${breakpoint}) {
        .mj-layout {
          border-color: blue !important;
        }
      }
    `

  /*
    This function allows to pass css directly to the <head>
    This css will be added once for each instance of this component
    This allows to specify css for each instance depending on attributes
    See mj-carousel component for a nice exemple of what we can do with this
  */
  componentHeadStyle = breakpoint => {
    return `
      @media only screen and (max-width:${breakpoint}) {
        .mj-layout-${this.cssId} {
          width: ${this.cssId * 60}px !important;
        }
      }
    `
  }

  render() {
    /*
      Components are supposed to return html. If we want to return mjml so as to
      use existing components, we need to process it manually using this.renderMJML()
    */
    return this.renderMJML(`
			<mj-section css-class="mj-layout mj-layout-${this.cssId}">
				<mj-column background-color="${this.getAttribute('background-color')}">
					${this.renderChildren(
            this.props.children,
            {
              /* The rawXML option prevents processing on children : we already call this.renderMJML on the whole block so we don't want the children to be processed twice */
              rawXML: true,
              /* The renderer option allows to use a specific rendering function, or wrap each child if needed. Below is the default, see mj-column code for an example of this. */
              renderer: component => component.render,
            }
          )}
				</mj-column>
			</mj-section>
		`)
  }
}
