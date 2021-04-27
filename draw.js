class App extends React.Component {

    state = {
        data: [
            {content: "String"},
            {content: "Another string"},
            {content: "Third string"}
        ],
        active: null,
        newContent: "",
    }

    buttonHandler(option) {
        const { data, newContent } = this.state;

        if(option === "add") {
            if(newContent === "") {
                return console.log('Input cant be empty');
            } else {
                const newData = data;
                newData.push({content: newContent});
                this.setState({
                    data: newData,
                    newContent: ""
                });
            }

        } else if(option === "get") {
            const random = Math.floor(Math.random() * data.length);
            this.setState({
                active: data[random].content
            });
        } else {
            return null;
        }
    }

    handleValueChange(e) {
        const value = e.target.value;
        this.setState({
            newContent: value
        });
    }

    render() {
        const { active, newContent } = this.state;

        return (
            <div>
                <input type="text" value={newContent} onChange={this.handleValueChange.bind(this)}/>

                <button onClick={this.buttonHandler.bind(this, "add")}>Add</button>
                <button onClick={this.buttonHandler.bind(this, "get")}>Draw</button>

                {active ? <h2>{active}</h2> : null}
            </div>
        )
    }


}
ReactDOM.render(<App />, document.getElementById('root'));