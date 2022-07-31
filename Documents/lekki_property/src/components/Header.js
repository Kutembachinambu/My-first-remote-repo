import React from "react";

const Header = (props) => {
    return (
        <div>
            <nav>
            <ul>
                <a href="/"><span>{props.heading1}</span></a>
                    <li className="signup">{props.signUp}</li>
                    <li><a href="/">{props.linkElement1}</a></li>
                    <li><a href="/">{props.linkElement2}</a></li>

            </ul>

            </nav>
            <img className="property" src={props.image} alt="property"></img>

        </div>
    )
}
export default Header;