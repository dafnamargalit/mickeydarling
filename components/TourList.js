'use client';

import { useEffect, useRef } from "react";

export function TourList() {
  const scriptRoot = useRef(null); // gets assigned to a root node
  const script = `<div id="seated-55fdf2c0" data-artist-id="61c022e9-ba24-41ea-ba55-a874927fd6e3" data-css-version="3"></div><script src="https://widget.seated.com/app.js"></script>`;

  useEffect(() => {
    // creates a document range (grouping of nodes in the document is my understanding)
    // in this case we instantiate it as empty, on purpose
    const range = document.createRange();
    // creates a mini-document (light weight version), in our range with our script in it
    const documentFragment = range.createContextualFragment(script);

    // Clear previous script if it exists
    while (scriptRoot.current.firstChild) {
      scriptRoot.current.removeChild(scriptRoot.current.firstChild);
    }

    // appends it to our script root - so it renders in the correct location
    scriptRoot.current.append(documentFragment);
  }, []);

  return <div ref={scriptRoot} />;
}
