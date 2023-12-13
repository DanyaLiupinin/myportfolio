import './Filter.css'
import { useState } from 'react';

const Filter = ({ title, filters, onClickFilter }) => {

    const [isSelected, setSelected] = useState(() => {
        return filters.includes(title);
    })

    const clickFilterHandler = () => {
        setSelected(!isSelected)
        onClickFilter(title)
    }

    return (
        <div 
        onClick={clickFilterHandler} 
        className={`filter ${isSelected ? 'filter_selected' : ''}`}>
            <p>{title}</p>
        </div>
    )
}

export default Filter;