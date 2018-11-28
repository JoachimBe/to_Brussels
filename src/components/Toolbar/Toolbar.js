import React from 'react';

import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
               
            </div>
            <div className="toolbar-logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
              <h2 className="titre-milieu">TO BRUSSELS</h2>
            </div>
        </nav>
    </header>
);

export default Toolbar;