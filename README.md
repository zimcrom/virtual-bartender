# Virtual Bartender
*A portfolio piece to showcase familiarity with Next.js, TailwindCSS, and React*

---

## Index
- [Concept](#Concept)
- [Process](#Process)
- [Challenges vs. Sucesses](#challenges-vs-successes)
- [Demo Gifs/Photos](#demo-gifsphotos)
- [Future Development](#future-development)
- [Links](#Links)


## Concept
Virtual Bartender is a web application designed to demonstrate proficiency in Next.js, Tailwind CSS, and React. With a focus on responsiveness and accessibility, this app provides users with a seamless experience across devices. Featuring a clean and intuitive interface, the site has a standard home and about page, with all sections of the site accessible from the header and footer. Leveraging the CocktailDB API, users can explore a vast collection of cocktails based on various criteria. Whether searching by ingredient, exploring random suggestions, or filtering by alcohol type, Virtual Bartender empowers users to discover new and exciting drink recipes with ease. Explore the world of mixology from the comfort of your browser with Virtual Bartender.

## Process
I began with building a next.js app, installing tailwind, and just getting the app up and running. Once all dependencies worked as expected, I searched for stock photos. I was able to find some wonderful images from cottonbro studio, as listed in [credits.md](/credits.md). I then used the [canva color generator](https://www.canva.com/colors/color-palette-generator/) to create the theme for my app. I loaded in the colors, found some appropriate fonts from [google fonts](https://fonts.google.com/), and created some templates to help maintain style. I'm not a designer, so this part was especially challenging. Keeping separate files to track what colors and fonts were used where was particularly helpful in this.

Next, I set up the header and footer and added some blank links for placeholders. Once they were styled and showing up correctly, I adjusted them for responsiveness, and ensured that the links were skippable if the user was tabbing to the main content of the page. I used [site improve](https://www.siteimprove.com/) to check my color scheme in the header and footer. I also used [canva](https://www.canva.com/) to create the header and footer logos. I also used it to create the favicon for the page.

For the home page, I started with a nice video background to welcome the user to the page. Next, in the about section, I created two infopanels with filler text to demonstrate these responsive panels I'd created in a different project. At this point, it was time to integrate the API. I was torn between using fetch and axios, but ultimately ended up on axios. I installed the proper packages, set up my ENV file, and began my test calls.

## Challenges vs. Successes
| Challenges | Successes |
| ----------- | ----------- |
| Creating an appealing design | Utilizing tailwind |
| Integrating API | Integrating dotenv to hide API key |
| Having time to work reliably on project | Maximizing time available to create a beautiful site while in progress |

## Demo Gifs/Photos
Here, we can see the homepage, with the header, video block, and footer
![Tour of homepage](/public/images/README-images/homepage.gif)

Next, we can see the about page with two info panels. We can see on resize, how the panels and header shift to be responsive
![Tour of about page](/public/images/README-images/about.gif)

In this gif, we can see the accessible header in action on the get-inspired page. We can see an info panel featuring a video as well. At first, the user can be seen tabbing repeatedly to get through the header. This takes quite a while. The second time, when tabbing from the beginning, we see the hidden skip button appear, and when the enter key is pressed, we can see the user easily skip tabbing the header. While there aren't too many links in this header, this can be useful for a page with many more links.
![Tour of accessibility features](/public/images/README-images/accessibility.gif)

## Future Development
I'm aiming to finish API integration and add the ability to see 10 randomly generated drinks, search by ingredient, and search by alcohol type. I'll be creating card components


## Links
- [Repo Link](https://github.com/zimcrom/virtual-bartender)
- Site will be deployed in the future

