import styles from './ReactExampleProject.module.css';

export default function ReactExampleProjectPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>React Example Project for Beginners</h1>

      <h2 className={styles.heading2}>1. Setting Up a Project with Vite + React</h2>
      <p className={styles.text}>
        Vite is a fast and lightweight build tool that works seamlessly with React. Follow these steps to set up a project:
      </p>
      <pre className={styles.codeBlock}>
        {`
# 1. Open a terminal and run this command to create a new Vite project:
npm create vite@latest my-react-app --template react

# 2. Change directory into the project folder:
cd my-react-app

# 3. Install the dependencies:
npm install

# 4. Start the development server:
npm run dev
        `}
      </pre>
      <p className={styles.text}>
        Once the development server starts, you can open the project in your browser at <strong>http://localhost:3000</strong>.
      </p>

      <h2 className={styles.heading2}>2. Changing the Default Files' Content</h2>
      <p className={styles.text}>
        By default, Vite generates a simple project structure. You can modify the contents of the files to suit your needs. The main files to edit are:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}><strong>src/App.jsx</strong> – This is the main component of your app.</li>
        <li className={styles.listItem}><strong>index.html</strong> – This is the entry point of your app.</li>
        <li className={styles.listItem}><strong>src/main.jsx</strong> – The file where React is initialized.</li>
      </ul>
      <p className={styles.text}>
        For example, you can modify <strong>App.jsx</strong> to include a new component like this:
      </p>
      <pre className={styles.codeBlock}>
        {`
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is a simple React app built with Vite.</p>
    </div>
  );
}

export default App;
        `}
      </pre>

      <h2 className={styles.heading2}>3. How to Add Git to Your Project</h2>
      <p className={styles.text}>
        Git is a version control system that helps you track changes in your project. Here’s how to add Git to your Vite + React project:
      </p>
      <pre className={styles.codeBlock}>
        {`
# 1. Initialize a new Git repository:
git init

# 2. Add all project files to the repository:
git add .

# 3. Commit the changes:
git commit -m "Initial commit"

# 4. (Optional) If you want to push to GitHub, create a repository on GitHub and run the following commands:
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
        `}
      </pre>

      <h2 className={styles.heading2}>4. How to Build the Project</h2>
      <p className={styles.text}>
        To prepare your app for production (deploying it to the web), you need to build the project. Vite bundles your files and optimizes them for deployment. Here's how to build the project:
      </p>
      <pre className={styles.codeBlock}>
        {`
# Run this command to build your project:
npm run build

# Vite will generate a 'dist' folder containing the production-ready files.
        `}
      </pre>

      <h2 className={styles.heading2}>5. How to Deploy the Project</h2>
      <p className={styles.text}>
        After building your project, you can deploy it to platforms like **Netlify**, **Vercel**, or **GitHub Pages**. Here’s how to deploy using **Netlify**:
      </p>
      <pre className={styles.codeBlock}>
        {`
# 1. Install the Netlify CLI tool:
npm install netlify-cli -g

# 2. Run the following command to deploy the 'dist' folder:
netlify deploy --prod --dir=dist

# 3. Follow the instructions to log in or create a new Netlify account, and your project will be deployed!
        `}
      </pre>

      <h2 className={styles.heading2}>App Structure for To-Do List Example</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>App.js - Main component</li>
        <li className={styles.listItem}>Todo.js - Component to manage individual todos</li>
        <li className={styles.listItem}>TodoList.js - Renders the list of todos</li>
      </ul>

      <h2 className={styles.heading2}>App.js</h2>
      <pre className={styles.codeBlock}>
        {`
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Task</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
        `}
      </pre>

      <h2 className={styles.heading2}>TodoList.js</h2>
      <pre className={styles.codeBlock}>
        {`
import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
        `}
      </pre>
    </div>
  );
}
