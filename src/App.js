import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MockApiView from "./component/View/ApiView";
import AutherView from "./component/View/AutherView";
import MockApiCreate from "./component/View/AutherView";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AutherView />} />
          <Route path="/page/:pageNumber" element={<MockApiCreate />} />

          <Route path="/details/:id" element={<MockApiView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./Redux/Store";
// import MockApiCreate from "./component/View/MockApiCreate";
// import MockApiView from "./component/View/MockApiView";
// import PostDetailView from "./component/View/PostDetailView";  // New component for post details

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<MockApiCreate />} />
//           <Route path="/details/:id" element={<MockApiView />} />  {/* User profile page */}
//           <Route path="/post/:postId" element={<PostDetailView />} />  {/* Post detail page */}
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;
