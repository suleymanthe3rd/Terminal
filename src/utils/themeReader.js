import apolloNotype from '../themes/apollo-notype.json';
import apollo from '../themes/apollo.json';
import blade from '../themes/blade.json';
import chalkboardLigatures from '../themes/chalkboard-ligatures.json';
import chalkboardNotype from '../themes/chalkboard-notype.json';
import chalkboard from '../themes/chalkboard.json';
import cyborgFocus from '../themes/cyborg-focus.json';
import cyborg from '../themes/cyborg.json';
import interstellar from '../themes/interstellar.json';
import matrix from '../themes/matrix.json';
import navyDisrupted from '../themes/navy-disrupted.json';
import navyNotype from '../themes/navy-notype.json';
import navy from '../themes/navy.json';
import nord from '../themes/nord.json';
import red from '../themes/red.json';
import tron from '../themes/tron.json';

const themes = {
  apolloNotype,
  apollo,
  blade,
  chalkboardLigatures,
  chalkboardNotype,
  chalkboard,
  cyborgFocus,
  cyborg,
  interstellar,
  matrix,
  navyDisrupted,
  navyNotype,
  navy,
  nord,
  red,
  tron
};

function rgbToHex(r, g, b) {
  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function getThemesData() {
  const themeData = {};

  Object.keys(themes).forEach((theme) => {
    const colors = themes[theme].colors;
    const primarycolor = `#${rgbToHex(colors.r, colors.g, colors.b)}`;
    const secondaryColor = colors.grey;
    const backgroundcolor = colors.light_black;
    themeData[theme] = { primarycolor, secondaryColor,backgroundcolor};
  });

  return themeData;
}

export default getThemesData;
