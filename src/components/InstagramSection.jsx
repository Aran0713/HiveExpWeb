import React, { useEffect } from "react";
import "../styles/InstagramSection.css";

const InstagramSection = () => {
  useEffect(() => {
    // Remove existing Instagram script to prevent duplicates
    const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Dynamically load Instagram's embed script
    const instagramScript = document.createElement("script");
    instagramScript.async = true;
    instagramScript.src = "//www.instagram.com/embed.js";
    document.body.appendChild(instagramScript);

    // Reprocess Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(instagramScript);
    };
  }, []);

  // Instagram embed codes:
  const instagramEmbeds = [
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C5OO3MQgL2k/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C8-APziJEZQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C9Az5hlvRw8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`,
  ];

  return (
    <section className="ig-section">
      <h2 className="ig-title">Follow Us on Instagram</h2>
      <p className="ig-subtitle">
        Stay connected with us on Instagram to see event highlights and catch exclusive behind-the-scenes moments.
      </p>

      <div className="ig-feed">
        {instagramEmbeds.map((embedCode, idx) => (
          <div
            className="ig-post"
            key={idx}
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        ))}
      </div>

      <div className="ig-buttons">
        <a href="https://www.instagram.com/hive.exp" target="_blank" rel="noopener noreferrer" className="ig-btn ig-follow">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
