import React from "react";
import FaqItem from "../../../components/shared/faq.collapsible.window.tsx";


const FAQ = () => {
  return (
    <div className="container px-5 md:px-0">
      <FaqItem
        question="What is Lorem Ipsum?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FaqItem
        question="What is Lorem Ipsum?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FaqItem
        question="What is Lorem Ipsum?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default FAQ;
