import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Speciality.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Speciality extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='section-speciality'>
                <div className='speciality-content'>
                    <Slider {...settings}>
                        <div>
                            <h3 className='img-customize'>1</h3>
                        </div>
                        <div>
                            <h3 className='img-customize'>2</h3>
                        </div>
                        <div>
                            <h3 className='img-customize'>3</h3>
                        </div>
                        <div>
                            <h3 className='img-customize'>4</h3>
                        </div>
                        <div>
                            <h3 className='img-customize'>5</h3>
                        </div>
                        <div>
                            <h3 className='img-customize'>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
