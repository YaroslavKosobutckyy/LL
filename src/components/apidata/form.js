import React from 'react';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { DataIPStyle } from './style';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
  <DataIPStyle>
      <div>
         
         <Element className="element" id="scroll-container" style={{
           position: 'relative',
           height: '550px',
           overflow: 'scroll',
           marginBottom: '10px'
         }}>

           <Element name="scroll-container-first-element" style={{
             marginBottom: '10px'
           }}>
              <p>ip={this.props.items.ip}</p>
         </Element>

           <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>version={this.props.items.version}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>city={this.props.items.city}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>region={this.props.items.region}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
              <p>region_code={this.props.items.region_code}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>country_code_iso3={this.props.items.country_code_iso3}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
              <p>country_name={this.props.items.country_name}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>country_capital={this.props.items.country_capital}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
            <p>country_tld={this.props.items.country_tld}</p> 
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>continent_code={this.props.items.continent_code}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>in_eu={this.props.items.in_eu}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>postal={this.props.items.postal}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>latitude={this.props.items.latitude}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>longitude={this.props.items.longitude}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
              <p>timezone={this.props.items.timezone}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>utc_offset={this.props.items.utc_offset}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>country_calling_code={this.props.items.country_calling_code}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>currency={this.props.items.currency}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
              <p>currency_name={this.props.items.currency_name}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>languages={this.props.items.languages}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>country_area={this.props.items.country_area}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>country_population={this.props.items.country_population}</p> 
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>asn={this.props.items.asn}</p>
         </Element>
         <Element name="scroll-container-second-element" style={{
             marginBottom: '10px'
           }}>
             <p>org={this.props.items.org}</p>
         </Element>
    
         </Element>
     </div>
  </DataIPStyle>
      
    );
  }
};

export default Form;