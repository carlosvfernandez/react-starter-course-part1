import { digits, operators } from '../data/digitsAndOperators'

class Calculator extends React.Component {
    state = {
        res: ""
    }
    onDigit = (digit) => {
        const lastValue = this.state.res.charAt(this.state.res.length - 1);
        if (this.state.res.length == 0 && digit == ".") {
            return false;
        } else {
            if (lastValue != "." || digit != ".") {
                const expression = this.state.res + digit;
                this.setState({
                    res: expression
                })
            }
        }
    }

    onOperator = (digit) => {
        if (this.state.res != "") {
            const lastValue = this.state.res.charAt(this.state.res.length - 1);
            if (!isNaN(lastValue)) {
                const expression = this.state.res + digit;
                this.setState({
                    res: expression
                })
            }
        }
    }
    executeOperation = () => {
        if (operators.filter(operator => this.state.res.includes(operator)) != "") {
            const results = eval(this.state.res);
            this.setState({
                res: results
            })
        }
    }

    render() {
        return (
            <div>
                <div className="z-depth-2 light-blue lighten-2 white-text center-align results">
                    {this.state.res || "0"}
                </div>
                <div className="calc-container blue lighten-3 hoverable z-depth-2">
                    {
                        digits.map(digit => {
                            return (
                                <a className="waves-effect waves-light btn" key={digit} onClick={() => this.onDigit(digit)}>{digit}</a>
                            )
                        })
                    }
                    <div className="operators center-align">
                        {
                            operators.map(digit => {
                                return (
                                    <a className="waves-effect waves-light btn deep-orange darken-1" key={digit} onClick={() => this.onOperator(digit)}>{digit}</a>
                                )
                            })
                        }
                        <a className="waves-effect waves-light btn deep-orange darken-1" onClick={() => this.setState({ res: "" })}>C</a>
                    </div>
                    <a className="waves-effect waves-light btn deep-orange darken-1" onClick={this.executeOperation}>=</a>
                </div>
                <style jsx>{
                    `
    .results{
            width: 300px;
            margin: 0 auto;
            font-size: 32px;
            margin-bottom: 10px;
        }
        .calc-container{
            width: 300px;
            margin: 0 auto;
            text-align: center;
            padding 12px;
        }
        .calc-container a{
            margin: 5px;
            padding: 0px 30px 0px 30px;
        }
        .operators{
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 20px;
        }
                `
                }</style>
            </div>
        )
    }
}

export default Calculator;