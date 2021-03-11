import React from 'react';
import { List } from './List'
import { Form } from './Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab: 'list',
     }
  }

  render() {
    return(
      <div>
        <header>
        <ul>
          <li onClick={() => this.setState({ tab: 'list' })}>リスト</li>
          <li onClick={() => this.setState({ tab: 'form'})}>フォーム</li>
        </ul>
        </header>
        <hr/>
        {
          this.state.tab === 'list' ? <List />  :  <Form />
        }
        
      </div>
    )
  }
}


export default App;