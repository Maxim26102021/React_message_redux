import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import News from "./components/News/News"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./storeContext";

function App(props) {
    return (
        <BrowserRouter>
            <StoreContext.Provider value={props.store}>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer data={props.store}/>}/>
                        <Route path="/title/*" element={<Profile store={props.store}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                    </Routes>
                </div>
            </div>
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

export default App;
