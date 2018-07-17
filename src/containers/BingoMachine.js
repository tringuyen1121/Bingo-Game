import React from 'react';
import './BingoMachine.css';
import { connect } from 'react-redux';
import { drawNumber } from '../actions';
import { bindActionCreators } from 'redux';

class BingoMachine extends React.Component {

    onDrawNumber = () => {
        const { numbers } = this.props;
        this.props.drawNumber(numbers);
    }

    renderNumbers = () => {
        let text = '';
        return this.props.numbers.map(number => {
            switch (true) {
                case number < 16:
                    text = `B${number}`;
                    break;
                case number < 31:
                    text = `I${number}`;
                    break;
                case number < 46:
                    text = `N${number}`;
                    break;
                case number < 61:
                    text = `G${number}`;
                    break;
                case number < 76:
                    text = `O${number}`;
                    break;
                default:
                    text = number;
            }
            return <li className="list-group-item" key={number}>{text}</li>
        })
    }

    render() {

        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.onDrawNumber()}>
                    Draw Number
                </button>
                <ul className="list-group"> {this.renderNumbers()} </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ numbers }) => {
    return { numbers };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ drawNumber }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BingoMachine);