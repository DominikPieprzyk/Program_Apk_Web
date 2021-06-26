import { IWeatherData } from './interface';
import { UIWeather } from './UiWeather';

export class App {
    opwApiKey = '0b41b0e491e4bdb79b599c327dafde4b';
    cityInput: HTMLInputElement;
    addCityBtn: HTMLButtonElement;
    uiWeather: UIWeather;

    constructor(uiWeather: UIWeather) {
        this.getInputAndButton();
        this.getCityData();
        this.getWeatherAllCities();
        this.uiWeather = uiWeather;
    }


    getWeatherAllCities(){
        let city:string [] = this.getData();
        city.forEach( async (element) => {
            let info = await this.getCityInfo(element);
            if (info.cod === 200) {
                console.log(info);
                this.uiWeather.renderWeatherElement(info);
            }
        });
    }

    saveCities(city: string): boolean {
        let existingCities = this.getData();
        if (!existingCities.includes(city)) {
            existingCities.push(city);
            localStorage.setItem('cities', JSON.stringify(existingCities));
            return true;
        }
        else {
            window.alert("City is already shown!");
            return false;
        }
    }

    getCityData(){
        this.addCityBtn.addEventListener("click", async () => {
            const city = await this.getCityInfo(this.cityInput.value);
            if(city.cod === 200){
                let isAdded = this.saveCities(city.name);    
                if (isAdded) this.uiWeather.renderWeatherElement(city);
            }
            else {
                window.alert("City doesn't exists!");
            }
        });
    }

    getInputAndButton(){
        this.cityInput = <HTMLInputElement>document.getElementById("cityInput");
        this.addCityBtn = <HTMLButtonElement>document.getElementById("cityAddButton");
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        return weather;
    }
    
    async getWeather(city: string): Promise<IWeatherData> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData: IWeatherData = await weatherResponse.json();
        return weatherData;
    }
   


    getData() {
        const data = localStorage.getItem('cities');
        return( data ? JSON.parse(data) : []);
    }

}
