import React from 'react'
import './App.css';
import Img from 'react-image';
export class ItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          itemDetails: {}
        }
    }
    render(){
      let renderThis = (
        <div>
            <div className="small_img">  
            <Img src={this.state.itemDetails.Image}/>
            </div><br/>
            <h2>{this.state.itemDetails.Title}</h2><br/>
            {this.state.itemDetails.Price}
        </div>
        )
        return renderThis
    }
    componentDidMount(){
      fetch("https://localhost:44386/api/item/"+this.props.selectedItem)
          .then(res => res.json())
          .then((data) => {
            this.setState({
              itemDetails: data
            });
          })
    }
}