import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist.
      </p>
      <p className="mt-6">
        <Link href="/">Return home</Link>
      </p>
    </div>
  );
}
