import './Filters.css';
import Filter from './Filter/Filter';
import { techFilters } from '../../utils/constants';

export const Filters = ({onClickFilter, filters}) => {

return (
    <section className='filters__section' >
        <div className='filters'>
        <p className='filters__text'>I'm looking for: </p>
        {
            techFilters.map((filterName, index) => {
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