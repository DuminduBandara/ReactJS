const Check = (props) => {
  let checkIco = props.isChecked ? "Checked!" : "Unchecked!";

    return(

        <h2 onClick={props.handleClick}>{checkIco}</h2>

    );
}


export default Check;