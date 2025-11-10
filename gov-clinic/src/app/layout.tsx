
import "./globals.css"
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";


export const metadata = {
  title: "Sexual Health Centre - Anuradhapura",
  description: "Providing confidential and supportive sexual health services in Anuradhapura.",
  icons: {
    icon: '/favicon.ico?v=3',
    apple: '/apple-touch-icon.png',
  },

};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        

        <NavBar />
        <main>
        {children}

        </main>         
        <Footer />
          
        
        
      </body>
    </html>
  );
}
