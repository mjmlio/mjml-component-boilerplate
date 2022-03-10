import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import Section from 'mjml-section'
import Column from 'mjml-column'
import Text from 'mjml-text'

// Tag Name
const tagName = 'heading'
// List of parent tags
const parentTag = ['mj-wrapper']
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = true
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    'text':'',
    'column-width':'480px',
    'background-color':"#ffffff",
    'padding': '0 30px 0 30px',
    'content-padding': '0 0',
  },
}

@MJMLElement
class Heading extends Component {
  renderHeading () {
    const { mjContent, mjAttribute } = this.props
    return (
      <Column key="content" width={mjAttribute('column-width')}>
        <Text  {...this.props} padding={mjAttribute('content-padding')}>
          <h1 className="text-primary">{ mjAttribute('text') }</h1>
        </Text>
      </Column>
    )
  }
  render () {
    const { mjAttribute } = this.props
    const column = this.renderHeading()

    return (
      <Section {...this.props}>
        { column }
      </Section>
    )

  }

}

Heading.tagName = tagName
Heading.parentTag = parentTag
Heading.endingTag = endingTag
Heading.defaultMJMLDefinition = defaultMJMLDefinition

export default Heading
