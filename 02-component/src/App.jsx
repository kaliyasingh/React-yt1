import card from "../Components/Card";
import navbar from "../Components/navbar";


function app() {
  return (
    <div>
      <h1>Hello React ritik!</h1>
      <p>My first React app.</p>
      {navbar()}
      {card()}
    </div>
  );
}

export default app;