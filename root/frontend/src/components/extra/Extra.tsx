import * as React from 'react';

import styled from "styled-components";
import './styles.scss';

export interface ExtraProps {

}

export interface ExtraState {

}


const Items = styled("div")`
    background: brown;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

`;
class Extra extends React.Component<ExtraProps, ExtraState>{
    handlePrev=()=>{
        alert('its ok');
    }
    handleNext=()=>{
        alert('its next');
    }
    render() {
        let boxClassName="box-action";
        return ( 

            <div className="box-wrapper">
            <div className="box">

                <div className={boxClassName}>
                    <div className="content-box">  
                            <img src="https://images.unsplash.com/photo-1571980693270-4661b7794641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/> 
                            <img src="https://images.unsplash.com/photo-1571335909084-b90ef2c4aa62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> 

                     </div>
                        <div className="content-box"> 
                            <img src="https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                            <img src="https://images.unsplash.com/photo-1568527701620-6ea4ba2e2880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" /> 

                        </div>
                        <div className="content-box">  
                            <img src="https://images.unsplash.com/photo-1544562380-d14b6e6188f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                            <img src="https://images.unsplash.com/photo-1564478050754-0747ca006ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="" /> 

                        </div>
                        <div className="content-box"> 
                            <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                            <img src="https://images.unsplash.com/photo-1528696912480-38bd1a5f99f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> 
                        
                        </div>

                </div>


                </div>

            <div className="button-container">
            <button onClick={this.handlePrev}>Prev</button>
            <button onClick={this.handleNext}>Next</button>
                </div>
            </div>



      );
    }
}

export default Extra;

