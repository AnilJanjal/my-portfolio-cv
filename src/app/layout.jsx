import "./globals.css";

export const metadata = {
  title: "Anil Janjal | Full Stack Web & Mobile Developer",
  description:
    "Anil Janjal: Full Stack Web & Mobile Application Developer and Founder & Director at Akshanic Technologies. Explore 4Gear, travel platforms, enterprise applications, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
