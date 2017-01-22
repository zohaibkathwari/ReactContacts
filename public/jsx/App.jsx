import React from 'react';

class App extends React.Component {

    clickMe() {
        alert();
    }

    render() {
        let appName = 'Click Me';
        return (
            <div>
                <h1></h1>
                <div className="jumbotron">
                    <h3 onClick={this.clickMe}>{appName}</h3>
                </div>
            </div>
        );
    }
}

export default App;