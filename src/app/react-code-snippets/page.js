import styles from './ReactCodeSnippets.module.css';

export default function ReactCodeSnippetsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>React Code Snippets</h1>
      <p className={styles.text}>Here are some useful React code snippets to help speed up your development:</p>

      <h2 className={styles.heading2}>Functional Component</h2>
      <pre className={styles.codeBlock}>
        {`
function MyComponent() {
  return <div>Hello, World!</div>;
}
        `}
      </pre>

      <h2 className={styles.heading2}>State Management with Hooks</h2>
      <pre className={styles.codeBlock}>
        {`
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
        `}
      </pre>

      <h2 className={styles.heading2}>React Router Example</h2>
      <pre className={styles.codeBlock}>
        {`
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
        `}
      </pre>
    </div>
  );
}
