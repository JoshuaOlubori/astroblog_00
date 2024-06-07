import React from 'react';
// import { Pill } from '@eliancodes/brutal-UI'; // Assuming Brutal UI components are accessible
// import Button from '@eliancodes/brutal-UI'; // Assuming Button is a separate component
import SummaryCard from '../generic/SummaryCard'; // Assuming SummaryCard is a separate component

import BrutalButton from '@components/generic/MyButton';

const BlogSummaryCard = ({ post }) => {
  return (
    <SummaryCard
      title={post.data.title}
      imgAlt={post.data.title}
      imgSrc={post.data.imgUrl}
      description={post.data.description}
    >
      <div className="flex justify-end my-4">
        <BrutalButton href={`/blog/${post.slug}/`}>Read post &rarr;</BrutalButton>
      </div>

      <div className="hidden sm:inline-block">
        <p className="poppins mt-2">tags:</p>
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 mt-2">
            {post.data.tags.map((tag) => (
              <li key={tag}> {/* Added key for better performance */}
                <a className="sanchez" href={`/blog/tags/${tag.toLowerCase()}/`}>
                  {/* <Pill>{tag}</Pill> */}
                </a>
              </li>
            ))}
          </ul>
          {post.data.draft && (
            <span className="bg-green rounded-full border-2 py-1 px-4 text-sm border-black card-shadow">
              Draft
            </span>
          )}
        </div>
      </div>
    </SummaryCard>
  );
};

export default BlogSummaryCard;
