import React, { Fragment } from 'react';

const Quote = ({ quote }) => {          // Destructure props
    return (
        <Fragment>
            <p>{ quote .quote }</p>
            <p>{ quote .author }</p>
        </Fragment>
    );
}

export default Quote;