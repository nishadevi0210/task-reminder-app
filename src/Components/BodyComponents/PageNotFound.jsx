import React from "react";
import {useLocation} from "react-router-dom";

const PageNotFound = () => {

    let myLocation = useLocation();

    return (
        <div>
            {myLocation.pathname}
            <p>is not a page</p>
        </div>
    )
}

export default PageNotFound
