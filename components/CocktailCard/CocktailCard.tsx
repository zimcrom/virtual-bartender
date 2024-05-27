import React from "react";
import Image from "next/image";

const CocktailCard: React.FunctionComponent<{
  img: {
    src: string;
    alt: string;
  };
  title: string;
  category: string;
  alcoholic?: boolean;
  glass: string;
  instructions: string;
  ingredients: Array<string>;
}> = ({
  img,
  title,
  category,
  alcoholic,
  glass,
  instructions,
  ingredients,
}) => {
  return (
    <div className="w-full flex lg:flex-row flex-col">
      <div className="flex flex-col w-full lg:w-1/2">
        <Image
          src={img.src}
          alt={img.alt}
          height={1000}
          width={1000}
          className="object-center object-cover w-full h-auto"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 px-16">
        <h3 className="font-oswald text-2xl font-bold">{title}</h3>
        <span className="flex flex-row w-1/2 font-raleway">
          <p className="bg-mahogany text-olive-green rounded-3xl mr-4 p-2">{category}</p>
          <p className="bg-mahogany text-olive-green rounded-3xl p-2">
            {alcoholic ? "alcoholic" : "non-alcoholic"}
          </p>
        </span>
        <p className="font-raleway">Glass: {glass}</p>
        <p className="font-raleway">{instructions}</p>
        <ul className="flex flex-col">
          {ingredients.map((cocktail, i) => {
            return <li className="font-raleway" key={i}>{cocktail}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CocktailCard;
