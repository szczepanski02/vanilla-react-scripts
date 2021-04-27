const Suffix = (props) => {
    const select = props.product;
    if(select === "electricity") return <em>kWh</em>
    else if(select === "gas") return <em>lt</em>
    else if(select === "oranges") return <em>kg</em>
    else return null;
}


const Cash = (props) => {
    const {title, cash, ratio, price} = props;

    const value = (cash / ratio * price).toFixed(2);
    return (
        <div>{title} {cash <= 0 ? "" : value}</div>
    )
}

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
        product: "electricity"
    }

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'zloty',
                ratio: 1,
                title: 'ZŁ:'
            },
            {
                id: 1,
                name: 'dollar',
                ratio: 3.6,
                title: 'USD:'
            },
            {
                id: 2,
                name: 'euro',
                ratio: 4.1,
                title: 'EURO:'
            },
        ],
        prices: {
            electricity: .51,
            gas: 4.76,
            oranges: 3.79,
        }
    }

    handleChange(e) {
        this.setState({
            amount: e.target.value
        });
    }

    handleSelect(e) {
        this.setState({
            product: e.target.value,
            amount: "",
        })
    }

    selectPrice(select) {
        return this.props.prices[select];
    }

    render() {
        const { amount, product } = this.state;
        const price = this.selectPrice(product);

        const calculators = this.props.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price}/>
        ));

        return (
            <div className="app">

                <label>Wybierz produkt:
                    <select value={product} onChange={this.handleSelect.bind(this)}>
                        <option value="electricity">electricity</option>
                        <option value="gas">gas</option>
                        <option value="oranges">oranges</option>
                    </select>
                </label>
                <br />

                <label>
                    <input type="number" value={amount} onChange={this.handleChange.bind(this)}/>
                    <Suffix product={product}/>
                </label>
                {calculators}
            </div>
        )
    }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));