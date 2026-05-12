import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-ocean-waves-running-towards-the-shore-41140-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;
