import React, { Component } from 'react'

export default class HeaderNavigation extends Component {
  constructor(props) {
    super(props)

    let themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const storagedThememode = localStorage.getItem('thememode')
    if(storagedThememode) {
      themeMode = storagedThememode;
    }

    this.state = {
      theme: themeMode
    }

    this.themeModeChange = this.themeModeChange.bind(this);
    document.body.dataset.thememode = themeMode;
  }

  themeModeChange(target) {
    this.setState({
      theme: target.dataset.mode
    })

    localStorage.setItem('thememode', target.dataset.mode);
    document.body.dataset.thememode = target.dataset.mode;
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link text-uppercase" aria-current="page" href="#panelsStayOpen-paletteHeading">Colors Palette</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#panelsStayOpen-FontsHeading">Theme Font Families</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#panelsStayOpen-HeadingsHeader">Headings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#jsonfile">theme.json</a>
                </li>

                <li className="nav-item theme-mode">
                </li>
              </ul>
              <form action="">
                <div className="btn-group" role="group" aria-label="Theme mode">
                  <button data-mode='dark' className={`btn btn-secondary ${this.state.theme === 'dark' ? 'active' : ''}`} onClick={event =>{
                    event.preventDefault();
                    this.themeModeChange(event.target)
                  }}>Dark</button>
                  <button data-mode='light' className={`btn btn-primary ${this.state.theme !== 'dark' ? 'active' : ''}`} onClick={event => {
                    event.preventDefault();
                    this.themeModeChange(event.target)
                  }}>Light</button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}