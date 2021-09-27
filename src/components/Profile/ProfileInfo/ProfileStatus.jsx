import React from "react";

class ProfileStatus extends React.Component {
    state ={
        editMode: false
    } //Локальный state

    activateEditMode () {           //this передается, чтобы не потерять конекст
        
        this.setState({editMode:true})      //Вызвается не сразу, асинхронный метод
        //Не рекомендуется использовать, но при необходимости можно принудительно обновить state
        //this.state.editMode=true;
        //this.forceUpdate();
    }

    deactivateEditMode()
    {
        this.setState({editMode:false}) 
    }

    render(){
        return(
            
            <div>
                {this.state.editMode?
                    <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div> 
                }           
            </div>
            
        );
    }
}


export default ProfileStatus;