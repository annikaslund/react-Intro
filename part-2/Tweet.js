class Tweet extends React.Component {
    render(){
        const { username, name, date, message } = this.props;
        return (
            <div>
                <p>username: { username }</p>
                <p>name: { name }</p>
                <p>date: { date }</p>
                <p>message: { message }</p>
            </div>
        );
    }
}