import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  // const displatch
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);
  return (
    <div className="App">
    
      { !user ? (
        <Login/>
      ) : (
        <>
          <div className="Head">
            <Header />
          </div>
          <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
        </>
      )}
    </div>
  );
}

export default App;
