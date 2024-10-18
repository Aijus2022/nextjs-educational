import styles from './ReactSetup.module.css';  // Import from the local folder

export default function ReactSetupPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>React Project Setup</h1>
      <p className={styles.text}>
        Setting up a React project is simple. You can use the following methods depending on your needs:
      </p>

      <h2 className={styles.heading2}>Create React App (CRA)</h2>
      <pre className={styles.codeBlock}>
        {`
npx create-react-app my-app
cd my-app
npm start
        `}
      </pre>

      <h2 className={styles.heading2}>Using Vite</h2>
      <pre className={styles.codeBlock}>
        {`
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
        `}
      </pre>

      <p className={styles.text}>
        Both methods give you a fully functioning React development environment to start building your app.
      </p>
    </div>
  );
}
