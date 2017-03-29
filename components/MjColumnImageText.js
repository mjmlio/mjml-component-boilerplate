import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import reverse from 'lodash/reverse'
import Section from 'mjml-section'
import Column from 'mjml-column'
import Image from 'mjml-image'
import Text from 'mjml-text'

// Tag Name
const tagName = 'mj-column-image-text'
// List of parent tags
const parentTag = ['mj-container']
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = false
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    'direction': 'left',
    'color': 'blue',
    'font-size': '10px',
    'image-padding': 0,
    'image-src': null,
    'image-width': null,
    'column-width': '50%',
    'text': '',
  },
}

@MJMLElement
class ColumnImageText extends Component {

  renderImage () {
    const { mjAttribute } = this.props

    return (
      <Column key="image" width={mjAttribute('column-width')}>
        <Image
          padding={mjAttribute('image-padding')}
          width={mjAttribute('image-width')}
          src={mjAttribute('image-src')}
        />
      </Column>
    )
  }

  renderContent () {
    const { mjAttribute } = this.props

    return (
      <Column key="content" width={mjAttribute('column-width')}>
        <Text font-size={mjAttribute('font-size')} color={mjAttribute('color')}>
          { mjAttribute('text') }
        </Text>
      </Column>
    )
  }

  render () {
    const { mjAttribute } = this.props
    const columns = [this.renderImage(), this.renderContent()]

    return (
      <Section {...this.props}>
        { mjAttribute('direction') == 'right' ? reverse(columns) : columns }
      </Section>
    )

  }

}

ColumnImageText.tagName = tagName
ColumnImageText.parentTag = parentTag
ColumnImageText.endingTag = endingTag
ColumnImageText.defaultMJMLDefinition = defaultMJMLDefinition

export default ColumnImageText
