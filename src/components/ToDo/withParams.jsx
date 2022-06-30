import { useParams } from "react-router-dom";

function withParams(Component){
    return props => <Component {...props} params={useParams()}></Component>
}

export default withParams;