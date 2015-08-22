let React = require('react');
let { MenuItem, LeftNav, Styles } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;

let menuItems = [
    { text: 'Search'},
    { text: 'Compare'},
];

class AppLeftNav extends React.Component {

    getStyles() {
        return {
            cursor: 'pointer',
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px',
        };
    }

    render() {

        let header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                HouzeHub
            </div>
        );

        return (
            <LeftNav
            header={header}
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
