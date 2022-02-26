import React, {Fragment} from 'react';
import "./Heading.css";
//there are styles only for h1-h3 headings. Add mpore styles if you need
const Heading = ({headingTagUPPERCASE, value}) => {
    let content = {};
    switch (headingTagUPPERCASE) {
        case "H1" :
            content = <h1 className='caption_h1'>{value}</h1>;
            break;
        case "H2" :
            content = <h2 className='caption_h2'>{value}</h2>;
            break;
        case "H3" :
            content = <h3 className='caption_h3'>{value}</h3>;
            break;
        case "H4" :
            content = <h4 className='caption_h3'>{value}</h4>;
            break;
        case "H5" :
            content = <h5 className='caption_h3'>{value}</h5>;
            break;
        case "H6" :
            content = <h6 className='caption_h3'>{value}</h6>;
            break;
    }
    return (
        <Fragment>
            {content}
        </Fragment>        
    );
}

export default Heading;
