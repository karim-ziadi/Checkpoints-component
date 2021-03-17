import "./App.css";
import MyAddress from "./component/profile/Address";
import MyName from "./component/profile/FullName";
import "./component/profile/ProfilPhoto";
import MyPhoto from "./component/profile/ProfilPhoto";

function App() {
    return (
        <div className="App">
            <MyName />
            <MyPhoto />
            <MyAddress />
        </div>
    );
}

export default App;
