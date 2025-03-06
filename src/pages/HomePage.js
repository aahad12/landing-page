import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/homepage.scss';  // Import your SCSS file

function HomePage() {
  return (
    <div>
        <Navbar />
        <header className="hero-section text-white text-center">
        <div className="container">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing features and grow your business.</p>
          <a href="#features" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-lightning-fill feature-icon"></i>
            <h3>Fast Performance</h3>
            <p>Experience lightning-fast speed and efficiency.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-lock-fill feature-icon"></i>
            <h3>Secure & Reliable</h3>
            <p>Our platform ensures top-notch security for your data.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-person-check-fill feature-icon"></i>
            <h3>User Friendly</h3>
            <p>Easy-to-use interface for a seamless experience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials text-center text-white">
        <div className="container">
          <h2>What Our Users Say</h2>
          <p>\"This platform has transformed our workflow! Highly recommend.\"</p>
          <p>- John Doe, CEO</p>
        </div>
      </section>
        <Footer />
    </div>
  )
}

export default HomePage