import React from "react";

function LoadMore({ handleClick, text }) {
  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        className="py-3 px-6 rounded-sm bg-gray-400 text-white text-sm font-semibold"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default LoadMore;
