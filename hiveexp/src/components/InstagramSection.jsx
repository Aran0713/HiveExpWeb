import React, { useEffect } from "react";
import "../styles/InstagramSection.css";

const InstagramSection = () => {
    useEffect(() => {
        // Dynamically load Instagram's embed script
        const instagramScript = document.createElement("script");
        instagramScript.async = true;
        instagramScript.src = "//www.instagram.com/embed.js";
        document.body.appendChild(instagramScript);

        // Optional cleanup on unmount
        return () => {
            document.body.removeChild(instagramScript);
        };
    }, []);

    // 3 FULL embed codes from Instagram (replace with your real ones):
    const instagramEmbeds = [
        // 1) Post #1
        `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C5OO3MQgL2k/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
      <div style="padding:16px;">
        <a href="https://www.instagram.com/p/C5OO3MQgL2k/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
        </a>
        <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
          <a href="https://www.instagram.com/p/C5OO3MQgL2k/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">
            A post shared by Hive Experience (@hive.exp)
          </a>
        </p>
      </div>
    </blockquote>`,

        // 2) Reel #1
        `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C8-APziJEZQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
      <div style="padding:16px;">
        <a href="https://www.instagram.com/reel/C8-APziJEZQ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
        </a>
        <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
          <a href="https://www.instagram.com/reel/C8-APziJEZQ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">
            A post shared by Hive Experience (@hive.exp)
          </a>
        </p>
      </div>
    </blockquote>`,

        // 3) Reel #2
        `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C9Az5hlvRw8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
      <div style="padding:16px;">
        <a href="https://www.instagram.com/reel/C9Az5hlvRw8/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
        </a>
        <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
          <a href="https://www.instagram.com/reel/C9Az5hlvRw8/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">
            A post shared by Hive Experience (@hive.exp)
          </a>
        </p>
      </div>
    </blockquote>`
    ];

    return (
        <section className="ig-section">
            <h2 className="ig-title">Follow Us on Instagram</h2>
            <p className="ig-subtitle">
                Stay connected with us on Instagram to see event highlights and catch
                exclusive behind-the-scenes moments.
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

                <a
                    href="https://www.instagram.com/hive.exp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-btn ig-follow"
                >
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
};

export default InstagramSection;
