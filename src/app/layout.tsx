import type { Metadata } from 'next';
import './globals.css';
import AiChatWidget from '@/components/AiChatWidget';

export const metadata: Metadata = {
  title: 'Matrix Telematics',
  description: 'TIMS & eTIMS Integration, Video Telematics & Business Automation Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AiChatWidget />
      </body>
    </html>
  );
}
