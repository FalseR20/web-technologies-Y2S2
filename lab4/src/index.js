import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const PizzaCount = (params) => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
        params.params(event.target.value);
    };

    return (
        <div className="field">
            <label className="field-label"> Введите количество пицц </label>
            <br/>
            <input
                type="text"
                className="input-field"
                name="pizza-count"
                required
                onChange={handleChange}
                value={message}
            />
        </div>
    );
};


class PizzaUnit extends React.Component {
    render() {
        return (
            <div className="field">
                <h1>PizzaField {this.props.count} times:</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            pizzaCount: 1,
        };
    }

    render() {
        return (
            <div>
                <header/>
                <div id="main">
                    <h1> Заказ пиццы </h1>
                    <form method="POST">
                        <PizzaCount params={this.handleChangeCount}/>
                        <PizzaUnit count={this.state.pizzaCount}/>
                        <input type="submit" className="button" value="Отправить"/>
                    </form>
                </div>
                <footer>
                    FalseR Forms
                </footer>
            </div>
        );
    }

    handleChangeCount = (count) => {
        console.log(count);
        if (count == null) count = 1;
        this.setState({pizzaCount: count});
        console.log("Log from parent: " + this.state.pizzaCount);
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Content/>);
