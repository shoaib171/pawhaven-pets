
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pawbeige/50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-pawblue mb-4 font-display">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-paworange hover:bg-paworange-dark text-white"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
