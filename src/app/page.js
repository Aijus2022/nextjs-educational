import Link from 'next/link';
import styles from './page.module.css'; // Only import styles related to the page-specific content

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1>Welcome to the Next.js & React.js Comparison Hub</h1>
        <p>
          Discover the power of two of the most popular JavaScript frameworks: 
          <Link href="/setup"><span className={styles.highlightedLink}>Next.js</span></Link> and 
          <Link href="/react-setup"><span className={styles.highlightedLink}> React.js</span></Link>. 
          Learn the differences, strengths, and weaknesses of both frameworks.
        </p>
      </section>

      <section className={styles.features}>
        <h2>What You'll Learn</h2>
        <ul>
          <li>
            Learn how to set up a project in both 
            <Link href="/react-setup">
              <span className={styles.highlightedLink}> React.js</span>
            </Link> and 
            <Link href="/setup">
              <span className={styles.highlightedLink}> Next.js</span>.
            </Link>
          </li>

          <li>
            Explore code snippets that will help you get started quickly with both 
            <Link href="/react-code-snippets">
              <span className={styles.highlightedLink}> React.js</span>
            </Link> and 
            <Link href="/code-snippets">
              <span className={styles.highlightedLink}> Next.js</span>.
            </Link>
          </li>

          <li>
            Understand the key differences in routing, SEO, and performance optimization between 
            <Link href="/comparison">
              <span className={styles.highlightedLink}> React.js</span>
            </Link> and 
            <Link href="/comparison">
              <span className={styles.highlightedLink}> Next.js</span>.
            </Link>
          </li>

          <li>
            Check out hands-on examples for building real-world projects with 
            <Link href="/react-example-project">
              <span className={styles.highlightedLink}> React.js</span>
            </Link> and 
            <Link href="/example-project">
              <span className={styles.highlightedLink}> Next.js</span>.
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}



