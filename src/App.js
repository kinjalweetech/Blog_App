import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MockApiView from "./component/View/ApiView";
import AutherView from "./component/View/AutherView";
import MockApiCreate from "./component/View/AutherView";
import Post1 from "./component/Post/Post1";
import Post2 from "./component/Post/Post2";
import Post3 from "./component/Post/Post3";
import UserDetails from "./component/View/UserDetail";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<AutherView />} />
          <Route path="/page/:pageNumber" element={<MockApiCreate />} />
          <Route path="/details/:id" element={<MockApiView />} />
          <Route path="/post/:id" element={<Post1 />} />
          <Route path="/post2/:id" element={<Post2 />} />
          <Route path="/post3/:id" element={<Post3 />} />
          <Route path="/comments/:userId"element={<UserDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
