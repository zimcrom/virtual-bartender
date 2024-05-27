import { useState, useEffect, useCallback } from "react";
import type { NextPage } from "next";
import axios from "axios";
import { config } from "dotenv";
import Infopanel from "@/components/Infopanel";
import CocktailCard from "@/components/CocktailCard";

config();

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
  headers: {
    'X-RapidAPI-Key': '5cd337c21cmsh2a0a46c91566eb6p1192c5jsna04dde81652a',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

const InspirationPage: NextPage = () => {
  const [cocktails, setCocktails] = useState<any[]>([])
  const [ginActive, setGinActive] = useState(false);
  const [vodkaActive, setVodkaActive] = useState(false);
  const [rumActive, setRumActive] = useState(false);
  const [whiskeyActive, setWhiskeyActive] = useState(false);
  const [tequilaActive, setTequilaActive] = useState(false);
  
    async function fetchData() {
      try {
        const response = await axios.request(options);
        setCocktails(response.data.drinks); // Set the fetched data to state
        console.log(response.data.drinks)
      } catch (error) {
        console.error(error);
      }
    }
  
    const inspirationHandler = useCallback(() => {
      fetchData();
    }, []);
  

  return (
    <div className="bg-olive-green">
      <Infopanel
        header="Get Inspired"
        videoURL="/images/pexels-cottonbro-8942658.mp4"
        alt="a green drink in front of a chair"
        isVideo
        imgClass="object-bottom"
        paragraph="about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here"
        headerColor="text-dark-brown"
        pColor="text-dark-brown"
        theme="light-sepia"
        borderTheme="border-mahogany"
        backgroundColor="bg-satin-linen"
      />
      <div className="flex flex-row justify-center pb-20">
        <button
          className="border-mahogany border-2 bg-satin-linen bg-opacity-40 text-xl md:text-2xl font-montserrat text-dark-brown mx-auto px-10 py-8 hover:bg-dark-green hover:text-satin-linen cursor-pointer"
          onClick={inspirationHandler}
        >
          Click here to begin
        </button>
      </div>

      <div className="mx-auto flex flex-row flex-wrap gap-8"></div>      <div className="mx-auto flex flex-row flex-wrap gap-8">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            img={{ src: cocktail.strDrinkThumb, alt: cocktail.strDrink }}
            title={cocktail.strDrink}
            category={cocktail.strCategory}
            alcoholic={cocktail.strAlcoholic === "Alcoholic"}
            glass={cocktail.strGlass}
            instructions={cocktail.strInstructions}
            ingredients={Object.keys(cocktail)
              .filter(key => key.startsWith('strIngredient') && cocktail[key])
              .map(key => cocktail[key])}
          />
        ))}
      </div>    </div>
  );
};

export default InspirationPage;
