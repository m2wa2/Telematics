'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import styles from './admin.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Matrix Panel</h2>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/admin" className={pathname === '/admin' ? styles.active : ''}>Dashboard</Link>
          <Link href="/admin/bookings" className={pathname === '/admin/bookings' ? styles.active : ''}>Bookings</Link>
          <Link href="/admin/faqs" className={pathname === '/admin/faqs' ? styles.active : ''}>FAQs</Link>
          <Link href="/admin/users" className={pathname === '/admin/users' ? styles.active : ''}>Users</Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })} className={styles.logoutBtn}>
            Log Out
          </button>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            Welcome, Admin
          </div>
        </header>
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}
