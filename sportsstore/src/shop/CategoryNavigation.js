import React, { Component, Fragment} from 'react';
//import { Link } from 'react-router-dom';
import { ToggleLink } from '../ToggleLink';
export class CategoryNavigation extends Component {
    render(){
        return <Fragment>
            <ToggleLink to={ `${this.props.baseUrl}/all` } exact={ false }>All</ToggleLink>
            { this.props.categories && this.props.categories.map(cat =>
                <ToggleLink key={ cat } 
                    to ={ `${this.props.baseUrl}/${cat.toLowerCase()}`}>
                    { cat }
                </ToggleLink>
                )}
        </Fragment>
    }
}