import { Link } from "react-router-dom";

function Navegation() {
  return (
    <div>
     <Link to='/tasks'><h3> Task - App</h3></Link>
      <Link to='/tasks-create'><h3>create tasks</h3></Link>
    </div>
  );
}

export default Navegation;
