import React from "react";
import App from './App.css'
import Card from "./layout/Card";
import First from "./First";
import WithChildren from "./WithChildren";
import WithParams from "./WithParams";
import Repetition from "./Repetition";
import Conditional from "./Conditional";

export default (props) => (
  <div className="App">

    <Card title='#06 - ConditionalWithIf'>
      <Conditional number={13}/>
    </Card>

    <Card title='#05 - Conditional'>
      <Conditional number={10}/>
    </Card>

    <Card title='#04 - Repetition'>
      <Repetition/>
    </Card>

    <Card title="#03 - Component with children">
      <WithChildren>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </WithChildren>
    </Card>

    <Card title="#02 - Component with params">
      <WithParams title="This is the title" subTitle="This is the subtitle"/>
    </Card>

    <Card title='#01 - First component'>
      <First/>
    </Card>

  </div>
);