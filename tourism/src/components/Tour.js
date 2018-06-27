import React from 'react';
export default class Tour extends React.Component{
     constructor() {
        super();
        this.state = { open: false, loaded: false};
     }
    toggle(e) {
        this.setState({
          open: !this.state.open
        });
        this.props.onClick(e);
      }
    simulateClick(e) {
        e.click()
    }
	render(){
        var load =  (typeof this.props.tour.tour) === 'undefined' ? "" :
                Object.keys(this.props.tour.tour).map((item, i) => ( 
                  <div className="single-tour-plan" key={i}>
                    <div className="price_wrapper">
                    <span className="tour-plan-price">25$</span>
                </div>
                <div className="name_wrapper">
                    <span className="tour-plan-name">{this.props.tour.tour[item].att_name}</span>
                </div>
                <div className="img_wrapper">
                    <img className="tour-plan-img" src={this.props.tour.tour[item].url}/>
                </div>
                </div>
                ))
		return (
        <div>
				<div className="single-tour-plan" onClick={this.toggle.bind(this)} ref={this.props.count == 0 ? this.simulateClick:""}
                        data-id={this.props.tour.name} data-odd-checker={this.props.count%2}>
                <div className="price_wrapper">
                    <span className="tour-plan-price">100$</span>
                </div>
                <div className="name_wrapper">
                    <span className="tour-plan-name">{this.props.tour.name}</span>
                </div>
                <div className="img_wrapper">
                    <img className="tour-plan-img" src="https://www.pandotrip.com/wp-content/uploads/2017/02/The-worlds-largest-statue-of-Genghis-Khan-Mongolia-%C2%A9-Mark-Agnor-Shutterstock-Inc.-740x494.jpg"/>
                </div>
             
            	</div>
                     <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
                   {
                    load
                  }
        </div>
        </div>
			);
	}
}