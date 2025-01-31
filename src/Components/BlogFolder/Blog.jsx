import React, { useState } from 'react'
import './Blog.css'
import blog1 from '../../Images/Blog1.jpg'
import blog2 from '../../Images/Blog2.jpg'
import blog3 from '../../Images/Blog3.jpg'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Navigate International Payments for Education With Ease',
      image: blog1,
    },
    {
      id: 2,
      title: 'Importance of getting Insurance before traveling',
      image: blog2,
    },
    {
      id: 3,
      title: 'Overcoming Challenges in Foreign Currency Tuition Payments',
      image: blog3,
    },
  ]

  return (
    <div className="blog-container">
      <div className="blog-tag">BLOG</div>

      <h2 className="blog-title">Latest Blog & Resources</h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <h3 className="blog-card-title">{blog.title}</h3>
            <button className="blog-arrow">
              <span className="arrow-icon">→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="blog-navigation">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
    </div>
  )
}

export default Blog
