import React from "react";

const VideoBlock: React.FunctionComponent<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  return (
    <div className="w-full relative">
      <div className="aspect-video relative">
        <video
          src={link}
          title={title}
          className="w-full h-full absolute top-0 left-0 object-cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute w-full h-full items-center flex justify-center text-satin-linen text-center font-raleway font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-8xl" style={{ textShadow: '2px 2px 4px rgba(31, 26, 25, 0.75)' }}>
          Welcome to<br></br>Virtual Bartender
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
