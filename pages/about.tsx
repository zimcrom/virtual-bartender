import Infopanel from "@/components/Infopanel";

export default function About() {
  return (
    <div className="bg-light-sepia">
      <div className="mx-auto w-full lg:w-[95%] xl:w-[85%]">
      <Infopanel
        header="About Virtual Bartender"
        imgURL="/images/pexels-cottonbro-studio-8942308.jpg"
        alt="a green drink in front of a chair"
        isSquare
        imgClass="object-bottom"
        paragraph="about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here"
        headerColor="text-dark-green"
        pColor="text-dark-green"
        theme="bright-green"
        borderTheme="border-bright-green"
        backgroundColor="bg-satin-linen"
      />

<Infopanel
reverse
        header="More About Virtual Bartender"
        imgURL="/images/pexels-cottonbro-studio-8942300.jpg"
        alt="a green drink in front of a chair"
        isSquare
        paragraph="about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here about info paragraph here"
        headerColor="text-mahogany"
        pColor="text-mahogany"
        theme="medium-brown"
        borderTheme="border-medium-brown"
        backgroundColor="bg-satin-linen"
      />

      </div>
    </div>
  );
}
