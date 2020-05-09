import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

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
        renderLoader(elements.searchRes);

        // 4) Search for recipes
         await state.search.getResults();

        // 5) Render results on the UI
        clearLoader();
        searchView.renderResults(state.search.result);
        console.log(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const gotoPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResult();
        searchView.renderResults(state.search.result, gotoPage)
    }
});