import React from 'react';
import Form  from './form';
import InfoMasage from '../infomassage';
import { FormStyle } from './style';
import store from "../redux/store";
import { getDataSuccess, getDataStart, getDataError } from "../redux/actions/dataActions";


let massageInfo = 1;
// let items={};

class ApiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {},
      dataValue: ' '
    }; 

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeData = this.onChangeData.bind(this); 

  }
  

  
  onChangeData(event){
    this.setState( {value: event.target.value
  })
}
  onSubmit = async(event) =>{  
  event.preventDefault();
  console.log('helo=='+ this.state.value);

   let dataValue= this.state.value[0]+'.'+this.state.value[1]+'.'+this.state.value[2]+'.'+this.state.value[3];
      store.dispatch(getDataStart());
      fetch(`https://ipapi.co/${dataValue}/json/`)
    .then(res => res.json())
     .then(
      (result) => {
         this.setState({
          isLoaded: true,
           items: result
        });
       },
     
       (error) => {
         this.setState({
           isLoaded: true,
          error
       });
      }
    )

}
  
componentDidMount() {
       fetch(`https://ipapi.co/1.1.1.1/json/`) 
    .then(res => res.json())
     .then(
      (result) => {
         this.setState({
          isLoaded: true,
           items: result
        });
        store.dispatch(getDataSuccess({data: result}));
       },
     
       (error) => {
         this.setState({
           isLoaded: true,
          error
       });
       store.dispatch(getDataError(error.message));
      }
    )
     }

render() {

          const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>
             <InfoMasage  massageInfo={massageInfo=3} />
             {error.message}
                  </div>;
        } else if (!isLoaded) {
          return <div>
           <InfoMasage  massageInfo={massageInfo=1} />
                 </div>;
        } else {
return (

<>
        <FormStyle>
           <div>
              <form onSubmit={this.onSubmit}>
                  <label>
                      <input
                          type="text"
                          value={this.state.value}
                          onChange={this.onChangeData}
                      />
                  </label>
                  
                  <label>
                      <button>Search</button>
                  </label>
                 
              </form>
           </div> 
        </FormStyle>
         
        <div>
       <InfoMasage massageInfo={massageInfo}/>
        </div> 

      
       {this.state.value &&  
        <div>
          <dataIconStyle>
          <ul>
             <Form items={items}/>
          </ul>
        </dataIconStyle>
        </div>
       } 
</>
    );
  }
  }
}
export default ApiData;
