import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Extra from './components/extra/Extra';

 
import './styles.scss';

export interface MasterProps {

}

export interface MasterState {
    name: string;
}

class Master extends React.Component<MasterProps, MasterState> {


    render() {
        return (
           <div className="main-container">
                <div className="header"><h1>Hello on my page ;)</h1></div>
             <div className="content">
                 <div className="content-inner">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ex recusandae quisquam alias esse et itaque cupiditate natus molestiae, temporibus nam consequatur? Quam assumenda nam sint eligendi aspernatur officia, autem pariatur voluptas, hic molestiae voluptatum dolorum eos laboriosam obcaecati voluptatibus iure est? Ullam reprehenderit praesentium nobis sunt ex consequuntur nostrum?</p>
                 </div>
             </div>
            <Extra/>
            </div>
        );
    }
}

export default Master;




 
 