import './Filter.css'

const Filter = ({ title, filters, onClickFilter }) => {

    return (
        <div 
        onClick={() => onClickFilter(title)} 
        className={`filter ${filters.includes(title) ? 'filter_selected' : ''}`}>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Filter;