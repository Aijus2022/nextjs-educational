export default function SetupPage() {
  return (
    <div>
      <h1>Next.js Setup</h1>
      <p>In Next.js 13+, the App Router introduces a new folder structure where each route is defined by a folder inside the `app/` directory. 
      Each folder contains a `page.js` file that serves the content for the route.</p>
      
      <p>Here is the recommended folder structure for the project:</p>
      
      <pre>{`
        nextjs-educational/
        ├── src/
        │   ├── app/                     (App Router directory)
        │   │   ├── setup/               (Folder for the /setup route)
        │   │   │   └── page.js          (Page file for the setup route)
        │   │   ├── code-snippets/       (Folder for the /code-snippets route)
        │   │   │   └── page.js          (Page file for the code-snippets route)
        │   │   ├── example-project/     (Folder for the /example-project route)
        │   │   │   └── page.js          (Page file for the example-project route)
        │   │   ├── comparison/          (Folder for the /comparison route)
        │   │   │   └── page.js          (Page file for the comparison route)
        │   ├── components/              (Reusable components)
        │   ├── styles/                  (Global and component-level styles)
        ├── public/                      (Static files like images and favicons)
        └── next.config.js               (Next.js configuration file)
      `}</pre>
      
      <p>Each folder inside the `app/` directory corresponds to a route, and the `page.js` file inside that folder defines the content for that route. This structure helps maintain clarity and scalability as your Next.js project grows.</p>
    </div>
  );
}
