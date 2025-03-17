import "./globals.css";

export const metadata = {
  title: "Job Portals",
  description: "Job Portals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
