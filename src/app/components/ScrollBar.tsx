import { useEffect } from 'react';

const ScrollBar = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #bbb;
      }

      body {
        scrollbar-width: thin;
        scrollbar-color: #ccc #f1f1f1;
      }

      body::-webkit-scrollbar {
        width: 8px;
      }

      body::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
        border: 2px solid #f1f1f1;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default ScrollBar;
