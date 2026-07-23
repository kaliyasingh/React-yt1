import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;