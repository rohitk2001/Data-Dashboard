//CSS stylesheets
import './styles.css';
//To display channel data using Semantic UI Grid
const Route = ({path,children})=>{
    return window.location.pathname === path
        ? children
        : null;
}

export default Route;