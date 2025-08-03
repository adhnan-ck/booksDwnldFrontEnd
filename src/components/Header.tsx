import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-accent" />
            <span className="font-serif font-bold text-2xl text-foreground">
              BasedBooks.
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Search - always visible, responsive width */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form onSubmit={handleSubmit}>
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 w-28 sm:w-64 bg-background border-border"
                />
              </form>
            </div>
            
            {/* Donate button - only visible on larger screens */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:block"
              onClick={() => window.location.href = 'https://donate.unrwa.org/int/en/general'}
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};