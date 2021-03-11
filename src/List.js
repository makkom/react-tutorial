import React from 'react';



export class List extends React.Component  {
  render() {
    const { langs } = this.props;
  return (
    <div>
      <h4>リストです。</h4>
      {
        langs.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
  }
}