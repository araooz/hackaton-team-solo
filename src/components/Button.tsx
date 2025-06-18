import { useNavigate, useLocation } from "react-router-dom";

type ButtonProps = {
    text: string;
    to: string;
    className?: string;
}

export default function Button(props: ButtonProps){
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = location.pathname == props.to;

    const buttonStyle = `px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-300 ${
        isActive
            ? "bg-gray-800 hover:bg-gray-900 cursor-not-allowed"
            : "bg-gray-700 hover:bg-gray-800 cursor-pointer"
    } shadow-md border border-gray-600`

    function handleClick(){
        if(!isActive){
            navigate(props.to);
        }
    }

	return (
        <button className={buttonStyle} onClick={handleClick}>
            {props.text}
        </button>
	);
}