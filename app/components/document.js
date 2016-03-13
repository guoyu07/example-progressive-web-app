import React from 'react';

class Document extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.content }}/>
        </body>
      </html>
    );
  }
}

export default Document;
