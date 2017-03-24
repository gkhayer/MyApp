/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Banner.css';
import Navigation from '../Navigation';

const banner = ({data}) => {
    if (typeof data === 'undefined'){
        return null
    }

    return (
        <figure className="banner" style={{
            backgroundImage: `url(${data.imageUrl})`
        }}>
            {data.content ? <span>{data.content}</span> : null}
        </figure>
    )
}







