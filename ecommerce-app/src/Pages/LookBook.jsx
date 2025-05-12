import React from 'react';


export default function LookBook() {
  return (
    <>
      <div style={{ height: "calc(100vh - 70px)" }}>
        <iframe
          src="/catalog.pdf"
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
          title="LookBook PDF"
        />
      </div>
    </>
  );
}
