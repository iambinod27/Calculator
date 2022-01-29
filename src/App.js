import Button from "./components/Button";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="center">
        <Navbar />

        <Input />

        <Button />
      </div>
    </>
  );
}
export default App;
