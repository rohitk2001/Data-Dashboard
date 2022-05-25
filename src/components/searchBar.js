import React from 'react';

class SearchBar extends React.Component{
    state = {term:'Enter Youtube Channel ID'};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render(){
        return (
            <div className="ui segment" style={{height:"130px"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input onClick={()=>{this.setState({term:""})}} style={{fontSize:"30px",margin:"auto",height:"100px"}} type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;