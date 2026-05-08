'use client';
import { useEffect, useState } from 'react';

type User = {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: string;
};

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  // New user form state
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [statusMsg, setStatusMsg] = useState('');

  const fetchUsers = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg('Creating...');

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, password, role })
    });

    if (res.ok) {
      setStatusMsg('User created successfully!');
      setEmail('');
      setName('');
      setPassword('');
      setRole('USER');
      fetchUsers();
    } else {
      const errorData = await res.json();
      setStatusMsg(errorData.error || 'Failed to create user');
    }
  };

  if (loading) return <div>Loading users...</div>;

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>User & Access Management</h1>
      
      <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Create New Account</h3>
        {statusMsg && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', background: statusMsg.includes('success') ? '#d1fae5' : '#fee2e2', color: statusMsg.includes('success') ? '#065f46' : '#991b1b', borderRadius: '6px' }}>
            {statusMsg}
          </div>
        )}
        <form onSubmit={handleCreateUser} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
            <input required type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Role</label>
            <select value={role} onChange={e => setRole(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white' }}>
              <option value="ADMIN">Admin (Full Access)</option>
              <option value="USER">User (Staff Access)</option>
              <option value="CLIENT">Client (Restricted Access)</option>
            </select>
          </div>
          <button type="submit" style={{ gridColumn: 'span 2', padding: '0.75rem 1.5rem', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', justifySelf: 'start' }}>
            Create Account
          </button>
        </form>
      </div>

      <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '1rem' }}>Name</th>
              <th style={{ padding: '1rem' }}>Email</th>
              <th style={{ padding: '1rem' }}>Role</th>
              <th style={{ padding: '1rem' }}>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No users found</td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem' }}>{user.name}</td>
                  <td style={{ padding: '1rem' }}>{user.email}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      background: user.role === 'ADMIN' ? '#fee2e2' : user.role === 'USER' ? '#e0e7ff' : '#dcfce3', 
                      color: user.role === 'ADMIN' ? '#991b1b' : user.role === 'USER' ? '#3730a3' : '#166534',
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
