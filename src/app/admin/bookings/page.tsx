'use client';
import { useEffect, useState } from 'react';

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  date: string;
  status: string;
  createdAt: string;
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading bookings...</div>;

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Bookings Manager</h1>
      <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '1rem' }}>Name</th>
              <th style={{ padding: '1rem' }}>Email</th>
              <th style={{ padding: '1rem' }}>Service</th>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '1rem', textAlign: 'center' }}>No bookings found</td>
              </tr>
            ) : (
              bookings.map(booking => (
                <tr key={booking.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem' }}>{booking.name}</td>
                  <td style={{ padding: '1rem' }}>{booking.email}</td>
                  <td style={{ padding: '1rem' }}>{booking.service}</td>
                  <td style={{ padding: '1rem' }}>{new Date(booking.date).toLocaleDateString()}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      background: booking.status === 'PENDING' ? '#fef3c7' : '#d1fae5', 
                      color: booking.status === 'PENDING' ? '#d97706' : '#059669',
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
