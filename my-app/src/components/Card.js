import React from 'react';

/* In the className we are using the Tachyons css library, the following is what has been used:

tc = Text Centre
bg-light-green = background is light green
dib = display inline block
br3 = Border radius = 5rem
pa3 = padding spacing medium
ma2 = margin sapcing small
grow = hover effect that makes the element grow
bw2 = border width 25rem
shadow-5 = box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )

*/

// Empty angular brackets are shorthand for 'Fragment', this shorthand syntax does not support keys, React.Fragment does
// Could have the destructuring of props passed in instead of passing in props and then destructuring
const Card = (props) => {
    const { name, email, id, nickname } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?500x500`} />
            <> 
                <h2>{name}</h2>
                <h3>{nickname}</h3>
                <p>{email}</p>
            </>
        </div>
    )
}

export default Card;