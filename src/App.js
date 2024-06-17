import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const App = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  }

  return (
    <>
    <h1 style={{textAlign: 'center'}}> React-Code-Editor</h1>
      <label>Code Here:</label>
      <br/>
      <textarea value={code} onChange={handleChange} style ={{width: '99%'}} />
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default App;
