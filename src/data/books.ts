import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  pages: number;
  publishedYear: number;
  rating: number;
  downloadSize: string;
  format: string[];
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Digital Renaissance",
    author: "Maria Chen",
    cover: book1,
    description: "A fascinating exploration of how technology is reshaping art, culture, and human creativity in the 21st century. Chen masterfully weaves together stories of digital artists, AI musicians, and virtual reality pioneers to paint a picture of our evolving relationship with technology.",
    genre: "Technology & Society",
    pages: 342,
    publishedYear: 2023,
    rating: 4.7,
    downloadSize: "2.8 MB",
    format: ["PDF", "EPUB", "MOBI"]
  },
  {
    id: 2,
    title: "Quantum Echoes",
    author: "Dr. Alex Rivera",
    cover: book2,
    description: "A mind-bending science fiction thriller that explores the implications of quantum mechanics on reality itself. When physicist Elena Vasquez discovers a way to communicate across parallel universes, she unwittingly sets in motion events that could destroy everything she holds dear.",
    genre: "Science Fiction",
    pages: 418,
    publishedYear: 2023,
    rating: 4.5,
    downloadSize: "3.2 MB",
    format: ["PDF", "EPUB"]
  },
  {
    id: 3,
    title: "Whispers in Time",
    author: "Sarah Mitchell",
    cover: book3,
    description: "A sweeping romance that spans decades, following the love story between Emma and James as they navigate the complexities of life, loss, and second chances. Mitchell's lyrical prose captures the beauty and pain of enduring love.",
    genre: "Romance",
    pages: 289,
    publishedYear: 2022,
    rating: 4.3,
    downloadSize: "2.1 MB",
    format: ["PDF", "EPUB", "MOBI"]
  },
  {
    id: 4,
    title: "Shadows of Valeria",
    author: "Marcus Thornfield",
    cover: book4,
    description: "In a world where magic is forbidden and dragons are thought extinct, young Kira discovers she possesses ancient powers that could either save her kingdom or destroy it. An epic fantasy adventure filled with political intrigue, mythical creatures, and unexpected allies.",
    genre: "Fantasy",
    pages: 521,
    publishedYear: 2023,
    rating: 4.8,
    downloadSize: "4.1 MB",
    format: ["PDF", "EPUB"]
  },
  {
    id: 5,
    title: "The Algorithm's Secret",
    author: "Jennifer Park",
    cover: book5,
    description: "When data analyst Maya Chen stumbles upon a pattern in her company's algorithm that predicts human behavior with disturbing accuracy, she must decide whether to expose the truth or protect the people she loves. A gripping technological thriller that questions the price of progress.",
    genre: "Thriller",
    pages: 367,
    publishedYear: 2023,
    rating: 4.4,
    downloadSize: "2.9 MB",
    format: ["PDF", "EPUB", "MOBI"]
  },
  {
    id: 6,
    title: "Garden of Memories",
    author: "Elizabeth Harper",
    cover: book6,
    description: "A beautifully crafted literary novel about an elderly woman who returns to her childhood home and discovers a hidden garden that holds the key to her family's deepest secrets. Harper's exquisite storytelling brings to life themes of memory, forgiveness, and the enduring power of nature.",
    genre: "Literary Fiction",
    pages: 312,
    publishedYear: 2022,
    rating: 4.6,
    downloadSize: "2.3 MB",
    format: ["PDF", "EPUB"]
  }
];