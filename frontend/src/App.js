import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Output from './Components/Summarizer/Output';
import Summarizer from './Components/Summarizer/Summarizer.jsx';
import Input from './Components/Summarizer/Input.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/summarizer' element={<Summarizer/>}>
                <Route index element={<Input/>}/>
                <Route path='output' element={<Output/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

