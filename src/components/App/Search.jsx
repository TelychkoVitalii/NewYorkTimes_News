import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import '../../styles/Search.css';

const Search = inject('store')(observer(class Search extends Component {
    articles;
    constructor(props) {
        super(props);
        this.state = {
            isShow: ''
        }
    }

    searchData = (e) => {
        const term = e.target.value, { articleStore } = this.props;
        this.setState({isShow: term});
        articleStore.loadArticles(term);
    };

    render() {
        const { articleStore } = this.props;
        return (
            <div>
                <input type="text"
                       value={this.state.isShow}
                       placeholder="Search Article..."
                       className="searchInput"
                       onChange={this.searchData}/>
                    <ul className={!this.state.isShow ? 'hideList' : 'articlesList'}>
                        {/*{articleStore.articles.map((article, index) => {*/}
                            {/*return (*/}
                                {/*<li key={index}>*/}
                                    {/*<a href={article.web_url}*/}
                                       {/*className='articleLink'*/}
                                       {/*target="_blank">*/}
                                        {/*{article.headline.main}*/}
                                    {/*</a>*/}
                                {/*</li>*/}
                            {/*)*/}
                        {/*})}*/}
                    </ul>
            </div>
        );
    }
}));

export default Search;