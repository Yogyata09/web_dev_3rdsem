import { useState } from "react";
function App(){
    //define state
    const [status, setStatus] = useState(0);
    return (
<div style = {{textAlign:"center",marginTop:"50px"}}>
<h1>Multiple Conditional Rendering</h1>
{/* Buttons to change the status */}
<button onClick={() => setStatus(1)}>show Student</button>
<button onClick={() => setStatus(2)}>show Teacher</button>
<button onClick={() => setStatus(3)}>show Admin</button>
<hr/>
{/*multiple conditions */}
{status ===1 ? ( <h2>Welcome Student</h2>) : status ===2 ? ( <h2>Welcome Teacher</h2>) : status ===3 ? ( <h2>Welcome Admin</h2>) : ( <p>Please select a role </p>)}
</div>
    );
}

export default App;