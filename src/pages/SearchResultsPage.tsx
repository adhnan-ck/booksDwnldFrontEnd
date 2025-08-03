import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BookCard } from "@/components/BookCard";
import { Header } from "@/components/Header";
import Loader from "@/components/Loader";

export const SearchResultsPage = () => {
  const [pdfs, setPdfs] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchTerm) return;
      
      setLoading(true); // Show loader
      try {
        const res = await axios.get(
          `https://booksdwnldbackend.onrender.com/api/pdfs/search?query=${searchTerm}`
        );
        setPdfs(res.data);
      } catch (error) {
        console.error("Failed to fetch search results", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };
  
    fetchBooks();
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <Header/>
      <h2 className="text-xl font-bold mb-4">
        Search Results for: "{searchTerm}"
      </h2>
  
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdfs.length === 0 ? (
            <p>No results found.</p>
          ) : (
            pdfs.map((book) => <BookCard key={book.id} book={book} />)
          )}
        </div>
      )}
    </div>
  );
};
