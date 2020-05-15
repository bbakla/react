import React from 'react';
import './App.css';
import CountClicker from "./components/CountClicker";
import InputForm from "./components/InputForm";
import {Row, Col} from 'reactstrap';

function App() {

  return (
    <div className="App">
        <Row>
            <Col>
                <InputForm/>
            </Col>

            <Col>
                <CountClicker/>
            </Col>

        </Row>



    </div>
  );
}

export default App;
