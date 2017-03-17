import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Paragraph.css';

    const paragraph = ({heading, copy, align}) => (
        <div className="paragraph">
            {heading ? <h5 className="paragraph-heading">{heading}</h5> : null}
            <p style={{
                textAlign: align || 'left'
            }}>{copy}</p>
        </div>
    )

paragraph.PropTypes = {
    heading: PropTypes.string,
    copy: PropTypes.string.isRequired,
    align: PropTypes.string
}

export default paragraph