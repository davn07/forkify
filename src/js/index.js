import Search from './models/Search';
import * as searchView from './views/searchView';
import { element, elements } from './views/base';

/** Global state of the App
 * - Search object
 * - Current recipe object
 * - Shopping list Object
 * - Liked recipes
 */

const state = {}

const controlSearch = async () => {
    // 1) Get query from the view
    const query = searchView.getInput();
    //console.log(query);

    if (query){
        // 2) New Search object and add to the state
        state.search = new Search(query);

        // 3) Prepare the UI for the results
        searchView.clearInput();
        searchView.clearResult();

        // 4) Search for recipes
         await state.search.getResults();

        // 5) Render results on the UI
        searchView.renderResults(state.search.result);
        console.log(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});