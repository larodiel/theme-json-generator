import React, { Component } from 'react'

export default class AccordionItem extends Component {
  render() {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={this.props.headerID}>
          <button className="accordion-button text-uppercase display-6" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${this.props.panelID}`} aria-expanded="true" aria-controls={`panelsStayOpen-${this.props.panelID}`}>{this.props.title}</button>
        </h2>
        <div id={`panelsStayOpen-${this.props.panelID}`} className="accordion-collapse collapse" aria-labelledby={this.props.headerID}>
          <div className="accordion-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}