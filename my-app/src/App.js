import Employee from "./component/employee/Employee"
function App() {
  const showEmployee =true;
  return (
    <div className="App ">
      {showEmployee ? (
      <>
        <Employee name="Winnie" />
        <Employee/>
        <Employee/>
        <Employee/>
      </>
      ): ("access denied!")}

    </div>
  );
}

export default App;
