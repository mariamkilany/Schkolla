import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

export default function NoMatchComponent() {
  return (
    <Router>
       <Switch>
          <Route exact path="/"><Home /></Route>
          <Route  path="/Employees"><Employees /></Route>
         <Route  path="/Students"><Students /></Route>
         <Route  path="/Stateges"><Stateges /></Route>
         <Route  path="/Questions"><Questions /></Route>
         <Route  path="/Teachers"><Teachers /></Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>  
    </Router>
  );
}

function Home() {
  return <h3>Home</h3>;
}
function Employees () {
  return <h3>Employees</h3>;
}
function Students  () {
  return <h3>Students</h3>;
}
function Stateges  () {
  return <h3>Stateges</h3>;
}
function Questions  () {
  return <h3>questions</h3>;
}
function Teachers  () {
  return <h3>Teachers</h3>;
}
function NotFound() {
  let location = useLocation();

  return (
    <div>
      <h1>404, Not Found</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
