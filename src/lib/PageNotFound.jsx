import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">404</p>
        <h1 className="mt-3 font-display text-4xl text-foreground">Page not found</h1>
        <Link className="mt-6 inline-block underline underline-offset-4" to="/">
          Return to the portfolio
        </Link>
      </div>
    </main>
  );
}
