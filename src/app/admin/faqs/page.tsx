'use client';
import { useEffect, useState } from 'react';

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export default function AdminFAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchFaqs = () => {
    fetch('/api/faq')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setFaqs(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleAddFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion || !newAnswer) return;

    await fetch('/api/faq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: newQuestion, answer: newAnswer })
    });
    setNewQuestion('');
    setNewAnswer('');
    fetchFaqs();
  };

  if (loading) return <div>Loading FAQs...</div>;

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Manage FAQs</h1>
      
      <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Add New FAQ</h3>
        <form onSubmit={handleAddFaq} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Question</label>
            <input 
              type="text" 
              value={newQuestion} 
              onChange={e => setNewQuestion(e.target.value)} 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
              placeholder="e.g. Do you support eTIMS integration?"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Answer</label>
            <textarea 
              value={newAnswer} 
              onChange={e => setNewAnswer(e.target.value)}
              rows={4}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', resize: 'vertical' }}
              placeholder="Provide answer here..."
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              alignSelf: 'flex-start', padding: '0.75rem 1.5rem', background: 'var(--primary-color)', color: 'white', 
              border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' 
            }}>
            Save FAQ
          </button>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map(faq => (
          <div key={faq.id} style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{faq.question}</h4>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.5 }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
