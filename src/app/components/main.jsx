/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let AppLeftNav = require('./app-left-nav');
let { AppBar, AppCanvas, IconButton, Menu, Styles, Toolbar, ToolbarGroup, DropDownMenu, TextField, RaisedButton } = require('material-ui');
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

let filterOptions = [
    { payload: '1', text: 'All Broadcasts' },
    { payload: '2', text: 'All Voice' },
    { payload: '3', text: 'All Text' },
    { payload: '4', text: 'Complete Voice' },
    { payload: '5', text: 'Complete Text' },
    { payload: '6', text: 'Active Voice' },
    { payload: '7', text: 'Active Text' },
];

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

  getStyles() {
    return {
      cursor: 'pointer',
      color: Typography.textFullWhite,
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
    };
  }

  render() {

    return (
      <AppCanvas>
        <AppBar
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        >
          <Toolbar style={this.getStyles()}>
            <ToolbarGroup key={0} float="left">
              <DropDownMenu menuItems={filterOptions} />
            </ToolbarGroup>
            <ToolbarGroup key={1} float="left">
              <DropDownMenu menuItems={filterOptions} />
            </ToolbarGroup>
            <ToolbarGroup key={2} float="left">
              <TextField hintText="Hint Text" />
            </ToolbarGroup>
            <ToolbarGroup key={3} float="left">
              <RaisedButton label="Search" />
            </ToolbarGroup>
          </Toolbar>
        </AppBar>

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
