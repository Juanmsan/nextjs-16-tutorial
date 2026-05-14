import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div>
      <h1>Index page</h1>
      <Link href="/contact">Go to contact page</Link>
    </div>
  );
}
