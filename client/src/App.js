import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./store/RootReducer";

import "./App.css";

import Main from "./pages/main";

import NotFound from "./components/common/NotFound";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;