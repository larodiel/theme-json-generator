import React, { Component } from 'react';
import FontPicker from "font-picker-react";
import * as CONST from '../Constants';

export default class HeadingsStyles extends Component {
  constructor(props) {
    super(props);

    if(props.heading === 'undefined') {
      console.error('the prop "heading" is required')
      return false;
    }

    this.state = {};

    const initialSize   = props.initialSize || 40;
    const initialFamily = props.initialFamily || "Roboto";

    this.state[props.heading] = {
      "unit": 'px',
      "value": initialSize,
      "typography": {
        "fontFamily": initialFamily,
        "fontSize": initialSize+"px",
        "lineHeight": "1.2",
        "fontWeight": "500"
      }
    }
  }

  changeValueHandler(event, state_heading) {
    let newValues = {};
    newValues[this.props.heading] = {
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
      //element['heading'] = this.props.heading;
      this.props.onChange(element);
    }
  }

  render() {
    const state_heading = this.state[this.props.heading];
    const heading = this.props.heading;
    return (
      <>
        <div className="heading-settings">
          <fieldset className="mb-4 mt-2">
            <p className={`${heading} apply-font-heading${heading}`} style={state_heading.typography}>Heading {heading}</p>
            <div className="input-group">
              <FontPicker
                className='input-control form-select'
                pickerId={`heading${heading}`}
                apiKey={CONST.GFONTS_API}
                activeFontFamily={state_heading.typography.fontFamily}
                onChange={(fontFamily) => {
                  let newValues = {};
                  newValues[heading] = {
                    typography: {...state_heading.typography, ...{fontFamily: fontFamily.family}}
                  }
                  this.callback(newValues)
                }}
              />
            </div>
            <div className="row align-items-center">
              <div className="col-7">
                <input type="range" className="form-range" min="0" max="200" step="0.1" value={state_heading.value} onChange={event => {
                  const newState = this.changeValueHandler(event, state_heading)
                  this.setState(newState);
                  this.callback(this.state)
                }} />
              </div>
              <div className="col-5">
                <div className="input-group">
                  <input type="number" className="form-control" step="0.1" value={state_heading.value} onChange={event => {
                    const newState = this.changeValueHandler(event, state_heading)
                    this.setState(newState)
                    this.callback(this.state)
                  }} />

                  <select className="form-select" aria-label="Heading size" value={state_heading.unit} onChange={event => {
                    let newValues = {};
                    newValues[heading] = {
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
          <hr />
        </div>
      </>
    )
  }
}