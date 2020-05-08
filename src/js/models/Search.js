import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    /*  // FIRST API CALL SAMPLE

    async function getResults(food){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '7a454d8c3c01441496fcad4514fe6932';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?query=${food}&number=30&apiKey=${key}`);
            const recipes = res.data.results;
            console.log(recipes);
        }catch(error){
            alert(Error);
        }
    }
    getResults('tomato pasta');
    */

    // SECOND API CALL SAMPLE  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

    async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'bcd7987f7bab7581a4766b4fa4edac24';
        const apiID = 'e7f0a863';
        try{
            const res = await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${apiID}&app_key=${key}&from=0&to=30`);
            this.result = res.data.hits;
            //console.log(this.result);
        }catch(error){
            alert(Error);
        }   
    }

   
}


