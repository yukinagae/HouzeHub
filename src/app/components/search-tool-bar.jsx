let React = require('react');
let { Toolbar, ToolbarGroup, Styles, DropDownMenu, TextField, RaisedButton } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;

let stateOptions= [
    { payload: '1', text: 'New South Wales' },
    { payload: '2', text: 'Western Australia' },
    { payload: '3', text: 'Queensland' },
    { payload: '4', text: 'Northern Territory' },
    { payload: '5', text: 'South Australia' },
    { payload: '6', text: 'Victoria' },
    { payload: '7', text: 'Tasmania' },
    { payload: '8', text: 'Australian Capital Territory' },
    { payload: '9', text: 'Jervis Bay Territory' },
];

let regionOptions = [
    { payload: '1', text: 'Sydney Region' },
    { payload: '2', text: 'Hunter, Central & North Coasts' },
    { payload: '3', text: 'Illawarra & South Coast' },
    { payload: '4', text: 'Regional NSW' },
];

let kindOptions = [
    { payload: '1', text: 'House' },
    { payload: '2', text: 'Land' },
];

class SearchBar extends React.Component {

    getStyles() {
        return {
            cursor: 'pointer',
            color: Typography.textFullWhite,
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
        };
    }

    getWidthStyles() {
        return {
            width: '150px',
        };
    }

    render() {
        return (
          <Toolbar style={this.getStyles()}>
            <ToolbarGroup key={0} float="left">
              <DropDownMenu menuItems={stateOptions} />
            </ToolbarGroup>
            <ToolbarGroup key={1} float="left">
              <DropDownMenu menuItems={regionOptions} />
            </ToolbarGroup>
            <ToolbarGroup key={2} float="left">
              <DropDownMenu menuItems={kindOptions} />
            </ToolbarGroup>
            <ToolbarGroup key={3} float="left">
              <TextField hintText="Enter keyword..." style={this.getWidthStyles()} />
            </ToolbarGroup>
            <ToolbarGroup key={4} float="left">
              <RaisedButton label="Search" />
            </ToolbarGroup>
            <ToolbarGroup key={5} float="left">
              <RaisedButton label="Compare" />
            </ToolbarGroup>
          </Toolbar>
          );
    }

}

module.exports = SearchBar;
