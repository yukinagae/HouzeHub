/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let { AppBar, AppCanvas, IconButton, Menu, Styles } = require('material-ui');
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

class Main extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    }
  }

  render() {

    return (
      <AppCanvas>
        <AppBar title="HouzeHub"/>

      </AppCanvas>
    );
  }

}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

module.exports = Main;
