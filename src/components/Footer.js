import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Mosque as MosqueIcon,
  Favorite as FavoriteIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
  Mail as MailIcon,
  Book as BookIcon,
  Alarm as AlarmIcon,
  CalendarToday as CalendarTodayIcon,
  LocationOn as LocationOnIcon,
  Handshake as HandshakeIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { FaPray } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", icon: <MosqueIcon /> },
    { name: "Ibadyat", path: "/ibadyat", icon: <FaPray /> },
    { name: "Quran", path: "/quran", icon: <BookIcon /> },
    { name: "Duas", path: "/dua", icon: <HandshakeIcon /> },
    { name: "Calendar", path: "/calendar", icon: <CalendarTodayIcon /> },
    { name: "Qibla", path: "/qibla", icon: <LocationOnIcon /> },
    { name: "Names", path: "/names", icon: <FavoriteIcon /> },
  ];

  const islamicQuotes = [
    "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
    "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ",
  ];

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "mobile-cursor";
    document.body.appendChild(cursor);

    let x = 0;
    let y = 0;
    let rafId;

    const moveCursor = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        x = touch.clientX;
        y = touch.clientY;
        if (!rafId) {
          rafId = requestAnimationFrame(updateCursor);
        }
      }
    };

    const updateCursor = () => {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      rafId = null; // Reset to allow next animation frame
    };

    window.addEventListener("touchmove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("touchmove", moveCursor);
      cancelAnimationFrame(rafId);
      cursor.remove();
    };
  }, []);

  return (
    <footer className="islamic-footer">
      <div className="footer-bg-pattern"></div>

      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main">
          {/* Brand Section */}
          <Col lg={4} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-brand">
                <div className="brand-logo">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <MosqueIcon className="brand-icon" />
                  </motion.div>
                  <h3>Islam360</h3>
                </div>
                <p className="brand-description">
                  Your comprehensive Islamic companion for prayer times, Quran
                  recitation, and spiritual guidance. Built with love for the
                  Muslim community worldwide.
                </p>

                {/* Islamic Quote Rotation */}
                <motion.div
                  className="islamic-quote"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="quote-text text-white">
                    {
                      islamicQuotes[
                        Math.floor(Date.now() / 5000) % islamicQuotes.length
                      ]
                    }
                  </div>
                  <div className="quote-translation">
                    "And whoever fears Allah - He will make for him a way out"
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">
                <StarIcon className="me-2" />
                Quick Links
              </h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95, backgroundColor: "#ffffff22" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      borderRadius: "6px",
                    }}
                  >
                    <a
                      href={link.path}
                      className="footer-link"
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>{link.icon}</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Islamic Features */}
          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">
                <BookIcon className="me-2" />
                Islamic Features
              </h4>
              <ul className="footer-features">
                <li>✓ Accurate Prayer Times</li>
                <li>✓ Complete Quran with Audio</li>
                <li>✓ Islamic Calendar</li>
                <li>✓ Qibla</li>
                <li>✓ Duas & Supplications</li>
                <li>✓ 99 Names of Allah</li>
                <li>✓ Prayer Notifications</li>
                <li>✓ Islamic Content Library</li>
              </ul>
            </motion.div>
          </Col>

          {/* Contact & Social */}
          <Col lg={2} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">
                <FavoriteIcon className="me-2" />
                Connect
              </h4>

              <div className="social-links">
                <motion.a
                  href="mailto:ssyedhassan667@gmail.com"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MailIcon />
                </motion.a>

                <motion.a
                  href="https://wa.me/+923208500172"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                </motion.a>

                <motion.a
                  href="https://github.com/SyedHasanHussainShah"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Floating Symbols */}
        <div className="floating-symbols">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-symbol"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              ☪
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Footer Bottom */}
      <div className="text-center py-3 small text-white">
        © {currentYear} Islam360. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;