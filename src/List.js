import React from 'react';

const LANGUAGES = [
  'Java',
  'PHP',
  'Ruby',
  'JavaScript',
  'Python'
];

export class List extends React.Component  {
  render() {
  return (
    <div>
      <h4>リストです。</h4>
      {
        LANGUAGES.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
  }
}