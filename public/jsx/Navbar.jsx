import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

class Navbar extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">React Contacts</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">


                    </div>
                </div>
                <App />
            </div>
        );
    }

}

ReactDOM.render(<Navbar />, document.getElementById('app'));

export default Navbar;
