import React from "react";

const Subject = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.onChangePage();
    };

    return (
        <header>
            <h1>
                <a href="/" onClick={handleClick}>
                    {props.title}
                </a>
            </h1>
            {props.sub}
        </header>
    );
};

export default Subject;
