/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/usersupport">User Support</Link>
        <Link className={s.link} to="/security">Security</Link>
        <Link className={s.link} to="/hardware">Hardware</Link>
        <Link className={s.link} to="/software">Software</Link>
        <Link className={s.link} to="/printing">Printing</Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
