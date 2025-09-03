import React from 'react'

const AccordionItem = ({ question, answer, isOpen, toggle }: any) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-3 px-4 flex justify-between items-center hover:bg-gray-50"
        onClick={toggle}
      >
        <span className="text-md font-medium text-gray-800">{question}</span>
        <span className="text-darkbrown">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-sm text-gray-600">{answer}</div>
      )}
    </div>
  );
};

export default AccordionItem