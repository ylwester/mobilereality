import {FC} from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
    displayText: string;
    redirect: string;
    classname?: string;
}

const Button: FC<ButtonProps> = ({displayText, redirect, classname}) => {
    return (
        <Link to={redirect}>
            <button className={classname}>
                {displayText}
            </button>
        </Link>
    )
}

export default Button;