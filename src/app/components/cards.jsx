let React = require('react');
let OneCard = require('./one-card');
let { Styles } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;


class Cards extends React.Component {

    getStyles() {
        return {
            paddingTop: '80px',
            width: '100%',
        }
    }

    render() {
      return (
        <div style={this.getStyles()}>
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
        </div>
      );
    }

}

module.exports = Cards;
