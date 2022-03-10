import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import Section from 'mjml-section'
import Column from 'mjml-column'
import Image from 'mjml-image'

// Tag Name
const tagName = 'header'
// List of parent tags
const parentTag = ['mj-wrapper']
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = false
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    'theme': '',
    'column-width': '480px',
    'background-color': '#ffffff',
    'border-radius': '8px 8px 0 0',
    'padding': '0 15px 0 15px',
    'logo-border-bottom': '1px solid #d8d8d8'
  },
}

@MJMLElement
class Header extends Component {
  renderLogoLeap() {
    return (
      <Image
        padding='25px 0 25px 0'
        width='104px'
        height='30'
        src='https://cdn.test.leap.com.au/gui/images/leap/brand-navbar.png'
        href='http://www.leap.com.au/'
        title='LEAP Legal Software'
        alt='LEAP Legal Software'
      />
    )
  }
  renderLogoEasysoft() {
    return (
      <Image
        padding='11px 0 11px 0'
        width='122px'
        height='58'
        src='https://cdn.leap.com.au/gui/images/easy-soft/logo-blue.png'
        href='http://www.easysoft-usa.com/'
        title='Easy Soft, Inc.'
        alt='Easy Soft, Inc.'
      />
    )
  }
  renderLogoTitlex() {
    return (
      <Image
        padding='24px 0 24px 0'
        width='158px'
        height='60'
        src='https://cdn.test.titlex.com.au/gui/images/titlex/logo-dark.png'
        href='https://titlex.com.au/'
        title='TitleX'
        alt='TitleX'
      />
    )
  }
  renderLogoLawConnnect() {
    return (
      <Image
        padding='25px 0 25px 0'
        width='230px'
        height='30'
        src='https://cdn.leap.com.au/gui/images/lawconnect/logo-blue.png'
        href='https://lawconnect.com.au'
        title='LawConnect'
        alt='LawConnect'
      />
    )
  }
  renderLogo () {
    const { mjAttribute } = this.props
    return (
      <Column key="logo" border-bottom={mjAttribute('logo-border-bottom')} width={mjAttribute('column-width')}>
      {(() => {
        switch (mjAttribute('theme')) {
          case 'leap':
            return this.renderLogoLeap();
          case 'easysoft':
            return this.renderLogoEasysoft();
          case 'titlex':
            return this.renderLogoTitlex();
          case 'lawconnect':
            return this.renderLogoLawConnnect();
          default:
            return null;
        }
      })()}
      </Column>
    )
  }
  render () {
    const { mjAttribute } = this.props
    const column = this.renderLogo()

    return (
      <Section {...this.props}>
        { column }
      </Section>
    )

  }

}

Header.tagName = tagName
Header.parentTag = parentTag
Header.endingTag = endingTag
Header.defaultMJMLDefinition = defaultMJMLDefinition

export default Header
