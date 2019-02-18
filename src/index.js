import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const MyComponent = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/reactjs">Home</Link></li>
        <li><Link to="/reactjs/about">About</Link></li>
        <li><Link to="/reactjs/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/reactjs" component={Home}/>
      <Route path="/reactjs/about" component={About}/>
      <Route path="/reactjs/topics" component={Topics}/>
    </div>
  </Router>
);

export default MyComponent;