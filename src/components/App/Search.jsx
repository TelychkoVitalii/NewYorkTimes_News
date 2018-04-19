import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import * as api from '../../services/api';
import '../../styles/Search.css';

const Search = inject('store')(observer(class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: ''
        }
    }

    searchData = (e) => {
        const term = e.target.value;
        this.setState({isShow: term});
        return api.fetchArticles(term)
            .then(response => response.data.response.docs)
            .then(data => this.props.store.setSearchData(data))
            .catch(error => error);
    };

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.isShow}
                       placeholder="Search Article..."
                       className="searchInput"
                       onChange={this.searchData}/>
                    <ul className={!this.state.isShow ? 'hideList' : 'articlesList'}>
                        {this.props.store.articles.map((article, index) => {
                            return (
                                <li key={index}>
                                    <a href={article.web_url}
                                       className='articleLink'
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