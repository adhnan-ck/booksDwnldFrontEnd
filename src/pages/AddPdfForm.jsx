import React, { useState } from 'react';
import axios from 'axios';
import BookData from '../components/BookData';

const AddPdfForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    pdfUrl: '',
    imageUrl: '',
    author: '',
    publishedAt: '',
    description: '',
    genre: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://booksdwnldbackend.onrender.com/api/pdfs', formData);
      alert('PDF added successfully!');
      setFormData({
        title: '',
        pdfUrl: '',
        imageUrl: '',
        author: '',
        publishedAt: '',
        description: '',
        genre: ''
      });
    } catch (error) {
      console.error('Error adding PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Book</h1>
            <p className="text-gray-600">Fill in the details below to add a new book to your collection</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Book Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter book title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Enter author name"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  placeholder="Enter genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 mb-2">
                  Published Date
                </label>
                <input
                  type="date"
                  id="publishedAt"
                  name="publishedAt"
                  value={formData.publishedAt}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pdfUrl" className="block text-sm font-medium text-gray-700 mb-2">
                PDF URL *
              </label>
              <input
                type="url"
                id="pdfUrl"
                name="pdfUrl"
                placeholder="https://example.com/book.pdf"
                value={formData.pdfUrl}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://example.com/cover.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter book description..."
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition duration-200 transform hover:scale-105"
              >
                Add Book to Collection
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-12">
        <BookData/>
      </div>
    </div>
  );
};

export default AddPdfForm;
