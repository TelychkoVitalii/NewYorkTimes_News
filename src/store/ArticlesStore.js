import { types, flow } from "mobx-state-tree";
import api from '../components/App/Api';

const Articles = types.model('Articles', {
    articles: types.array(types.frozen)
}).actions(self => ({
    loadArticles: flow(function* (term) {
        self.articles = [];
        try {
            const json = yield api.get(`/search/v2/articlesearch.json?`, {params: {q: term}});
            self.articles = json.data.response.docs;
        } catch(e) {
            console.error('Failed to load articles');
        }
    })
}));

const store = Articles.create({
    articles: []
});

export default store;
