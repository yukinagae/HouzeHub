/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let AppLeftNav = require('./app-left-nav');
let SearchToolBar = require('./search-tool-bar');
let Cards = require('./cards');
let { AppBar, AppCanvas, Styles } = require('material-ui');
let ThemeManager = new Styles.ThemeManager();

class Main extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    }
  }

  render() {

    return (
      <AppCanvas>
        <AppBar
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        >
        <SearchToolBar />
        </AppBar>

      <AppLeftNav ref="leftNav" />
      <Cards />
      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

module.exports = Main;
