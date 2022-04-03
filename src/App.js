import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IframeParent } from "./components/IframeParent";
import { IframeChild } from "./components/IframeChild";

function App() {
  return (
    <div className="w-full bg-indigo-200">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IframeParent} />
          <Route exact path="/iframe-child/" component={IframeChild} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
