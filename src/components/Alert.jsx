import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-1/2 z-20 -translate-x-1/2">
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-emerald-700'
        } flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg`}
        role="alert"
      >
        <span
          className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-emerald-500'
          } rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>
        <p className="text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;