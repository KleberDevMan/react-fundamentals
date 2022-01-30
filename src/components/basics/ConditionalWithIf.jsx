import React from "react";
import If from "./If";

export default props => {
  return (
    <div>
      <h2>The number {props.number} is</h2>
      <If test={props.number % 2 === 0}>
        <span>Pair</span>
      </If>
      <If test={props.number % 2 === 1}>
        <span>Odd</span>
      </If>
    </div>
  )
}