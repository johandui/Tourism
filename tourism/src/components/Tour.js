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
<<<<<<< HEAD

=======
    simulateClick(e) {
        e.click()
    }
>>>>>>> master
	render(){
        var load =  (typeof this.props.tour.tour) === 'undefined' ? "" :
                Object.keys(this.props.tour.tour).map((item) => ( 
                  <div class="single-tour-plan">
                    <div class="price_wrapper">
                    <span class="tour-plan-price">25$</span>
                </div>
                <div class="name_wrapper">
                    <span class="tour-plan-name">{this.props.tour.tour[item].att_name}</span>
                </div>
                <div class="img_wrapper">
                    <img class="tour-plan-img" src={this.props.tour.tour[item].url}/>
                </div>
                </div>
                ))
		return (
        <div>
				<div class="single-tour-plan" onClick={this.toggle.bind(this)} ref={this.props.count == 0 ? this.simulateClick:""}
                        data-id={this.props.tour.name} data-odd-checker={this.props.count%2}>
                <div class="price_wrapper">
                    <span class="tour-plan-price">100$</span>
                </div>
                <div class="name_wrapper">
                    <span class="tour-plan-name">{this.props.tour.name}</span>
                </div>
                <div class="img_wrapper">
                    <img class="tour-plan-img" src="https://www.pandotrip.com/wp-content/uploads/2017/02/The-worlds-largest-statue-of-Genghis-Khan-Mongolia-%C2%A9-Mark-Agnor-Shutterstock-Inc.-740x494.jpg"/>
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