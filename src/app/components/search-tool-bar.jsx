let React = require('react');
let { Toolbar, ToolbarGroup, Styles, DropDownMenu, TextField, RaisedButton } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;

let filterOptions = [
    { payload: '1', text: 'All Broadcasts' },
    { payload: '2', text: 'All Voice' },
    { payload: '3', text: 'All Text' },
    { payload: '4', text: 'Complete Voice' },
    { payload: '5', text: 'Complete Text' },
    { payload: '6', text: 'Active Voice' },
    { payload: '7', text: 'Active Text' },
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

    render() {
        return (
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
          );
    }

}

module.exports = SearchBar;
