import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/modules";
import Module from "./pages/module";
import Layout from "./components/organisms/modules/layout";
import classNames from "classnames";

function App() {
  return (
    <div className={classNames("App")}>
      <Layout>
        <Routes>
          <Route path="/modules" element={<Home />} />
          <Route path="/modules/:id" element={<Module />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
