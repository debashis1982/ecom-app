import React from 'react'
import './App.css';
import { SearchResults } from './searchResults';
import { DealsOfTheDay } from './dealsoftheday';
import { ItemDetails } from './itemDetails';
export class Body extends React.Component{
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
        let returnThis = <DealsOfTheDay/>
        console.log('selected cat is '+this.props.selectedCat)
        console.log('selected item is '+this.props.selectedItem)
        if(this.props.selectedItem!==0){
            returnThis = <ItemDetails selectedItem={this.props.selectedCat}/>
        }
        else if(this.props.selectedCat!==0){
            returnThis = <SearchResults selectedCat={this.props.selectedCat}  handleClick={this.props.handleClick} />
        }
        return <div className="body">{returnThis}</div>
    }
}