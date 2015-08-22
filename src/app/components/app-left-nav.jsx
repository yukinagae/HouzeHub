let React = require('react');
let { MenuItem, LeftNav, Styles } = require('material-ui');

let menuItems = [
    { text: 'Search'},
    { text: 'Compare'},
];

class AppLeftNav extends React.Component {

    render() {
        return (
            <LeftNav
            ref="leftNav"
            docked={false}
            isInitiallyOpen={false}
            menuItems={menuItems}
            onChange={this._onLeftNavChange}
            />
        );
    }

    toggle() {
        this.refs.leftNav.toggle();
    }

    _onHeaderClick() {
        this.refs.leftNav.close();
    }

}

module.exports = AppLeftNav;
