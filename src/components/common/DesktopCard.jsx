import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-tailwind/react";

function BaseDesktopCard({ children, className }){
    return <Card className={`h-100 ${className}`}>{children}</Card>;
}

function DesktopCard({ children, className }){
    return(
        <BaseDesktopCard className={`p-1 ${className}`}>
            {children}
        </BaseDesktopCard>
    )
}

export default DesktopCard;

DesktopCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};