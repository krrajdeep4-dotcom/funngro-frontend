import React, { useState } from 'react';
import './InquiryForm.css';

function InquiryForm({ role }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({ ...formData, role }), 
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: 'Thank you! Your inquiry has been submitted.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Server error. Is your backend running?' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>{role === 'Teen' ? 'Join as a Teen' : 'Hire Talent'}</h3>
      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Enter your name"
          />
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Message (Optional)</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="4"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className={`submit-btn ${role.toLowerCase()}-btn`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {status.text && (
          <p className={`status-message ${status.type}`}>
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}

export default InquiryForm;