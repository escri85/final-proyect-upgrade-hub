import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToApi } from '../../redux/actions/apiActions';

const Gallery = (props) => {

    useEffect(() => {
        props.dispatch(getToApi())
        console.log(props.data);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (<div>

        

    </div>)

}

const mapStateToProps = (state) => ({

    data: state.api.products,

})

export default connect(mapStateToProps)(Gallery);


