import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen flex items-center justify-center">
      <div>
        Todo Application
        <br />
        <Link className='text-md border m-2'
        href="/signin">Sign in to Todo App</Link>
        <br />
        <Link className='text-md border m-2'
        href="/signup">Sign up to Todo App</Link>
      </div>
    </div>
  );
}
