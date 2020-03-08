import React from 'react';
import styled from '@emotion/styled';

const DivQuote = styled .div `
    background-color: white;
    border: 1px solid black;
    color: #085D2E;
    margin: 3rem;
    padding: .8rem 1.2rem;
    max-width: 800px;

    @media ( min-width: 992px ) {
        margin: 3rem 0;
    }

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        font-size: 2rem;
        margin-bottom: .3rem;
        text-align: center;
        padding-left: 4rem;

        &::before {
            color: black;
            content: open-quote;
            font-size: 14rem;
            position: absolute;
            left: -3.2rem;
            top: -2.8rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.3rem;
        color: black;
        font-style: italic;
        font-weight: bold;
        margin-top: .3rem;
        padding-left: 4rem;
        text-align: left;
    }
`;

const Quote = ({ quote }) => {          // Destructure props

    /** Valida si el objeto trae propiedades (Si se cumple no muestra el componente) */
    if( Object.keys( quote ) .length === 0 ) {
        return null;
    }

    return (
        <DivQuote>
            <blockquote>
                <h2>{ quote .quote }</h2>
                <p>{ quote .author }</p>
            </blockquote>
        </DivQuote>
    );
}

export default Quote;