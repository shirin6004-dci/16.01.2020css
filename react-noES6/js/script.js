class MyDiv extends React.Component {
    render() {
        return (
            <div>
                <MySpan />
                <span>Hallo world</span>
            </div>


        )
    }
}

class MySpan extends React.Component {
    render() {
        return <span>i am new span </span>
    }

}


ReactDOM.render(<MyDiv />, document.getElementById('container'))





//create-react-app