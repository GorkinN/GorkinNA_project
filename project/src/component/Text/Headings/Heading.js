import React, {Fragment} from 'react';
import "./Heading.css";
//there are styles only for h1-h3 headings. Add mpore styles if you need
const Heading = ({headingTagUPPERCASE, children}) => {
    let content = {};
    switch (headingTagUPPERCASE) {
        case "H1" :
            content = <h1 className='caption_h1'>{children}</h1>;
            break;
        case "H2" :
            content = <h2 className='caption_h2'>{children}</h2>;
            break;
        case "H3" :
            content = <h3 className='caption_h3'>{children}</h3>;
            break;
        case "H4" :
            content = <h4 className='caption_h3'>{children}</h4>;
            break;
        case "H5" :
            content = <h5 className='caption_h3'>{children}</h5>;
            break;
        case "H6" :
            content = <h6 className='caption_h3'>{children}</h6>;
            break;
    }
    return (
        <Fragment>
            {content}
        </Fragment>        
    );
}

export default Heading;
