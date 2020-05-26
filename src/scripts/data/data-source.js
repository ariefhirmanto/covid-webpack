import data from "./data.js";

class DataSource {
    static searchDataProvince(keyword) {
        return new Promise((resolve, reject) => {
            const filteredData = data.filter((data) => {
                return data.toUpperCase().includes(keyword.toUpperCase());
            });   
            if (filteredData.length) {
                resolve(filteredData);
            } else {
                reject(`${keyword} is not found`);
            }  
        });  
    }
}

export default DataSource;