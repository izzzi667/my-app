import React from "react";

class ProfileStatus extends React.Component {
    
    state ={
        editMode: false,
        status: this.props.status
    } //Локальный state

    activateEditMode () {           //this передается, чтобы не потерять конекст
        this.setState({editMode:true})      //Вызвается не сразу, асинхронный метод
        //Не рекомендуется использовать, но при необходимости можно принудительно обновить state
        //this.state.editMode=true;
        //this.forceUpdate();
    }



    deactivateEditMode()
    {
        this.setState({editMode:false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>          //Стрелочная функция, поэтому можно без bind
    {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState)        //Вызваетеся при любом изменении state и props
    {
        if(prevProps.status !== this.props.status)
        {
            this.setState({status: this.props.status});         //Если поменялся внешний статус, то поменяем и внутренний
        }
    }

    render(){
        
        return(
            
            <div>
                {this.state.editMode?
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{!this.props.status ? '----': this.props.status}</span>
                    </div> 
                }           
            </div>
            
        );
    }
}


export default ProfileStatus;