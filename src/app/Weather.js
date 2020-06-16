export class Weather {

    constructor(city, countryCode){
        this.apikey = '9cbf462a8a83ca882a53821890fa68d9';
        this.city = city;
        this.countryCode = countryCode;
    }


    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        //const URI = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9cbf462a8a83ca882a53821890fa68d9';
        const response = await fetch(URI);
        const data = await response.json(); // pasar los datos a json
        return data;
    }

    changeLocation(city, contryCode){
        this.city = city;
        this.countryCode = countryCode;
    }

}

