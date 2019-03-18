class Tweet extends React.Component {
    render(){
        const { username, name, date, message } = this.props;
        const colors = {
            color: "green",
            backgroundColor: "pink"
        }
        return (
            <div style = {colors}>
                <p>username: { username }</p>
                <p>name: { name }</p>
                <p>date: { date }</p>
                <p>message: { message }</p>
            </div>
        );
    }
}