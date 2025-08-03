import { BookCard } from "@/components/BookCard";
import { Header } from "@/components/Header";
import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";


export const AllBooks = () => {

    const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
 

  
  useEffect(() => {
    axios.get("https://booksdwnldbackend.onrender.com/api/pdfs") // adjust port if different
      .then(response => {
        setPdfs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader/>


    return (
        <div>
          <Header/>
           <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
              Library
            </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pdfs.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      </div>
    );
};