import React from 'react';
export default class AddMovie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div className='Add-container'>
                
                <span>Add New Movie</span>
                <div>
                <span>Name</span>
                <input type='text'></input>
                </div>
                <div>
                <span>Genre</span>
                </div>
            </div>
            </>
        )
    }
}
