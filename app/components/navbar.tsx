import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Leather Studio</h1>
        <Link href="/" className="hover:underline">
          Home   
        </Link>
      </div>
    </nav>
  );
}
