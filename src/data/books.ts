export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  publishedAt: string; // use string to hold LocalDate from backend
  pdfUrl: string;
  imageUrl: string;
}
