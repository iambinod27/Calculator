import Button from "./components/Button";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

import { CalcProvider } from "./context/CalcContext";

function App() {
  return (
    <>
      <CalcProvider>
        <div className="center">
          <Navbar />

          <Input />

          <Button />
        </div>
      </CalcProvider>
    </>
  );
}
export default App;
