import React, { Component } from 'react'
import '../libs/to-slug'
const ntc = require('ntcjs');

export default class ColorList extends Component {
  constructor(props) {
    super(props)

    let colors = [{ name:'White', color: '#ffffff', slug: 'white'}];
    if(typeof props.initalColors !== 'undefined' && (typeof props.initalColors === "object") && props.initalColors.length > 0) {
      colors = props.initalColors;
    }

    this.state = {
      colors: colors
    }
  }

  removeItem = (e) => {
    const idx = e.target.dataset.idx;
    const items = [...this.state.colors];
    items.splice(idx, 1);
    this.setState({
      colors: items
    })
    this.callback()
  }

  colorChange = (e) => {
    const idx = e.target.dataset.idx;
    const color = e.target.value;
    const colorsAux = [...this.state.colors];
    const colorName = ntc.name(color)[1];

    colorsAux[idx] = {
      color: color,
      name: colorName,
      slug: colorName.to_slug()
    }

    this.setState({
      colors: colorsAux
    })
    this.callback()
  }

  colorNameChange = (e) => {
    const idx = e.target.dataset.idx;
    const colorsAux = [...this.state.colors];
    colorsAux[idx].name = e.target.value;
    colorsAux[idx].slug = colorsAux[idx].name.to_slug();
    this.setState({
      colors: colorsAux
    })
    this.callback()
  }

  ColorFields = (props) => {
    return (
      <li className="input-group mb-3">
        <input type="color" className="form-control form-control-color" value={this.state.colors[props.idx].color} data-idx={props.idx} onChange={this.colorChange} />
        <input type="text" className="form-control" value={this.state.colors[props.idx].name} placeholder="Color Name" data-idx={props.idx} onChange={this.colorNameChange} />
        <span className="input-group-text" data-idx={props.idx} style={{'cursor': 'pointer'}} onClick={this.removeItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg>
        </span>
      </li>
    )
  };

  callback = () => {
    if(typeof this.props.onChange === 'function') {
      setTimeout(() => {
        this.props.onChange(this.state.colors);
      }, 50);
    }
  }

  render() {
    return (
      <>
        <div className="colors-list" onChange={this.callback}>
          <ul className="colors list-unstyled">
            {this.state.colors.map((el, idx) => {
              return (
                <React.Fragment key={`colorFieldsList${idx}`}>
                  <this.ColorFields idx={idx} val={this.state.colors[idx]} />
                </React.Fragment>
              )
            })}
          </ul>
          <button className="btn btn-primary" onClick={(e)=> {
            this.setState({
              colors: [...this.state.colors, { name:'White', color: '#ffffff', slug: "white"}]
            })
            this.callback()
          }}><i className='bi bi-plus-square'></i> ADD ITEM</button>
        </div>
      </>
    )
  }
}