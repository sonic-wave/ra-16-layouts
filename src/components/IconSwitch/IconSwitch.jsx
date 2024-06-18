// @import url('https://fonts.googleapis.com/icon?family=Material+Icons')
import './IconSwitch.css'

export const IconSwitch = ({ icon, onSwitch }) => {
    return(
        <>
            <button className="material-icons" onClick={onSwitch}>
                { icon } 
            </button>
        </>
    )
}

