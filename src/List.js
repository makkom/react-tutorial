import React from 'react';


export class List extends React.Component  {
  render() {
    const { title } = this.props;
  return (
    <div>
      <h4>リストです。</h4>
      <p>{title}</p>
    </div>
  )
  }
}