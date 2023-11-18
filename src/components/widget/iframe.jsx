import React from "react";
import DialogRadix from "./dialog";

function IframeModel({ link, buttonStyle }) {
  function getYouTubeVideoId(url) {
    var match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/,
    );
    return (match && match[1]) || null;
  }
  let URL = getYouTubeVideoId(link);
  return (
    <DialogRadix
      trigger={
        <button className={`actionButton ${buttonStyle}`}>Watch Trailer</button>
      }
      content={
        URL && (
          <iframe
            className="h-full w-full rounded-md"
            src={`https://www.youtube.com/embed/${URL}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowFullScreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        )
      }
    />
  );
}

export default IframeModel;
