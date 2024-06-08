import React from 'react';
import BlogSummaryCard from './BlogSummaryCard.jsx'; // Assuming BlogSummaryCard is a React component

// interface Props {
//   posts: CollectionEntry<'blog'>[];
// }

const BlogList = ({ posts }) => {
  return (
    <>
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <li key={post.slug}> {/* Add key for better performance */}
          <BlogSummaryCard post={post} />
        </li>
        
      ))}
    </ul>
    <p>Hey</p>
    </>
  );
};

export default BlogList;
