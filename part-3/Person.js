class Person extends React.Component {
    render () {
        const { name, age } = this.props;
        let newName = (name.length > 8) ? name.slice(0, 8) : name;

        return (
            <div>
                <p>Learn some information about this person</p>
                <h3>{ age > 18 ? `please go vote ${ newName }!`: `you must be 18 ${ newName }` }</h3>
            </div>
        )
    }
}