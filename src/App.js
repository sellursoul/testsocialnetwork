import React, {Suspense} from "react";
import './App.css';
import SideBar from "./components/sideBar/sideBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='appWraper'>
                <HeaderContainer/>
                <SideBar/>
                <div className='appWraper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path='/Dialogs' element={<DialogsContainer/>}/>
                            <Route path="/profile/" element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/News' element={<News/>}/>
                            <Route path='/Music' element={<Music/>}/>
                            <Route path='/Settings' element={<Settings/>}/>
                            <Route path='/Users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp;
