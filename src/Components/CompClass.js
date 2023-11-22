import React, { Component } from 'react';
class CompClass extends Component {
    state ={
        count:100,
        tags:["tag1","tag2","tag3"]
    }
    render() { 
        return (<div>
            <h1>Welcome to First Component</h1>
            {this.state.count}
            <ul>
                <li>{this.state.tags[0]}</li>
                <li>{this.state.tags[1]}</li>
                <li>{this.state.tags[2]}</li>
            </ul>
            <button>Cilck ME</button>
        </div>);
    }
}
 
export default CompClass;