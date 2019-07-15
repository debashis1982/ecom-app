import React from 'react'
import './App.css';
export class LeftNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedCategory: 0,
            categories: []
        }
    }
    
    render(){
        return(
            <div className="leftNav">
                {
                    this.state.categories.map((category) =>(
                        <div>
                          <button onClick={() => {this.props.handleClick(category.Id)}}>{category.Name}</button><br/>
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        fetch("https://localhost:44386/api/category")
                    .then(res => res.json())
                    .then((data) => {
                        data.map((category)=>(
                            this.setState({
                                categories: data
                            })
                        ))
                    })
    }   
}

//categories.then(function(test){test.map(function(x){console.log(x.Name)})})

