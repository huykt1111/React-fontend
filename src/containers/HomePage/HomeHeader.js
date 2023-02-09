import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        // fire redux event : actions
    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                        </div>
                        <div className='center-content'>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.choose-doctor" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="far fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vn active' : 'language-vn'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'>
                            <FormattedMessage id="banner.title-1" />
                        </div>
                        <div className='title-2'>
                            <FormattedMessage id="banner.title-2" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-1" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-2" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-3" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-flask"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-4" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-5" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
