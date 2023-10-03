import { Component } from "react";
import css from "./Filter.module.css"

class Filter extends Component {

    render(){
        return (
            <div className={css.filterContainer}>
                <label> 
                Find contact by name
                <input type="text" />
                </label>
            </div>
        )
    }
};

export default Filter;