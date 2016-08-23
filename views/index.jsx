var React = require('react');
var DefaultLayout = require('./layout');

var IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent;