import React from 'react';

const Page = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        title="Embedded Content"
        src="http://127.0.0.1:5000/"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Page;
