import { clock } from './components/clock.js';
import { ProgressBar } from './components/ProgressBar.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';

clock('.clock', '01-04 14:00:00');
const progress = new ProgressBar('.left-column', progressBarData);
renderSocials('footer > .socials', socialsData);
