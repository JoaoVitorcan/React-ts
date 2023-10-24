import { useState } from 'react';
import ValidEmail from './components/ValidEmail';

function App() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')

  function handleClick() {
    setTitle(email);
    setEmail('');
  }
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input
          id="id-email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
      </label>
      <input
        id="btn-send"
        type="button"
        data-testid="id-send"
        value="Enviar"
        onClick={handleClick}
      />
      <input id="btn-back" type="button" value="Voltar" />
      <ValidEmail email={title} />
    </div>
  );
}

export default App;