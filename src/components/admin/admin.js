import React from "react";

export default function AdminPage() {
  function confirmDialog() {
    return window.confirm("AdminPage");
  }

  React.useEffect(() => {
    if (confirmDialog()) {
      window.location =
        "https://stackoverflow.com/questions/42914666/react-router-external-link";
    } else {
      window.location = "/#home";
    }
  }, []);
  return <div>Redirecting...</div>;
}
