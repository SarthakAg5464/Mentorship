import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Elite Mentorship | University Admission Counselling',
  description: 'Premium university admission counselling and mentorship program.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
