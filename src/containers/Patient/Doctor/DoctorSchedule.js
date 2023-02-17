import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import { getScheduleDoctorByDate } from '../../../services/userService'
import './DoctorSchedule.scss';
import { LANGUAGES } from '../../../utils';
import localization from 'moment/locale/vi';
import moment from 'moment';

class DoctorSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
        }
    }

    async componentDidMount() {
        let { language } = this.props;

        this.setArrDays(language);
    }

    setArrDays = (language) => {
        let arrDays = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            }
            else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
            }

            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDays.push(object);
        }



        this.setState({
            allDays: arrDays
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language != prevProps.language) {
            this.setArrDays(this.props.language);
        }
    }

    handleOnChangeSelect = async (event) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent != -1) {
            let id = this.props.doctorIdFromParent;
            console.log(event.target.value);
            let date = event.target.value;
            let res = await getScheduleDoctorByDate(id, date);
            console.log("res", res)
        }
    }

    render() {
        let { allDays } = this.state;
        return (
            <div className="doctor-schedule-container">
                <div className="all-schedules">
                    <select onChange={(event) => this.handleOnChangeSelect(event)}>
                        {allDays && allDays.length > 0 && allDays.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="all-available-time">

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
