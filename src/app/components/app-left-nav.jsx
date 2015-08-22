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
            menuItems={menuItems}
            />
        );
    }

    toggle() {
        this.refs.leftNav.toggle();
    }

}

module.exports = AppLeftNav;
