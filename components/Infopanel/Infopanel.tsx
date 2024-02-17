import React from "react";

const Infopanel: React.FunctionComponent<{
  header: string;
  imgURL?: string;
  alt: string;
  imgClass?: string;
  paragraph: string;
  paragraph2?: string;
  headerColor: string;
  pColor: string;
  reverse?: boolean;
  isVideo?: boolean;
  videoURL?: string;
  centered?: boolean;
  isSquare?: boolean;
  theme: string;
  borderTheme: string;
  backgroundColor?: string;
}> = ({
  header,
  imgURL,
  alt,
  imgClass,
  paragraph,
  paragraph2,
  headerColor,
  pColor,
  reverse,
  isVideo,
  videoURL,
  centered,
  isSquare,
  theme,
  borderTheme,
  backgroundColor
}) => {
  return (
    <div
      className={`mx-auto flex max-w-[60rem] flex-col-reverse items-center justify-center py-10 ${
        reverse ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="mx-auto flex aspect-square w-full flex-col md:w-[60%]">
        {isVideo ? (
          <video
          src={videoURL}
            title={alt ? alt : `${header} video`}
            aria-label={alt ? alt : `${header} video`}
            className={`${
              isSquare
                ? "my-auto aspect-square overflow-hidden object-cover"
                : "aspect-video md:my-auto"
            }`}
          autoPlay
          muted
          loop
          style={{ objectFit: 'cover' }}
        />
        ) : (
          <img
            src={imgURL}
            alt={alt ? alt : `${header} splash image`}
            className={`${
              isSquare ? "aspect-square overflow-hidden object-cover" : ""
            } ${imgClass ? imgClass : ""}`}
          />
        )}
      </div>
      <div
        className={`relative mx-auto my-auto flex h-3/4 w-[90%] translate-y-8 flex-col justify-center md:w-[40%] md:translate-y-0 ${
          reverse
            ? "-translate-x-0 md:-translate-x-0"
            : "translate-x-0 md:translate-x-0"
        }`}
      >
        <div
          className={`p-[3rem_3rem_5rem] md:w-[110%] ${
            reverse
              ? "md:-translate-x-[17%] md:p-[3rem_3rem_3rem_30%]"
              : "md:p-[3rem_30%_3rem_3rem"
          } border-2 ${borderTheme} ${backgroundColor ? `${backgroundColor} bg-opacity-40` : ""}`}
        >
          <span className={`w-1/2 text-6xl font-oswald ${headerColor}`}>{header}</span>
          <hr
            className={`my-3 mb-4 h-[2px] w-1/4 border-none bg-${theme}`}
          ></hr>
          <div
            className={`${pColor} text-lg font-raleway`}
            dangerouslySetInnerHTML={{ __html: paragraph ? paragraph : "" }}
          />
          {paragraph2 && (
            <div>
              <br></br>
              <div
                className={`${pColor} text-lg font-raleway`}
                dangerouslySetInnerHTML={{ __html: paragraph2 }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Infopanel;
