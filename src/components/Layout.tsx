import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { VantaFogBackground } from "./VantaFogBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    // Add or remove home-page class from body based on current route
    console.log('Current pathname:', location.pathname);
    console.log('Is home page:', isHomePage);
    console.log('Is about page:', isAboutPage);
    
    // Remove all page classes first
    document.body.classList.remove('home-page', 'about-page', 'projects-page', 'experience-page', 'blog-page', 'research-page', 'contact-page');
    
    if (isHomePage) {
      document.body.classList.add('home-page');
      console.log('Added home-page class to body');
    } else if (isAboutPage) {
      document.body.classList.add('about-page');
      console.log('Added about-page class to body');
    } else {
      // Add specific page class based on current route
      const pageClass = location.pathname.slice(1) + '-page'; // Remove leading slash and add -page suffix
      if (pageClass !== '-page') { // Avoid adding empty class
        document.body.classList.add(pageClass);
        console.log('Added page class:', pageClass);
      }
      console.log('Removed home-page class from body');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('home-page', 'about-page', 'projects-page', 'experience-page', 'blog-page', 'research-page', 'contact-page');
    };
  }, [isHomePage, isAboutPage, location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Vanta.js fog background for ALL pages - rendered at document level */}
      <VantaFogBackground />
      
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
          {children}
        </div>
      </main>
      <footer className="border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-muted-foreground">
            made with love by sarvesh on tiny cafe desks in san francisco &lt;3
          </p>
        </div>
      </footer>
    </div>
  );
}