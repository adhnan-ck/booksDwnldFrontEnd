import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { BookDetail } from "./pages/BookDetail";
import NotFound from "./pages/NotFound";
import AddPdfForm from "./pages/AddPdfForm";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { AllBooks } from "./pages/AllBooks";
import About from "./pages/About";
import Signin1 from "./pages/SignIn1";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-pdf" element={<AddPdfForm />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/allBooks" element={<AllBooks />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-book" element={<Signin1 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
