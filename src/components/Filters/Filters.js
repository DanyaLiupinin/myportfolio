import './Filters.css';
import Filter from './Filter/Filter';

export const Filters = ({onClickFilter, filters}) => {

const filtersName = [
    'react',
    'redux toolkit',
    'typescript',
    'html',
    'css',
    '123',
    '234',
    '345',
    '456',
    '45',
    '66',
    '678'
]

return (
    <section className='filters__section' >
        <p className='filters__text'>Filter by</p>
        <div className='filters'>

        {
            filtersName.map((filterName, index) => {
                return (
                    <Filter 
                        title={filterName}
                        onClickFilter={onClickFilter}
                        filters={filters}
                        key={index}
                    />
                )
            })
        }

        </div>
    </section>
);
};