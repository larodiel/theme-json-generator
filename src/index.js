import './scss/main.scss'

import React, { Component } from 'react'
import reactDom from "react-dom";
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ColorList from './components/color-list';
import FontList from './components/FontList';
import FontSizes from './components/FontSizes';
import HeadingStyle from './components/HeadingStyle';
import HeaderNav from './components/HeaderNavigation';
import AccordionItem from './components/Accordion';
import './libs/to-slug'
import share from './libs/share'
import themejsonDEMO from './theme';
import * as CONST from './Constants';

export default class ThemeFile extends Component {
	constructor(props) {
		super(props);

    let themeJson = themejsonDEMO;
    themeJson.settings.spacing.units = CONST.UNITS;

    const savedItems = {
      themeJson: localStorage.getItem('themeJson')
    }

    if(savedItems.themeJson) {
      themeJson = JSON.parse(savedItems.themeJson)
    }

    this.state = {
      themeJson: themeJson
    }
	}

  saveForm() {
    try {
      localStorage.setItem('themeJson', JSON.stringify(this.state.themeJson));
      window.alert('Form has been saved')
    } catch(err) {
      console.log(err)
    }
  }

  deleteItems() {
    if(window.confirm('Do you really want to delete ALL ITEMS?')) {
      this.setState({
        themeJson: themejsonDEMO
      });
      localStorage.clear();
    }
  }

  autoSave() {
    setInterval(() => {
      localStorage.setItem('themeJson', JSON.stringify(this.state.themeJson));
    }, 1000 * 30);
  }

  headingChangeHandler(heading) {
    const stateCopy = {...this.state.themeJson};
    stateCopy.styles.elements = {...stateCopy.styles.elements, ...heading}

    this.setState({
      themeJson: stateCopy
    })
  }

	render() {
    const fonts = this.state.themeJson.settings.typography.fontFamilies
    const headingItems = [1, 2, 3, 4, 5, 6];
    const themeSettings = this.state.themeJson.settings;
		return (
      <div>
        <HeaderNav />
        <div className="container">

          <div className="row pt-2" style={{minHeight:'100vh'}}>
            <div className="col-12 col-md-4">
              <div className="accordion">
                <AccordionItem headerID="paletteHeading" panelID="colorsPalette" title="Colors Pallete">
                  <div id="colors-palette">
                    <ColorList initalColors={themeSettings.color.palette} onChange={ colors => {
                      let newPalette = {...this.state.themeJson};
                      newPalette.settings.color.palette = colors

                      this.setState({
                        themeJson: newPalette
                      })
                    }} />
                  </div>
                </AccordionItem>
                <AccordionItem headerID="FontsHeading" panelID="ThemeFonts" title="Theme Fonts">
                  <div id="theme-fonts">
                    <FontList initialFonts={fonts} onChange={(fonts)=>{
                      let newFonts = {...this.state.themeJson};
                      newFonts.settings.typography.fontFamilies = fonts;

                      this.setState({
                        themeJson: newFonts
                      })
                    }} />
                  </div>
                </AccordionItem>
                <AccordionItem headerID="HeadingsHeader" panelID="Headings" title="Headings">
                  <div id="theme-headings">
                    <HeadingStyle heading="h1" initialFamily={this.state.themeJson.styles.elements.h1.typography.fontFamily} initialSize="40" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                    <HeadingStyle heading="h2" initialFamily={this.state.themeJson.styles.elements.h2.typography.fontFamily} initialSize="30" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                    <HeadingStyle heading="h3" initialFamily={this.state.themeJson.styles.elements.h3.typography.fontFamily} initialSize="28" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                    <HeadingStyle heading="h4" initialFamily={this.state.themeJson.styles.elements.h4.typography.fontFamily} initialSize="24" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                    <HeadingStyle heading="h5" initialFamily={this.state.themeJson.styles.elements.h5.typography.fontFamily} initialSize="20" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                    <HeadingStyle heading="h6" initialFamily={this.state.themeJson.styles.elements.h6.typography.fontFamily} initialSize="15" onChange={heading => {
                      this.headingChangeHandler(heading)
                    }} />
                  </div>
                </AccordionItem>
                <AccordionItem headerID="fontsSizesHeader" panelID="fontsSizes" title="Font Sizes">
                  <FontSizes onChange={sizes => {
                    const stateCopy = {...this.state.themeJson};
                    stateCopy.settings.typography.fontSizes = sizes

                    this.setState({
                      themeJson: stateCopy
                    })
                  }} />
                </AccordionItem>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <>
                <p className="h3">Preview</p>
                {headingItems.map((field, idx) => {
                  return (
                    <div className="heading-item" key={`heading-${idx}`}>
                      <p className="lead">H{field}</p>
                      <p className={`h${field}`} style={this.state.themeJson.styles.elements[`h${field}`].typography}>Heading {field}</p>
                      <hr />
                    </div>
                  )
                })}
              </>
            </div>
          </div>
          <div className="json-file" id="jsonfile">
          <hr className="mt-5" />
          <h2 className="display-6">theme.json</h2>
          <div style={{maxHeight:500, overflow: 'auto'}}>
            <SyntaxHighlighter language="json" style={a11yDark}>
              {JSON.stringify(this.state.themeJson, null,'\t')}
            </SyntaxHighlighter>
          </div>
        </div>
          <div className="btn-floating d-grid gap-2 mt-5 mb-3" style={{gridTemplateColumns : '1fr'}}>
            <div className="btn-group" role="group" aria-label="Action buttons">
              <button className="btn btn-primary" type="button" onClick={()=>{ this.saveForm() }}><i className="bi bi-save"></i> Save</button>
              <button className="btn btn-danger" type="button" onClick={() => {this.deleteItems()}}><i className="bi bi-trash2"></i> Clear Fields</button>
              <button className="btn btn-primary" type="button" onClick={(event) => {
                if (navigator.share) {
                  navigator.share({
                    title: document.title,
                    url: window.location.href
                  }).then(() => {
                    window.alert('Thanks for sharing!');
                  })
                  .catch(console.error);
                } else {
                  share('twitter')
                }
              }}><i className="bi bi-share"></i> Share</button>
            </div>
          </div>
        </div>
			</div>
		);
	}
}

reactDom.render(
  <ThemeFile />,
  document.getElementById('root')
);