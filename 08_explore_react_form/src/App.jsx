import "./App.css";
import ControledField from "./Components/ControledField/ControledField";
import FormAction from "./Components/FormAction/FormAction";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import UnControlled from "./Components/UnControlled/UnControlled";

const App = () => {
  return (
    <div>
      <h4>Explore React Form</h4>
      {/* <SimpleForm /> */}
      {/* <FormAction /> */}
      {/* <ControledField /> */}
      <UnControlled />
    </div>
  );
};

export default App;
