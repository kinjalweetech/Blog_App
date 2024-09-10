import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Header from "./component/Header/Header";
import AuthorView from "./component/View/AutherView";
import Footer from "./component/Footer/Footer";
import MockApiCreate from "./component/View/AutherView";
import MockApiView from "./component/View/ApiView";
// import MockApiCreate from "./component/View/MockApiCreate";
// import MockApiView from "./component/View/MockApiView";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MockApiCreate />} />
          <Route path="/author" element={<AuthorView />} />
          <Route path="/ApiView/:id" element={<MockApiView/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
