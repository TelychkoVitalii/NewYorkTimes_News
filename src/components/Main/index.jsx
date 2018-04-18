import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import capitalize from 'lodash.capitalize';

function Main() {
    const sections = ['sports', 'politics', 'business', 'travel', 'food', 'fashion', 'movies', 'theater', 'books'];
    return (
        <div className="wm_main">
            {sections.map((section, index) => {
                return (
                    <Link key={index}
                          to={`/topic/${section}`}
                          className="sectionInterface">
                        {capitalize(section)}
                    </Link>
                )
            })}
        </div>
    );
}

export default Main;