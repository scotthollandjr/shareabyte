var React = require('react');
var MasterLayout = React.createClass({
  render: function() {
    return (
      <html lang="en-US">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <link href="/css/bulma.css" rel="stylesheet" type="text/css"/>
          <link href="/css/styles.css" rel="stylesheet"  type="text/css"/>
          <title>{this.props.name}</title>
        </head>
        <body>
        
        </body>
      </html>
    )
  }
});

module.exports = MasterLayout;
