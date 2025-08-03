
import { Card, CardContent } from "@/components/ui/card";
import { Download, CalendarArrowUpIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  genre: string;
  publishedAt: string;
  pdfUrl: string;
}

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link to={`/book/${book.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 bg-card border-border">
        <div className="relative overflow-hidden">
          <img
            src={book.imageUrl}
            alt={`${book.title} cover`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-1">
                <CalendarArrowUpIcon className="w-4 h-4 fill-accent text-accent" />
                <span>uploaded on {book.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>Free Download</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif font-bold text-lg text-foreground mb-1 line-clamp-2 group-hover:text-accent transition-colors">
            {book.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
          <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full inline-block">
            {book.genre}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};