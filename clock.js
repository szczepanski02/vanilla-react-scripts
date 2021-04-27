class App extends React.Component {
    
    state = {
        active: true
    }

    handleClick() {
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render() {
        return (
            <div>
                <SwitchButton active={this.state.active} click={this.handleClick.bind(this)}/>
                {this.state.active && <Clock />}
            </div>
        )
    }
}

const SwitchButton = (props) => {
    const { active, click } = props;

    return (
        <button onClick={click}>{active ? "Off" : "On"}</button>
    )
}

class Clock extends React.Component {

    state = {
        time: this.getTime()
    }

    interval = "";

    getTime() {
        const currentTime = new Date();
        return ({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        });
    }

    setTime() {
        const time = this.getTime();
        this.setState({
            time
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { hours, minutes, seconds } = this.state.time;
        return (
            <div>
                {hours > 9 ? hours : `0${hours}`} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));