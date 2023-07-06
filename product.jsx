import React, { Component } from 'react';

class Product extends React.Component{
    //state = { }
    count = 5;
    render() {
        const count = 000;0
        return(
        <>
            {
                this.count !== 0 ? (
                    <>
                    <span className='m-2 text-info'>product name</span>
                    <span className='m-2 text-info'>{this.count === 0 ? 'zero' : this.count}</span>
                    <button className='m-2 btn btn-sm btn-success'>+</button>
                    <button className='m-2 btn btn-sm btn-success'>+</button>
                    <button>delete</button>
                    </>
                ): (
                    <h1>there is no product</h1>
                )
            }
        </>
        )
    }
}

Format()
    if(this.Componentcount == 0){
        return 'zero'
    }
    else{
        return count;
    }

export default Product;