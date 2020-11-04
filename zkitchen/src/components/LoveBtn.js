import React from 'react';

const useState = React.useState; 

const LoveBtn = ({recipe}) => {

 const [count, setCount] = useState(0)
  
const onButtonClick = () =>{
    setCount(count + 1);
};
    return(
        <div className="right floated content" >
    <div onClick={onButtonClick} className="ui red button">
        
    <i className="heart icon"> </i> {recipe + count} Yumms
    
    </div>
    </div>
    )
        
}

  
export default LoveBtn