import React from 'react'
import {LeftNav} from './leftnav'
import {Body} from './body'
export class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedCat: 0,
            selectedItem: 0
        }
        this.handleSelectedCat = this.handleSelectedCat.bind(this)
        this.handleSelectedItem = this.handleSelectedItem.bind(this)
    }
    handleSelectedCat(catId){
        this.setState({
            selectedCat: catId,
            selectedItem: 0
        })
    }
    handleSelectedItem(itemId){
        this.setState({
            selectedItem: itemId
        })
    }
    render(){
        let view = (
                        <div>
                            <div>
                                <LeftNav handleClick={this.handleSelectedCat}/>         
                            </div>
                            <div>
                                <Body selectedCat={this.state.selectedCat} selectedItem={this.state.selectedItem}
                                handleClick={this.handleSelectedItem}/>         
                            </div>
                        </div>
                    )
        return view
    }
}