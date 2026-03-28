import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
          <nav className="container mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
            <div className="w-40">
              {!isHome && (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg font-normal transition-colors nav-link-underline flex items-center gap-2 ${
                      isActive
                        ? "text-brand nav-link-active"
                        : "text-gray-900 dark:text-gray-100"
                    }`
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back to home
                </NavLink>
              )}
            </div>

            <div className="flex items-center gap-12">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-lg font-normal transition-colors nav-link-underline ${
                    isActive
                      ? "text-[--color-brand] nav-link-active"
                      : "text-gray-900 dark:text-gray-100"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-lg font-normal transition-colors nav-link-underline ${
                    isActive
                      ? "text-[--color-brand] nav-link-active"
                      : "text-gray-900 dark:text-gray-100"
                  }`
                }
              >
                Projects
              </NavLink>
            </div>
          </nav>
        </header>
        <main className="pt-20 px-8 md:px-16">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
