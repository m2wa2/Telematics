'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Logo from '@/components/Logo';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Compliance', date: '' });
  const [bookingStatus, setBookingStatus] = useState('');

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('Submitting...');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setBookingStatus('Booking confirmed! We will contact you shortly.');
        setFormData({ name: '', email: '', service: 'Compliance', date: '' });
      } else {
        setBookingStatus('Booking failed. Please try again.');
      }
    } catch (error) {
      setBookingStatus('An error occurred. Please try the AI widget.');
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Logo size="2.5rem" />
        <nav className={styles.nav}>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#booking">Book Demo</a>
        </nav>
        <a href="#booking"><button className={styles.cta}>Start Now</button></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Next-Gen Video Telematics & Business Automation
          </h1>
          <p className={styles.description}>
            TIMS and eTIMS Third-Party Integrators. Reliable visual tracking solutions for operational efficiency across Kenya and beyond.
          </p>
          <div className={styles.heroActions}>
            <a href="#solutions"><button className={styles.primaryBtn}>Explore Solutions</button></a>
            <a href="/admin/login"><button className={styles.secondaryBtn}>Admin Login</button></a>
          </div>
        </div>
      </section>

      <section id="solutions" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Industry Solutions</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>School Transport</h3>
              <p>Dual-camera ADAS/DMS with 4G blackboxes. Parent peace-of-mind with trip notifications and automated NTSA compliance logs.</p>
            </div>
            <div className={styles.card}>
              <h3>PSV & Fleets</h3>
              <p>Real-time ADAS alerts for forward collisions and tailored lane departure warnings. Protect your cargo visually.</p>
            </div>
            <div className={styles.card}>
              <h3>TIMS / eTIMS Integrations</h3>
              <p>Portable ETRs and POS integrations that effortlessly output structured financial KRA compliance reports from the field.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pricing Packages</h2>
          <div className={styles.pricingGrid}>
             <div className={styles.pricingCard}>
               <h3>Compliance Only</h3>
               <p className={styles.price}>KES 50,000 <span>+ VAT</span></p>
               <ul>
                 <li>ADAS, AUX, Blackbox Hardware</li>
                 <li>Installation: 5,000 + VAT</li>
                 <li>Platform Access: KES 7,000 /yr</li>
               </ul>
               <a href="#booking"><button className={styles.primaryBtn}>Select Plan</button></a>
             </div>
             <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
               <div className={styles.featuredBadge}>Most Popular</div>
               <h3>Safety Pro</h3>
               <p className={styles.price}>KES 50,000 <span>+ VAT</span></p>
               <ul>
                 <li>Everything in Compliance</li>
                 <li>Installation Waived (≥50 buses)</li>
                 <li>Insurer Rebates (5-15%)</li>
                 <li>Driver Analytics & Coaching</li>
               </ul>
               <a href="#booking"><button className={styles.cta}>Go Pro</button></a>
             </div>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bookingContainer}>
             <h2 className={styles.sectionTitle}>Book Your Live Demo</h2>
             <form onSubmit={submitBooking} className={styles.bookingForm}>
                <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Business Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="Compliance">Compliance Package</option>
                  <option value="Safety Pro">Safety Pro</option>
                  <option value="eTIMS Integration">eTIMS Integration</option>
                </select>
                <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                <button type="submit" className={styles.primaryBtn}>Submit Booking</button>
             </form>
             {bookingStatus && <p className={styles.statusMsg}>{bookingStatus}</p>}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
           <p>© {new Date().getFullYear()} Matrix Telematics Limited. Enhancing logistical performance worldwide.</p>
           <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>built by Hub31</p>
        </div>
      </footer>
    </main>
  );
}
