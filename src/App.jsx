import React, { useEffect, useState } from "react";

function App() {
  const [subdomain, setSubdomain] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const subdomainName = getSubdomain(new URL(url).hostname);
    setSubdomain(subdomainName);
  }, []);

  function getSubdomain(url) {
    const parts = url.split(".");
    if (parts.length < 2) {
      return null;
    }

    if (parts.length === 2) {
      return null;
    }

    return parts[0];
  }

  useEffect(() => {
    if (subdomain) {
      console.log(subdomain, "subdomain");
    } else {
      console.log("no sub domain");
    }
  }, [subdomain]);

  return <div>{subdomain ? <h1>{subdomain}</h1> : <h1>no sub domain</h1>}</div>;
}

export default App;
