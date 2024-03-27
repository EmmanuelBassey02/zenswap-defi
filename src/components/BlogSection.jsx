import React from "react";
import blockchain1 from "../assets/blockchain1.jpg";
import blockchain2 from "../assets/blockchain2.jpg";
import blockchain3 from "../assets/blockchain3.jpg";
import BlogCard from "./BlogCard";

export const BlogSection = () => {
  const blogs = [
    {
      title: "How to buy ThorChain",
      description:
       "Select a reputable crypto exchange that supports ThorChain trading Pairs. Popular options include Binance, KuCoin, and Bitfinex. Sign up for an account on the chosen exchange. Deposit funds into your exchange account and place an order",
      imgUrl: blockchain1,
    },
    {
      title: "How to buy ThorChain",
      description:
        "It is important to conduct Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: blockchain2,
    },
    {
      title: "How to buy ThorChain",
      description:
        "It is important to conduct Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: blockchain3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>
          Learn More about <span className="higlighted">ZenSwap</span>
        </h1>
        <button className="secondary">View More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
