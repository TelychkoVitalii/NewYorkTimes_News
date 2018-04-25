import { types, flow } from "mobx-state-tree";
import api from '../components/App/Api';

const Articles = types.model('Articles', {
}).actions(self => ({
    loadArticles: flow(function* (term) {
        const json = yield api.get(`/search/v2/articlesearch.json?`, {params: {q: term}})
            .then(response => {
                self.articles = response.data.response.docs
                console.log(self.articles)
            })
            .catch(error => error);
    })
}));

const store = Articles.create();

export default store;
