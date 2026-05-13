'use client';

import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';

export const ApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({ type: 'success', message: 'Application submitted successfully! We will verify your payment and contact you soon.' });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message || 'Failed to submit application' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Registration Form</h2>
      
      {status && (
        <div className={`status-message status-${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="payment-section full-width">
          <h3 style={{ marginBottom: '1rem' }}>UPI Payment Details</h3>
          <p className="feature-desc">Scan QR to pay Mentorship Fee (₹149)</p>
          <div className="qr-placeholder">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=mentorship@upi&pn=EliteMentorship&am=149&cu=INR" 
              alt="UPI QR Code" 
              style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }} 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required placeholder="Full Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="email@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="+91 00000 00000" />
        </div>

        <div className="form-group">
          <label htmlFor="examName">Competitive Exam</label>
          <input type="text" id="examName" name="examName" required placeholder="" />
        </div>

        <div className="form-group full-width">
          <label htmlFor="transactionId">UPI Transaction ID / UTR</label>
          <input type="text" id="transactionId" name="transactionId" required placeholder="Enter Transaction ID" />
        </div>

        <div className="form-group full-width">
          <label htmlFor="resultPdf">Result (In PDF Format)</label>
          <input type="file" id="resultPdf" name="resultPdf" accept="application/pdf" required />
        </div>

        <div className="full-width">
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Processing Submission...' : 'Complete Application'}
          </button>
        </div>
      </form>
    </GlassCard>
  );
};
