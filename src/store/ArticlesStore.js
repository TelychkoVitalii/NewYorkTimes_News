// import { observable, decorate, action } from 'mobx';
// import api from '../components/App/Api';
//
// export default class ArticlesStore {
//     articles = [];
//
//     constructor(rootStore) {
//         this.rootStore = rootStore;
//     }
//
//     setSearchData = (term) => {
//         api.get(`/search/v2/articlesearch.json?`, {params: {q: term}})
//             .then(response => this.articles = response.data.response.docs)
//             .catch(error => error);
//     };
// }
//
// decorate(ArticlesStore, {
//     articles: observable,
//     setSearchData: action,
// });
