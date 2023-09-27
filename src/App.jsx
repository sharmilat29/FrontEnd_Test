// src/App.js
import React, {useState} from 'react'
import {ChakraProvider, Container, Heading, Input, Button, Text, Wrap, Center, Divider} from '@chakra-ui/react'
import axios from 'axios'
import './App.css'


function App() {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const generate = async () => {
    const output = await axios.post('https://langchaintest2.sharmilathippab.repl.co', {"prompt": prompt});
    setResponse(output);
  };
  
  return (
    <ChakraProvider>
      <Container>
        <Heading m={2}>
          LangChain Prompt
        </Heading>
  
        <Wrap>
          <Input placeholder = 'Enter prompt' value = {prompt} onChange={handleInputChange}></Input>
          <Button onClick = {generate}>Submit</Button>
          {response? <Text>{response.data}</Text> : null}
        </Wrap>
        
        
      </Container>
    </ChakraProvider>
  );
};

export default App;