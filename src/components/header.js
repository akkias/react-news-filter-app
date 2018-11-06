import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        //To access the default props from React.Component
        super(props);
        //To define state
        //Whenever the state of the component changes it re-renders
        this.state = {
            title: 'The keywords are',
            keywords: ''
        }
    }
    //inputChange() = this.inputChange.bind(this);

    inputChange(e){
        this.setState ({
            keywords: e.target.value
        })
        this.props.newsSearch(this.state.keywords);
    }

    
    render() {
        return(
            <header>
                <div className="logo">Logo</div>
                <input onChange={this.inputChange.bind(this)} />
                <p>{this.state.title}</p>
                <p>{this.state.keywords}</p>
            </header>
        ) 
    }
}

export default Header;