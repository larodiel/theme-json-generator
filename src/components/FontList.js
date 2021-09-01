import React, { Component } from 'react';
import FontPicker from "font-picker-react";
import AccordionItem from './Accordion';
import * as CONST from '../Constants';

export default class FontList extends Component {
  constructor(props) {
    super(props);
    let fontFamilies = [{
        "fontFamily": "Lato",
        "slug": "lato",
        "name": "Lato"
      }];
    if(props.initialFonts) {
      fontFamilies = props.initialFonts;
    }

    this.state = {
      fontFamilies: fontFamilies
    }
  }

  callback() {
    if(typeof this.props.onChange === 'function') {
      setTimeout(() => {
        this.props.onChange(this.state.fontFamilies);
      }, 50);
    }
  }

  render() {
    return (
      <>
        <ul className="list-unstyled accordion accordion-flush font-accordion" onChange={this.callback}>
          {this.state.fontFamilies.map((el, idx) => {
            return (
              <div key={idx}>
                <AccordionItem headerID={`heading-${idx}`} panelID={`collapse-${idx}`} title={this.state.fontFamilies[idx].name}>
                  <div className="input-group">
                    <FontPicker
                      className='form-control form-select'
                      pickerId={`fp${idx}`}
                      apiKey={CONST.GFONTS_API}
                      activeFontFamily={this.state.fontFamilies[idx].name}
                      onChange={(fontFamily) => {
                        let chosenFont = [...this.state.fontFamilies]
                        chosenFont[idx] = {
                          "name": fontFamily.family,
                          "slug": fontFamily.id,
                          "fontFamily": `${fontFamily.family}, ${fontFamily.category}`
                        }
                        this.setState({
                          fontFamilies: chosenFont
                        })
                        this.callback()
                      }}
                    />
                    <span className="input-group-text" data-idx={idx} style={{'cursor': 'pointer'}} onClick={()=>{
                      const fonts = [...this.state.fontFamilies];
                      fonts.splice(idx, 1);
                      this.setState({
                        fontFamilies: fonts
                      })
                      this.callback()
                    }}><i className="bi bi-dash-square"></i></span>
                </div>
                  <p className={`apply-font-fp${idx} mt-5 mb-3`} style={{fontSize: 18 }}>
                    Cake sweet marshmallow pie jelly-o apple pie apple pie gummi bears dragée. Chocolate ice cream donut powder macaroon halvah cheesecake. Sweet carrot cake gummies cotton candy chupa chups gummies pie carrot cake gingerbread. Jelly sweet roll jujubes wafer powder.
                  </p>
                </AccordionItem>
              </div>
            )
          })}
        </ul>
        <button className="btn btn-primary" onClick={(e)=> {
          this.setState({
            fontFamilies: [...this.state.fontFamilies, { name:'Lato', fontFamily: 'Lato', slug: 'lato'}]
          })
          this.callback()
        }}><i className="bi bi-plus-square"></i> ADD ITEM</button>
      </>
    )
  }
}