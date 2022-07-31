import React from "react";
import Header from "./Header";
import image from "../Images/property.jpeg";
import Navigation from "./Navigation";

class Home extends React.Component {
    render() {
    return (
        <div>
            <Header 
                heading1 = "LekkiProperty" 
                signUp= "SignUp"  
                linkElement1 = "Login" 
                linkElement2="Property"
                image={image}  />

          <Navigation
                AddProperty = "LIST PROPERTY"
                />
            
        </div>

    )
    }
}
export default Home;
