import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-primary text-2xl font-bold">SmartChef</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/generate" className="hover:text-primary">Generate</Link>
        <Link to="/saved" className="hover:text-primary">Saved</Link>
      </div>
    </nav>
  );
}
