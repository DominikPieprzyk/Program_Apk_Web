import { App } from './app';
import { UIWeather } from './UiWeather';
import './main.scss';

const uiWeather = new UIWeather();
const app = new App(uiWeather);
