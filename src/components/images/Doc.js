import React from "react";
import GoogleDocsViewer from "react-google-docs-viewer";

export default function Doc() {
  return (
    <div>
      <GoogleDocsViewer
        width="100%"
        height="100vh"
        // fileUrl="http://www.africau.edu/images/default/sample.pdf"
        fileUrl="https://firebasestorage.googleapis.com/v0/b/astrology-7cec1.appspot.com/o/Axios%20get%20method.docx?alt=media&token=f8fd3676-a3aa-4897-b2fa-78faedd2c5be"
      />
    </div>
  );
}
