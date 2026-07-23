import React, { useState } from "react";

const App = () => {

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
   
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Enter your name"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;