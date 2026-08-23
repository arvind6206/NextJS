import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-full flex flex-col">
        <div className='relative w-full flex items-center justify-center'>
        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
