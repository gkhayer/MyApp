/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Usersupport.css';

class Usersupport extends React.Component {
    static propTypes = {
    title: PropTypes.string.isRequired,
  };
    render() {
        return (
             <div className=" root">
                <div className={s.container}>
                    <div className={s.main}>                                        
                        <section className={s.even}>
                            <div className={s.sectionContainer}>
                                <div className={s.splitPane}>
                                    <div className={s.copy}>

                                    </div>
                                    <div className={s.visulization}>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={s.odd}>
                            <div className={s.sectionContainer}>
                                <div className={s.splitPane}>
                                    <div className={s.copy}>

                                    </div>
                                    <div className={s.visulization}>

                                    </div>
                                </div>
                            </div>  
                        </section>
                        <section className={s.even}>
                            <div className={s.sectionContainer}>
                                <div className={s.splitPane}>
                                    <div className={s.copy}>

                                    </div>
                                    <div className={s.visulization}>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={s.odd}>
                            <div className={s.sectionContainer}>
                                <div className={s.splitPane}>
                                    <div className={s.copy}>

                                    </div>
                                    <div className={s.visulization}>

                                    </div>
                                </div>
                            </div>  
                        </section>
                    </div>          
                </div>
            </div>
          
        );
    }
}

export default withStyles(s)(Usersupport);