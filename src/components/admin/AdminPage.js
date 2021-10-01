import React from "react";

export default function AdminPage() {
  function confirmDialog(event) {
    confirm("Press a button!");
  }

  React.useEffect(() => {
    confirmDialog();
    // window.location =
    //   "https://stackoverflow.com/questions/42914666/react-router-external-link";
  }, []);
  return <div>Redirecting...</div>;
}
