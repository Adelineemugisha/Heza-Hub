import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css"; // Ensures your global styles are applied

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heza Hub",
  description: "Transforming Agricultural Residuals in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main page content renders here */}
        {children}

        {/* Global Shared Footer */}
        <footer className="site-footer">
          <div className="footer-container">
            
            <div className="newsletter-box">
              <h2 className="newsletter-title">Stay Connected With Heza Hub</h2>
              <p className="newsletter-text">
                Get monthly eco-updates, community insights, and ecological advancements delivered directly to your device.
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
                <button type="submit" className="newsletter-button">Subscribe Now</button>
              </form>
            </div>

            <div className="footer-grid">
              <div className="footer-column">
                <h3>Contact Us</h3>
                <p>Email: hezahub@gmail.com</p>
                <p>Location: Kigali, Rwanda</p>
              </div>
              
              <div className="footer-column">
                <h3>Latest News</h3>
                <ul>
                  <li><Link href="#">Biochar Initiatives</Link></li>
                  <li><Link href="#">Green Economy Impact</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link href="/agriculture-waste">Agriculture Waste</Link></li>
                  <li><Link href="/youth-opportunity">Youth Opportunity</Link></li>
                  <li><Link href="/biochar">Biochar</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="copyright-text">
              <p>&copy; {new Date().getFullYear()} Heza Hub. All rights reserved.</p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
