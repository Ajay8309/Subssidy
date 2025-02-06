// Blog.js
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      title: "Maximizing Government Grants for Your Business",
      date: "March 20, 2024",
      excerpt: "Explore how businesses can optimize their funding opportunities through various government grant programs...",
    },
    {
      title: "Understanding Agricultural and Allied Project Subsidies",
      date: "March 15, 2024",
      excerpt: "A detailed look at subsidy schemes for agriculture, dairy farming, cold storage, and food processing...",
    },
    {
      title: "Navigating the PMEGP and CMEGP Schemes",
      date: "March 10, 2024",
      excerpt: "Step-by-step guide to applying for Prime Minister's and Chief Minister's Employment Generation Programs...",
    },
    {
      title: "Financial Assistance for MSMEs and Startups",
      date: "March 5, 2024",
      excerpt: "Learn about funding options including Stand Up India, CGTMSE, and SIDBI loans for small businesses...",
    }
  ];

  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Latest Updates</h1>
        <p>Stay informed with the latest articles and insights on subsidies, financial assistance, and business growth strategies.</p>
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
