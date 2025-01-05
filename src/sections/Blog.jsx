import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles"; // Import the centralized articles data

const Blog = () => {
  return (
    <section className="blog-section pt-10">
      <div className="container">
        {/* Blog Title with explicit text color */}
        <h1 className="blog-title text-3xl font-bold text-center mb-6">
          Our Blog
        </h1>
        <p className="blog-description text-lg text-center text-gray-600 mb-10">
          Insights, articles & updates on Sahay AI, automation, and infrastructure.
        </p>
        <div className="articles grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="article-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="article-title text-xl font-semibold mb-3 text-gray-900">
                {article.title}
              </h2>
              <p className="article-date text-sm text-gray-500 mb-4">{article.date}</p>
              <p className="article-summary text-gray-700 mb-6">{article.summary}</p>
              <Link
                to={`/blog/${article.id}`}
                className="article-link text-blue-500 hover:underline font-medium"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
