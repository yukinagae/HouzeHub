let React = require('react');
let { Avatar, Card, CardHeader, CardMedia, CardTitle, CardActions, CardText, FlatButton, Styles } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;

class OneCard extends React.Component {

    getStyles() {
        return {
            // margin-top: '20px',
            width: '30%',
            float: 'left',
            margin: '20px',
        };
    }

    render() {
      return (
        <Card style={this.getStyles()}>
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
          <CardTitle title="Title" subtitle="Subtitle"/>
          <CardActions>
            <FlatButton label="See details"/>
          </CardActions>
        </Card>
      );
    }

}

module.exports = OneCard;
