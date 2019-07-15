import React from 'react'
import './App.css';
import Img from 'react-image';
export class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          items: [],
          showItemDetails: false,
          itemId: 0,
          itemDetails: {}
        }
      }
    render(){
        fetch("https://localhost:44386/api/category/"+this.props.selectedCat)
          .then(res => res.json())
          .then((data) => {
            this.setState({
              items: data
            });
          })
          // onClick={this.itemselected(item.ItemId)}
          //<button onClick={() => {this.handleCategoryClick(category.Id)}}>{category.Name}</button><br/>
        let renderThis = this.state.items.map((item)=>(
                            <a href="#" onClick={() => {this.props.handleClick(item.ItemId)}} >
                                <div className="small_img">  
                                    <Img src={item.image}/>
                                </div><br/>
                                <h2>{item.Title}</h2>
                                {item.Description}<br/>
                                {item.Price}
                            </a>
                        ))
        return renderThis
    }
}