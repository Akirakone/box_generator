import React, { useState } from "react";


const Boxs= (props) => {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState('');


    const colorHandler = event => {
        setColor(event.target.value);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        const newColor = {
            color: color,
        };

        setBoxes([...boxes, newColor]);
        setColor('');
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="color"> Color: </label>
                    <input type="text" name="color" onChange={colorHandler} />
                    <input type="submit" value="Add" ></input>
                </div>
            </form>
            <div style={{display: "flex"}}>
                {
                    boxes.map(( colors, i) => {
                        return (
                            <div key={i} style={{backgroundColor: colors.color, height: 70, width:80, border: " 1px solid black", margin: "5px"}} />
                        )
                    })
                }
            </div>
        </div>
    )
}





export default Boxs;