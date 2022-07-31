import React from "react";
import {Link} from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div>
            <section className="navigation">
                <Link to='/' id="button" >{props.AddProperty}</Link>
            
            </section>

        </div>
    )
}
export default Navigation;
