import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      title: "Understanding Agricultural Subsidies in India",
      date: "March 15, 2024",
      excerpt: "A comprehensive guide to various agricultural subsidies available for Indian farmers...",
    },
    {
      title: "How to Apply for PMEGP Scheme",
      date: "March 10, 2024",
      excerpt: "Step-by-step guide to applying for the Prime Minister's Employment Generation Programme...",
    },
    {
      title: "Benefits of Cold Storage Facilities",
      date: "March 5, 2024",
      excerpt: "Learn about the advantages of cold storage and available government support...",
    }
  ];

  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Latest Updates</h1>
        <p>Stay informed with the latest articles and insights on agricultural subsidies and related topics.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card">
            <h2>{post.title}</h2>
            <div className="post-meta">{post.date}</div>
            <p>{post.excerpt}</p>
            <button className="read-more">Read More</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
