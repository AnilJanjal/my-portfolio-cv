import "./globals.css";

export const metadata = {
  title: "Anil Janjal | Full Stack Web & Mobile Developer",
  description:
    "Anil Janjal: Full Stack Web & Mobile Application Developer and Technical Co-Founder at Akshanic Technologies. Explore 4Gear, published on Google Play, and production web and mobile projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
