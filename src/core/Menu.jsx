import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };
    }
};
const Menu = ({ history }) => (
    <div style={{ backgroundColor: "#12558A" }}>
        <ul className="nav nav-tabs" >
            <li className="nav-item">
                <Link
                    style={currentTab(history, "/chats")} className="nav-link"
                    to="/chats"
                >
                    Chats
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    style={currentTab(history, "/groups")} className="nav-link"
                    to="/groups"
                >
                    Groups
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/search")} className="nav-link" to="/search">
                    Search
                </Link>
            </li>
        </ul>
    </div>
)
export default withRouter(Menu);
