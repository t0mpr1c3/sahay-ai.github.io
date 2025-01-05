import React from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../data/articles"; // Import articles data

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found!</div>;
  }

  return (
    <section className="px-5 lg:px-7.5 xl:px-10 py-10">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>
      <div className="text-700 leading-relaxed">
  {article.content.split("\n").map((paragraph, index) => (
    <p key={index} className="mb-4">{paragraph.trim()}</p>
  ))}
</div>
      <Link to="/blog" className="text-blue-500 hover:underline mt-4 block">Back to Blog</Link>
    </section>
  );
};

export default Article;
