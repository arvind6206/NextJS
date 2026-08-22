
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="bg-slate-300">{children}</body>
    </html>
  );
}
