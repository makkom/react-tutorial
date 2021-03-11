import React from 'react';
import { List } from './List'
import { Form } from './Form';
import { LANGUAGES } from './Comp/languages';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab: 'list',
      langs: LANGUAGES
    }
  }
  addlang(lang) {
    this.setState({ 
      tab: 'list',
      langs: [...this.state.langs, lang]})
  }

  render() {
    const { langs } = this.state;
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
          this.state.tab === 'list' ? <List langs={ langs } />  :  <Form onAddLang={(lang) => this.addlang(lang)}/>
        }
        
      </div>
    )
  }
}


export default App;