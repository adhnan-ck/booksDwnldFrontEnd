import React, { useEffect, useState } from 'react';
import axios from 'axios';


function BookData() {
    const [pdfs, setPdfs] = useState([]);
 

    useEffect(() => {
      axios.get('https://booksdwnldbackend.onrender.com/api/pdfs').then(res => setPdfs(res.data));
    }, []);
  
  
  
    const deletePdf = (id) => {
      axios.delete(`https://booksdwnldbackend.onrender.com/api/pdfs/${id}`).then(() => {
        setPdfs(pdfs.filter(p => p.id !== id));
      });
    };
  
    return (
      <div style={{ padding: '20px' }}>
  
        <h2>Documents</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Image</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Author</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {pdfs.map(pdf => (
              <tr key={pdf.id}>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <img src={pdf.imageUrl} alt={pdf.title} style={{ width: '30px', height: '60px' }} />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{pdf.title}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{pdf.author}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <button  onClick={() => {
                        const confirmed = window.confirm("Do you want to delete?");
                        if (confirmed) {
                        deletePdf(pdf.id);}}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 }

 export default BookData;