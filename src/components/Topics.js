import React from "react";
import { Link, Route } from "react-router-dom";

function Topic({ match }) {
  return <h3>{match.params.topicId}</h3>;
}

export default function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Render with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/rendering2`}>Render with React2</Link>
        </li>
        <li>
          <Link to={`${match.url}/rendering3`}>Render with React3</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/* <Route
        path={`${match.path}/:topicId`}
        render={() => {
          return <Topic name="name" />;
        }}
      /> */}
      <Route
        exact
        path={match.path}
        render={() => {
          return <h4>Please select a topic</h4>;
        }}
      />
    </div>
  );
}
