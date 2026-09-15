function welcome(){
    return (
         <div>
            <h3>Hello </h3>
        </div> 
    );  
}



function Info(){
    return(
        <div>
            <h3>What is component?</h3>
        </div>
    );
}


function App(){
  return (
    <div style={{padding: "20px", fontFamily: "Arial"}}>
  <h1>Yor First React Component</h1>

  {/* Using component */}
  <welcome />
  <Info />
  <h3> How to use component?</h3>
  <p> Use Component like HTML tag: &lt;Welcome /&gt;</p>

  <h3> Difference between Function nand component</h3>
  <p> Normal Function Result: { add(10, 20)}</p>

  <h3>Interview Question</h3>
  <p> What is react Component?</p>
  <p> A reusable UI block written as a function or class.</p>
  </div>

  );
}
export default App;