
function Hero(props){
 
 
    return(
         <div >
            <img src={props.imgsrc} />
            <div >
            <h3 >{props.desc}</h3>
            <p >{props.div}</p>
            <p >{props.para}</p>
            <p>Director: {props.Director}</p>

            </div>
         </div>
    );
}

export default Hero