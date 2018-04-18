import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import * as api from '../../services/api';
import '../../styles/Search.css';

const Search = inject('store')(observer(class Search extends Component {
    store = this.props.store;

    searchArtist = (e) => {
        const term = e.target.value;
        api.fetchArticles(term)
            .then(response => this.store.articles = response.data.response.docs)
            .catch(error => error);
    };

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Search Article..."
                       className="searchInput"
                       onChange={this.searchArtist}/>
                    <ul className="articlesList">
                        {this.store.articles.map((article, index) => {
                            return (
                                <li key={index}>
                                    <a href={article.web_url}
                                       className="articleLink"
                                       target="_blank">
                                        {article.headline.main}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        );
    }
}));

export default Search;