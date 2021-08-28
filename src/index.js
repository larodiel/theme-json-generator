import React, { Component } from 'react'
import reactDom from "react-dom";
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ColorList from './components/color-list';
import FontList from './components/FontList';
import './libs/to-slug'

export default class ExampleComponent extends Component {
	constructor(props) {
		super(props);

    let colors = [];
    let themeJson = {
      "version": 1,
      "settings" : {
        "colors" : {
          "palette": []
        },
        "typography": {
          "fontFamilies": [],
          "fontSizes": []
        }
      }
    }

    const savedItems = {
      colors: localStorage.getItem('colors'),
      themeJson: localStorage.getItem('themeJson')
    }

    if(savedItems.colors) {
      colors = JSON.parse(savedItems.colors)
    }

    if(savedItems.themeJson) {
      themeJson = JSON.parse(savedItems.themeJson)
    }

    this.state = {
      colors: colors,
      themeJson: themeJson
    }
    setTimeout(() => {
      this.autoSave();
    }, 1000);
	}

  saveForm() {
    try {
      localStorage.setItem('colors', JSON.stringify(this.state.colors));
      localStorage.setItem('themeJson', JSON.stringify(this.state.themeJson));
      window.alert('Form has been saved')
    } catch(err) {
      console.log(err)
    }
  }

  deleteItems() {
    if(window.confirm('Do you really want to delete ALL ITEMS?')) {
      this.setState({
        colors: [],
        themeJson: {
          "version": 1,
          "settings" : {
            "colors" : {
              "palette": []
            },
            "typography": {
              "fontFamilies": [],
              "fontSizes": []
            }
          }
        }
      });
      localStorage.clear();
    }
  }

  autoSave() {
    setInterval(() => {
      localStorage.setItem('colors', JSON.stringify(this.state.colors));
    }, 1000 * 30);
  }

	render() {
    let fonts = this.state.themeJson.settings.typography.fontFamilies
		return (
      <div>
        <div className="row" style={{minHeight:'calc(100vh - 120px)'}}>
          <div className="col-12 col-md-6">
            <div id="theme-colors">
              <h2 className="display-6 mb-4">Palette Colors</h2>
              <ColorList initalColors={this.state.colors} onChange={ colors => {
                let newColors = [...this.state.colors];
                let newPalette = {...this.state.themeJson};
                newColors = colors
                newPalette.settings.colors.palette = colors

                this.setState({
                  colors: newColors,
                  themeJson: newPalette
                })
              }} />
            </div>
            <hr className='mt-5 mb-4' />
            <div id="theme-fonts">
              <h2 className="display-6 mb-4">Theme Fonts</h2>
              <FontList initialFonts={fonts} onChange={(fonts)=>{
                let newFonts = {...this.state.themeJson};
                newFonts.settings.typography.fontFamilies = fonts;

                this.setState({
                  themeJson: newFonts
                })
              }} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="display-6">theme.json</h2>
            <>
              <SyntaxHighlighter language="json" style={a11yDark}>
                {JSON.stringify(this.state.themeJson, null,'\t')}
              </SyntaxHighlighter>
            </>
          </div>
        </div>
        <div className="d-grid gap-2 mt-5 mb-3" style={{gridTemplateColumns : '1fr 1fr'}}>
          <button className="btn btn-primary" type="button" onClick={()=>{ this.saveForm() }}>Save</button>
          <button className="btn btn-primary" type="button" onClick={() => {this.deleteItems()}}>Clear Fields</button>
        </div>
			</div>
		);
	}
}

reactDom.render(
  <ExampleComponent blabal="asdsad" />,
  document.getElementById('root')
);