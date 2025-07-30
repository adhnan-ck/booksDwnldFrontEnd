import { books } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Users } from "lucide-react";

const Index = () => {
  const featuredBooks = books.slice(0, 3);
  const recentBooks = books.slice(3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-6">
            Discover Your Next
            <span className="text-accent block">Great Read</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore thousands of books across every genre. Download instantly in your preferred format.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="px-8">
              Browse Library
            </Button>
            <Button variant="outline" size="lg">
              Popular This Week
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">10,000+</h3>
              <p className="text-muted-foreground">Books Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">4.8</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50k+</h3>
              <p className="text-muted-foreground">Happy Readers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Books
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked selections from our editorial team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Additions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Recent Additions
            </h2>
            <p className="text-muted-foreground text-lg">
              Fresh releases and newly added classics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="font-serif font-bold text-2xl mb-4">BookVault</h3>
          <p className="text-primary-foreground/80 mb-6">
            Your gateway to unlimited reading adventures
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">About</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
