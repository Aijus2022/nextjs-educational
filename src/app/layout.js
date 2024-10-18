import './globals.css';

export const metadata = {
  title: 'React & Next.js Comparison Hub',
  description: 'A React and Next.js app with global header, navigation, and footer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1 className="logo">React & Next.js Comparison Hub</h1>
            <nav className="nav">
              <ul className="navList">
                <li className="navItem"><a href="/" className="navLink">Home</a></li>
                
                {/* React-related subpages */}
                <li className="navItem">
                  <a href="/react-setup" className="navLink">React</a>
                  <ul className="subNav">
                    <li><a href="/react-setup" className="navLink">Setup</a></li>
                    <li><a href="/react-code-snippets" className="navLink">Code Snippets</a></li>
                    <li><a href="/react-example-project" className="navLink">Example Project</a></li>
                  </ul>
                </li>

                {/* Next.js-related subpages */}
                <li className="navItem">
                  <a href="/setup" className="navLink">Next.js</a>
                  <ul className="subNav">
                    <li><a href="/setup" className="navLink">Setup</a></li>
                    <li><a href="/code-snippets" className="navLink">Code Snippets</a></li>
                    <li><a href="/example-project" className="navLink">Example Project</a></li>
                  </ul>
                </li>

                <li className="navItem"><a href="/comparison" className="navLink">Comparison</a></li>
              </ul>
            </nav>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} React & Next.js Comparison Hub. All Rights Reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

