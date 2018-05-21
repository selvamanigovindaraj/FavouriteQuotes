export class Settingservice{
    toggleState:boolean=false;
    settoggleState(state:boolean){
        this.toggleState=state
    }
    getToggleState(){
        return this.toggleState
    }
}