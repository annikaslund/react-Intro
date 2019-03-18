class Person extends React.Component {
    render () {
        const { name, age } = this.props;
        return (
            <div>
                <p>Learn some information about this person</p>
                <h3>{ age > 18 ? "please go vote!": "you must be 18" }</h3>
            </div>
        )
    }
}