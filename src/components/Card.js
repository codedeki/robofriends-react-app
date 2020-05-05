import React from 'react';
import { shallow, mount, render } from 'enzyme';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props; //or cleaner to put directly in paramaters
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
                <div>
                    <h2>{name}</h2> 
                    <p>{email}</p>
                    {/* js expressions marked in curly braces */}
                </div>
        </div>
    );
}

export default Card;