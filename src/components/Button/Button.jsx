import "./Button.css"

const Button = (props) => { 
    return(
        <div className="Button-Container">
            <h1 className="Button-Text">{props.text}</h1>
        </div>
    );
}

export default Button;