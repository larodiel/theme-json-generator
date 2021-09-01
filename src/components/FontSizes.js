import { Component } from 'react';
import AccordionItem from './Accordion';
import themejsonDEMO from '../theme';
import * as CONST from '../Constants';
import '../libs/to-slug'

export default class FontSizes extends Component {
  constructor(props) {
    super(props)
    const sizes = themejsonDEMO.settings.typography.fontSizes;

    for (let i = 0, c = sizes.length; i < c; i++) {
      if(typeof sizes[i].unit === 'undefined') {
        sizes[i].unit = 'px'
      }
    }

    this.state = {
      sizes: sizes
    }

    this.callback = this.callback.bind(this);
  }

  callback() {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(this.state.sizes);
    }
  }

  render() {
    return (
      <>
        <div className="accordion">
          {
            this.state.sizes.map((field, idx) => {
              const fontSize = this.state.sizes[idx];
              const fontSizeInt = fontSize.size.replace(/([^\W\d_]|%)+/, "");
              return (
                <AccordionItem key={idx} headerID={`${fontSize.slug}Heading`} panelID={`${fontSize.slug}Panel`} title={fontSize.name}>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" defaultValue={fontSize.name} placeholder="Name" onChange={event => {
                      let sizesState = [...this.state.sizes];
                      sizesState[idx].name = event.target.value;
                      sizesState[idx].slug = event.target.value.to_slug();
                      this.setState({
                        sizes: sizesState
                      });
                      this.callback()
                    }}/>
                    <input type="number" style={{maxWidth: 80}} className="form-control" step="0.1" defaultValue={fontSizeInt} aria-label="Font Size Unit" onChange={event => {
                      let sizesState = [...this.state.sizes];
                      sizesState[idx].size = event.target.value + `${sizesState[idx].unit}`;
                      this.setState({
                        sizes: sizesState
                      });
                      this.callback()
                    }} />
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{fontSize.unit}</button>
                    <ul className="dropdown-menu">
                      {CONST.UNITS.map((unit, unitidx) => {
                        return(
                          <li key={unitidx}><a className="dropdown-item" href={`#${unit}`} data-unit={unit} onClick={event => {
                            event.preventDefault();
                            let sizesState = [...this.state.sizes];
                            sizesState[idx].unit = event.target.dataset.unit;
                            this.setState({
                              sizes: sizesState
                            });
                            this.callback()
                          }}>{unit}</a></li>
                        );
                      })}
                    </ul>
                  </div>

                  <p style={{fontSize: `${fontSizeInt}${fontSize.unit}`}}>
                    Cake sweet marshmallow pie jelly-o apple pie apple pie gummi bears dragée. Chocolate ice cream donut powder macaroon halvah cheesecake.
                  </p>
                </AccordionItem>
              )
            })
          }
        </div>
      </>
    )
  }
}