export default function ExampleProjectPage() {
    return (
      <div>
        <h1>Example Blog Project with Next.js</h1>
  
        <section>
          <h2>Step 1: Create a Simple Blog</h2>
          <pre>{`
            npx create-next-app@latest blog
            cd blog
          `}</pre>
        </section>
  
        <section>
          <h2>Step 2: Create a posts folder</h2>
          <pre>{`
            mkdir pages/posts
          `}</pre>
        </section>
  
        <section>
          <h2>Step 3: Create a post page</h2>
          <pre>{`
            export default function FirstPost() {
              return <h1>First Blog Post</h1>;
            }
          `}</pre>
        </section>
  
        <section>
          <h2>Step 4: Dynamic Routes</h2>
          <pre>{`
            import { useRouter } from 'next/router';
  
            export default function Post() {
              const router = useRouter();
              const { id } = router.query;
  
              return <h1>Blog Post {id}</h1>;
            }
          `}</pre>
        </section>
  
        <section>
          <h2>Step 5: Deploying to Vercel</h2>
          <pre>{`
            git init
            git add .
            git commit -m "Initial commit"
            git remote add origin <your-github-repo-url>
            git push -u origin main
  
            # Deploy using Vercel
            Go to https://vercel.com/, log in with GitHub, and import your repo.
          `}</pre>
        </section>
      </div>
    );
  }
  