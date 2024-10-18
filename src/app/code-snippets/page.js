export default function CodeSnippetsPage() {
    return (
      <div>
        <h1>Next.js Code Snippets</h1>
  
        {/* Dynamic Routing Example */}
        <section>
          <h2>Dynamic Routing Example</h2>
          <p>This example demonstrates how to use Next.js dynamic routing with the `useRouter` hook. The `id` is extracted from the URL and displayed in the component:</p>
          <pre>{`
            import { useRouter } from 'next/router';
  
            const Post = () => {
              const router = useRouter();
              const { id } = router.query;
  
              return <p>Post: {id}</p>;
            };
  
            export default Post;
          `}</pre>
        </section>
  
        {/* Static Generation with Data Fetching */}
        <section>
          <h2>Static Generation with Data Fetching</h2>
          <p>This snippet shows how to use <code>getStaticProps</code> to fetch data during the build time, enabling static site generation (SSG) in Next.js:</p>
          <pre>{`
            export async function getStaticProps() {
              const res = await fetch('https://jsonplaceholder.typicode.com/posts');
              const posts = await res.json();
  
              return {
                props: { posts },
              };
            }
  
            const Posts = ({ posts }) => (
              <div>
                <h1>Posts</h1>
                <ul>
                  {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            );
  
            export default Posts;
          `}</pre>
        </section>
  
        {/* API Routes Example */}
        <section>
          <h2>API Routes Example</h2>
          <p>Here’s how to set up a simple API route in Next.js to return JSON data:</p>
          <pre>{`
            // pages/api/hello.js
  
            export default function handler(req, res) {
              res.status(200).json({ message: 'Hello from Next.js!' });
            }
          `}</pre>
          <p>You can access this API route by visiting <code>/api/hello</code>.</p>
        </section>
  
        {/* Server-Side Rendering Example */}
        <section>
          <h2>Server-Side Rendering Example</h2>
          <p>This example demonstrates how to use <code>getServerSideProps</code> to fetch data on each request, enabling server-side rendering (SSR):</p>
          <pre>{`
            export async function getServerSideProps() {
              const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
              const post = await res.json();
  
              return {
                props: { post },
              };
            }
  
            const Post = ({ post }) => (
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
  
            export default Post;
          `}</pre>
        </section>
  
        {/* CSS Modules Example */}
        <section>
          <h2>CSS Modules Example</h2>
          <p>Here’s how to use CSS Modules in Next.js for scoped styling:</p>
          <pre>{`
            // components/Button.module.css
            .btn {
              background-color: blue;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
            }
  
            // components/Button.js
            import styles from './Button.module.css';
  
            const Button = () => {
              return <button className={styles.btn}>Click Me</button>;
            };
  
            export default Button;
          `}</pre>
        </section>
      </div>
    );
  }
  