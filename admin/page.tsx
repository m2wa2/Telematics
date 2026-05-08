'use client';

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Dashboard Overview</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Total Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>12</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Active Queries (AI)</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>45</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Published FAQs</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>8</p>
        </div>
      </div>
    </div>
  );
}
