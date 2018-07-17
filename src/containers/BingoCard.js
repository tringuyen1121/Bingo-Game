import React from 'react';
import Cell from '../components/Cell';
import { connect } from 'react-redux';
import { createNumberTable } from '../actions';
import _ from 'lodash';
import './BingoCard.css';

class BingoCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: []
        }
    }

    componentDidMount() {
        this.props.createNumberTable();
    }

    renderCard = () => {
        const cells = this.props.card.map(cell => {
            return <Cell
                value={cell}
                checked={this.checkNumber(cell)}
            />
        })

        return (
            <table className="table-card">
                <thead>
                    <tr>
                        <th><Cell value='B' /></th>
                        <th><Cell value='I' /></th>
                        <th><Cell value='N' /></th>
                        <th><Cell value='G' /></th>
                        <th><Cell value='O' /></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBody(cells)}
                </tbody>
            </table>);
    }

    renderBody = (array) => {
        const body = [];
        for (let i = 0; i < array.length; i += 5) {
            const curRow = []
            for (let j = 0; j < 5; j++) {
                curRow.push(<td key={`c${i + j}`}>{array[i + j]}</td>)
            }

            body.push(<tr key={`r${i}`}>{curRow}</tr>)
        }
        return body;
    }

    checkNumber = (number) => {
        const itersection = _.intersection(this.props.card, this.props.numbers);

        return itersection.indexOf(number) !== -1;
    }

    isBingoYet = () => {
        const winners = [
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20]
        ]
    }

    render() {
        return (
            <div className="card-container">
                {this.props.card.length < 1 ? 'Loading...' : this.renderCard()}
                <button
                    className="btn btn-primary "
                    onClick={() => this.props.createNumberTable()}
                    disabled={this.props.numbers.length > 0}>Change Card</button>
            </div>

        )
    }
}

const mapStateToProps = ({ card, numbers }) => {
    return { card, numbers };
}

export default connect(mapStateToProps, { createNumberTable })(BingoCard);