import React from "react";

export default function AdminPage() {
  function confirmDialog() {
    return window.confirm("AdminPage");
  }

  React.useEffect(() => {
    if (confirmDialog()) {
      window.location = "https://makarajothiadmin-a07c8.web.app/";
    } else {
      window.location = "/#home";
    }
  }, []);
  return <div>Redirecting...</div>;
}
