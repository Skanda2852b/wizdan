import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // you can adjust weights
  display: 'swap',
});

export const metadata = {
  title: 'Wizdin Solutions - Salesforce Consulting & Implementation Partner',
  description:
    'Transform your business with Salesforce excellence. Wizdin Solutions helps organizations design, implement, and optimize Salesforce solutions that drive growth and innovation.',
  keywords:
    'Salesforce, Consulting, Implementation, CRM, Cloud, Digital Transformation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={poppins.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
