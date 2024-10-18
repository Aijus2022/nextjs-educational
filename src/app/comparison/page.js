import styles from './ComparisonPage.module.css';

export default function ComparisonPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Next.js vs React.js: A Detailed Comparison</h1>

      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>React.js</th>
            <th>Next.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Rendering</strong></td>
            <td>
              React.js primarily supports client-side rendering (CSR), meaning the content is rendered in the browser. 
              You can achieve server-side rendering (SSR) but with more setup required (e.g., using libraries like Next.js or manually configuring it).
            </td>
            <td>
              Next.js supports multiple rendering methods out of the box, including CSR, SSR, and static site generation (SSG), 
              making it more versatile for different use cases.
            </td>
          </tr>
          <tr>
            <td><strong>2. SEO</strong></td>
            <td>
              SEO is challenging in React because it uses client-side rendering, which search engines may not crawl efficiently. 
              Workarounds like pre-rendering or server-side rendering can be applied, but they require additional setup.
            </td>
            <td>
              Next.js is designed with SEO in mind. It uses server-side rendering and static site generation to pre-render content, 
              improving SEO performance significantly without extra configuration.
            </td>
          </tr>
          <tr>
            <td><strong>3. Routing</strong></td>
            <td>
              React.js does not have a built-in routing system. Developers must use libraries like <strong>react-router-dom</strong> 
              to set up routing, which requires extra configuration.
            </td>
            <td>
              Next.js has a built-in file-based routing system that maps files in the <strong>app</strong> directory to URL routes automatically, 
              making routing intuitive and easier to manage.
            </td>
          </tr>
          <tr>
            <td><strong>4. API Routes</strong></td>
            <td>
              React is a frontend library, so you need a separate backend server to handle API requests or implement API routes.
            </td>
            <td>
              Next.js has built-in API routes, allowing you to create serverless functions within the same project, 
              making it easy to handle backend logic without needing additional infrastructure.
            </td>
          </tr>
          <tr>
            <td><strong>5. Performance</strong></td>
            <td>
              React's performance optimizations, such as code splitting and lazy loading, are possible but require manual setup. 
              You need to configure Webpack or use libraries to improve performance.
            </td>
            <td>
              Next.js includes built-in performance optimizations, such as automatic code splitting, server-side rendering, 
              static site generation, and image optimization out of the box, making it easier to achieve high-performance web applications.
            </td>
          </tr>
          <tr>
            <td><strong>6. Full-Stack Capabilities</strong></td>
            <td>
              React.js focuses on the frontend. If you want to build a full-stack application, you need to combine it with a backend technology (e.g., Node.js, Express).
            </td>
            <td>
              Next.js is a full-stack framework, offering both frontend and backend capabilities (with API routes), 
              enabling you to build full-stack applications within one project.
            </td>
          </tr>
          <tr>
            <td><strong>7. Development Speed and Setup</strong></td>
            <td>
              React.js requires more manual setup for routing, server-side rendering, and deployment. 
              You also need to use additional tools like Webpack for code bundling and performance optimization.
            </td>
            <td>
              Next.js is easier to set up since it includes all of these tools out of the box. You can get started faster, 
              and deployment is simpler with platforms like Vercel, which offer seamless integration.
            </td>
          </tr>
          <tr>
            <td><strong>8. Deployment</strong></td>
            <td>
              React apps need to be deployed using third-party services like Netlify, Heroku, or AWS. The deployment process can vary depending on the chosen platform.
            </td>
            <td>
              Next.js has seamless deployment with Vercel, the company behind the framework. 
              With one click, you can deploy your application directly from your GitHub repository, making the process smoother.
            </td>
          </tr>
          <tr>
            <td><strong>9. CSS and Styling</strong></td>
            <td>
              React requires setting up tools like CSS-in-JS, styled-components, or CSS modules manually. 
              For advanced styling options, you need to install additional libraries.
            </td>
            <td>
              Next.js comes with built-in support for CSS and Sass. It also supports CSS modules by default, 
              making it easier to handle scoped and global styles without additional configuration.
            </td>
          </tr>
        </tbody>
      </table>

      <section className={styles.contentSection}>
        <h2 className={styles.heading2}>Conclusion</h2>
        <p className={styles.textParagraph}>
          Both React.js and Next.js are excellent choices for building modern web applications. 
          If you need a powerful frontend library for client-side rendering and have no SEO concerns, React.js is great. 
          But if you're looking for an all-in-one framework with server-side rendering, better SEO, API routes, 
          and deployment options, Next.js is often the better choice for full-stack, performance-optimized applications.
        </p>
      </section>
    </div>
  );
}

  