let React = require('react');
let { Avatar, Card, CardHeader, CardMedia, CardTitle, CardActions, CardText, FlatButton, Checkbox, Dialog, Table, Styles } = require('material-ui');
let { Colors, Typography, Spacing } = Styles;

class OneCard extends React.Component {

    constructor() {
    super();
    this.state = {
      modal: false,
    };
    this._handleStandardDialogTouchTap = this._handleStandardDialogTouchTap.bind(this);
    }

    getStyles() {
        return {
            width: '30%',
            float: 'left',
            margin: '20px',
        };
    }

    render() {

        let standardActions = [
            { text: 'Dismiss' },
        ];
        let rowData = [
            {kind: {content: '$'}, value: {content: '100'}},
            {kind: {content: 'population'}, value: {content: '200'}},
        ];

let colOrder = ['kind', 'value'];

      return (
        <Card style={this.getStyles()}>
        <Checkbox />
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
          <CardTitle title="Location1" subtitle="Foo Bar St."/>
          <CardText>$100</CardText>
          <CardText>200 population</CardText>
          <CardActions>
            <FlatButton label="See details" onTouchTap={this._handleStandardDialogTouchTap} />
          </CardActions>
          <Dialog
          ref="standardDialog"
          title="Location1 Foo Bar St."
          actions={standardActions}
          modal={this.state.modal}>
          This is description.
          <Table
            columnOrder={colOrder}
            rowData={rowData}
            displayRowCheckbox={false}
          />
          </Dialog>
        </Card>
      );
    }

    _handleStandardDialogTouchTap() {
        this.refs.standardDialog.show();
    }

}

module.exports = OneCard;
