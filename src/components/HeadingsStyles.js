import React, { Component } from 'react';
import FontPicker from "font-picker-react";
import * as CONST from '../Constants';

export default class HeadingsStyles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "h1": {
        "unit": 'px',
        "value": 40,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "40px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h2": {
        "unit": 'px',
        "value": 30,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "30px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h3": {
        "unit": 'px',
        "value": 28,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "28px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h4": {
        "unit": 'px',
        "value": 24,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "24px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h5": {
        "unit": 'px',
        "value": 20,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "20px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h6": {
        "unit": 'px',
        "value": 15,
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "16px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      }
    }
  }

  changeValueHandler(event, state_heading, headingIdx) {
    let newValues = {};
    newValues[`h${headingIdx}`] = {
      ...state_heading,
      value: event.target.value,
      typography: {
        ...state_heading.typography,
        fontSize: event.target.value + state_heading.unit
      }
    };
    return newValues;
  }

  callback(element) {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(element);
    }
  }

  render() {
    return (
      <>
        <div className="headings-settings">
          <h2 className="display-6">Headings</h2>
          {(Object.keys(this.state).map((field, idx) => {
            const headingIdx = idx+1;
            const state_heading = this.state[`h${headingIdx}`];
            return(
              <fieldset key={idx}>
              <p className={`h${headingIdx} apply-font-heading${idx}`} style={state_heading.typography}>Heading {headingIdx}</p>
              <div className="input-group">
                <FontPicker
                  className='input-control form-select'
                  pickerId={`heading${idx}`}
                  apiKey={CONST.GFONTS_API}
                  activeFontFamily={state_heading.typography.fontFamily}
                  onChange={(fontFamily) => {
                    let newValues = {};
                    newValues[`h${headingIdx}`] = {
                      typography: {...state_heading.typography, ...{fontFamily: fontFamily.family}}
                    }
                    this.setState(newValues)
                    this.callback(this.state)
                  }}
                />
              </div>
              <div className="row align-items-center">
                <div className="col-7">
                  <input type="range" className="form-range" min="0" max="200" step="0.1" value={state_heading.value} onChange={event => {
                    const newState = this.changeValueHandler(event, state_heading, headingIdx)
                    this.setState(newState);
                    this.callback(this.state)
                  }} />
                </div>
                <div className="col-5">
                  <div className="input-group">
                    <input type="number" className="form-control" step="0.1" value={state_heading.value} onChange={event => {
                      const newState = this.changeValueHandler(event, state_heading, headingIdx)
                      this.setState(newState)
                      this.callback(this.state)
                    }} />

                    <select className="form-select" aria-label="Heading size" value={state_heading.unit} onChange={event => {
                      console.log(event.target.value)
                      let newValues = {};
                      newValues[`h${headingIdx}`] = {
                        ...state_heading,
                        unit: event.target.value,
                        typography: {
                          ...state_heading.typography,
                          fontSize: state_heading.value + event.target.value
                        }
                      };
                      this.setState(newValues)
                      setTimeout(() => {
                        this.callback(this.state)
                      }, 30);
                    }}>
                      {CONST.UNITS.map((unit, idx) => {
                        return(
                            (idx === 0)
                              ? (<option value={unit} defaultValue key={idx}>{unit}</option>)
                              : <option value={unit} key={idx}>{unit}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            )
          }))}
        </div>
      </>
    )
  }
}