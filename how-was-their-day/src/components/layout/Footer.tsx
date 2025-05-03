'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} How Was Their Day. All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}