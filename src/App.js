import React, { Component } from 'react';
//import SideMenu from "./components/slideMenu/index.js";
import Map from './components/Map/Map'

import { BrowserRouter} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false,
      places: {}
    };
  }

  handleChange(data) {
    this.setState({
      places: data
    })
  }

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  render() {


    return (
      <BrowserRouter>
        <div>
          <Map/>
         {/* <Switch>

          <Route  path="/map" render={() => <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
} />
} />
</Switch> */}
          <div className="App">
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;