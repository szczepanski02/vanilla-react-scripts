
const Person = (props) => {

    return (
        <div>
            <p>{props.name} <button onClick={props.delete}>remove</button></p>
        </div>
    )
}

class App extends React.Component {
    state = {
        users: [
            {id: 1, name: "Janek", active: true},
            {id: 2, name: "Karol", active: true},
            {id: 3, name: "Zbyszek", active: true},
            {id: 4, name: "Kamil", active: true},
        ]
    }

    handleDelete(id) {
        const newUsers = this.state.users;
        const pos = newUsers.findIndex(i => i.id === id);
        newUsers.splice(pos, 1);
        this.setState({
            users: newUsers
        });
    }

    render(){
        const { users } = this.state;
        const usersList = users.map(user => (
            <Person key={user.id} name={user.name} delete={this.handleDelete.bind(this, user.id)} />
        ));

        return(
            <div>
                {usersList}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));