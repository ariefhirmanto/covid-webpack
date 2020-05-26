import './components/card-data-national.js';
import './components/card-data-regional.js';
import './components/chart-data.js';
import './components/search-bar.js';
import DataSource from './data/data-source.js';

function main() {
    const baseURL = "https://indonesia-covid-19.mathdro.id/api";
    const searchElement = document.querySelector("search-bar");
    const chartDataElement = document.querySelector("chart-data");
    const cardDataElementNational = document.querySelector("#dataNational");
    const cardDataElementRegional = document.querySelector("#dataRegional");

    const getDataProvince = (specificData) => {
        fetch(`${baseURL}/provinsi`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           let dataProvince = responseJson.data;
           renderDataProvince(dataProvince, specificData);
       })
    };

    const getDataNational = () => {
        fetch(`${baseURL}`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
            let dataProvince = responseJson;
            renderDataNational(dataProvince);
       })
    }

    const getDailyCase = () => {
        fetch(`${baseURL}/harian`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           let dailyCase = responseJson.data;
           renderDailyCase(dailyCase);
       })
    }

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchDataProvince(searchElement.value);
            getDataProvince(result[0]);
        } catch (message) {
            showResponseMessage(message);
        }
    };

    const renderDataNational = results => {
        cardDataElementNational.value = results;
    };

    const renderDataProvince = (dataProvince, data) => {
        dataProvince.forEach(iteration => {
            if (iteration.provinsi === data) {
                cardDataElementRegional.value = iteration;
            } 
        });
    };

    const renderDailyCase = (results) => {
        let obj = {
            day: [],
            infectedCase: [],
            curedCase: [],
            deathCase: []
        }
        let i = 0;
        results.forEach(data => {
            obj.day[i] = data.harike;
            obj.infectedCase[i] = data.jumlahKasusKumulatif;
            obj.curedCase[i] = data.jumlahPasienSembuh;
            obj.deathCase[i] = data.jumlahPasienMeninggal;
            i++;
        });
        console.log(obj);
        chartDataElement.value = obj;
    };
   
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    
    getDailyCase();
    getDataNational();
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;