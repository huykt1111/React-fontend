import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>tất cả các bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</div>
                            </div>
                            <div>
                                <div className='section-customize'>
                                    <div className='bg-image section-handbook' />
                                    <div>Cơ xương khớp 2</div>
                                </div>
                            </div>
                            <div>
                                <div className='section-customize'>
                                    <div className='bg-image section-handbook' />
                                    <div>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div>
                                <div className='section-customize'>
                                    <div className='bg-image section-handbook' />
                                    <div>Cơ xương khớp 4</div>
                                </div>
                            </div>
                            <div>
                                <div className='section-customize'>
                                    <div className='bg-image section-handbook' />
                                    <div>Cơ xương khớp 5</div>
                                </div>
                            </div>
                            <div>
                                <div className='section-customize'>
                                    <div className='bg-image section-handbook' />
                                    <div>Cơ xương khớp 6</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
