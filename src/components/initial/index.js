import React from 'react';
import REACT from 'react';
import image1 from '../files/image1.png';
import { FindIcon, FindMyIpIcon, FormIcon, TextIcon, FlexFindIcon, FormButton} from './style';
import ApiIP from '../apidata/apidata';
import InfoMasage from './../infomassage';
import { getDataError } from '../redux/actions/dataActions';
import { Form, Button } from 'react-bootstrap';

let massageInfo = 1;
let dataInput = '';
class InitialComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {value: ''};
    }


render(){
return (
<>
<div className='main'>
      <FlexFindIcon>\
        <FindIcon>
          <div>
            <  img src={image1}/> 
          </div> 
        </FindIcon> 
        <FindMyIpIcon>  
          <div>
            <p>Find My IP</p>
          </div> 
        </FindMyIpIcon>
      </FlexFindIcon>    
         <div>
            <ApiIP 
             dataInput={this.state.value}
            />
        </div>  
        {/* <div>
       <InfoMasage massageInfo={massageInfo}/>
        </div>  */}
</div>    
</>
)
}
}

export default InitialComponent;



{/* <div>  Все ламає+скроллл
  <FormIcon>
  <Form>
  <Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="0.0.0.0" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Search
  </Button>
 </Form>
</FormIcon>
</div>

   */}
