/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let AppLeftNav = require('./app-left-nav');
let { AppBar, AppCanvas, IconButton, Menu, Styles } = require('material-ui');
let { Colors, Typography } = Styles;
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
        title="HouzeHub"
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        />

      <AppLeftNav ref="leftNav" />

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
