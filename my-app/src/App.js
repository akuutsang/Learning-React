import Employee from "./component/employee/Employee"
function App() {
  const showEmployee =true;
  return (
    <div className="App ">
      {showEmployee ? (
      <>
        <Employee name="Abi" role="intern" />
        <Employee name="Abok" role="intern"/>
        <Employee name="Akutsang" role=""/>
        <Employee name="Akare" role="intern"/>
      </>
      ): ("access denied!")}
      

    </div>
  );
}

export default App;
