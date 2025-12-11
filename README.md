# CS-563 Final Project

For the final project for CS-563, I created a personal webpage as per the project instructions. The main area where I deviated into doing something extra is the page for my vinyl collection.

The project can be seen live at https://mariahsager.com or, if it fails to load for some reason, http://167.99.238.162.

## Deploying locally

1. Clone the repository to your local machine.
2. Open the project directory inside of your terminal.
3. Choose one of the two following options:

   a. **Python** – Enter the following command into your terminal:

   `python3 -m http.server`

   b. **Node.js** – Enter the following command into your terminal:

   `npx serve .`

4. In a browser, visit `http://localhost:<port number>`. The port is likely to be `3000` or `8000`; it should specify in your terminal.

### Troubleshooting

#### Dependencies

If, when following the above instructions for deployment, your terminal prompts you to install any dependencies, follow the instructions in the terminal.

#### Issues with `vinyl.html`

Should the vinyl page come up with an error such as "No vinyls found or error fetching collection", wait a few minutes and reload.

## Tutorials and resources used

- [Discogs API and vinyl display](https://pixelswap.fr/entry/displaying-my-vinyl-collection-from-the-discogs-api/)
- [Spinning animation](https://stackoverflow.com/questions/16771225/css3-rotate-animation)
- [Curved text SVG](https://css-tricks.com/snippets/svg/curved-text-along-path/)
- [SVG `stroke-linejoin` property](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-linejoin)
- [Web3Forms](https://web3forms.com/)
- [HTTPS with certbot](https://landchad.net/basic/certbot/)
- [Customized `<hr>`](https://forum.bootstrapstudio.io/t/create-a-hr-with-an-icon-inside/11669)

## Additional notes

- Any duplicate vinyls on the vinyl page are reflective of actual duplicate vinyls that I own. In most cases, if you follow the links by clicking on the vinyls, you will see that they actually link to separate releases.
- The project instructions say to include links for each project listed as previous experience. I am unable to do this as sadly the projects I worked on while at Thoughtworks are now defunct and/or utilized private repositories.
