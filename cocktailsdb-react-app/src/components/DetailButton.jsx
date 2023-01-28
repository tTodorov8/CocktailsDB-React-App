import React from "react";

function DetailButton() {
  function showDetails() {
    return console.log(`DETAILS`);
  }
  return <button onClick={showDetails}>Details</button>;
}

export default DetailButton;
