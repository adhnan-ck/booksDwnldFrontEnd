import { useParams, Link } from "react-router-dom";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Star, 
  Calendar, 
  BookOpen, 
  ArrowLeft,
  FileText
} from "lucide-react";
import { Header } from "@/components/Header";

export const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id || "0"));

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Book Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Library
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Cover Section */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Download Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Download className="w-5 h-5 text-accent" />
                  Download Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {book.format.map((format) => (
                    <Button 
                      key={format} 
                      className="w-full justify-between" 
                      variant="outline"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {format}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {book.downloadSize}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Book Details Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {book.genre}
                </Badge>
                <h1 className="font-serif font-bold text-4xl text-foreground mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  by {book.author}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium">{book.rating}</span>
                    <span>rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{book.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{book.publishedYear}</span>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>About this book</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {book.description}
                  </p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg">
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};