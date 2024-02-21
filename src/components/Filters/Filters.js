import './Filters.css';
import Filter from './Filter/Filter';
import { techFilters, frontFilters, backFilters } from '../../utils/constants';

export const Filters = ({ onClickFilter, filters }) => {

    return (
        <section className='filters__section' >
            <div className='filters'>
                <p className='filters__text'>I'm looking for: </p>
                <div className='filters__container'>
                    <div className='filters__block' >
                        <p className='filters__block-name'>frontend</p>
                        {
                            frontFilters.map((filterName, index) => {
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
                    <div className='filters__block' >
                        <p className='filters__block-name'>backend</p>
                        {
                            backFilters.map((filterName, index) => {
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
                </div>
            </div>
        </section>
    );
};