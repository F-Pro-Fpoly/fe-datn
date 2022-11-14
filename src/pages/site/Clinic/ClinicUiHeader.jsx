import { useState } from "react";

function ClinicUiHeader({specialist = {}}) {
    const [showAll, setShowAll] = useState(false);

    const handleOnClick = () => {
        if(showAll){
            setShowAll(false)
            return
        }
        setShowAll(true)
        return
    }

    return ( 
        <div className="infoClinic">
            <div className="text">
                <div className="container">
                    <h3>{specialist.name}</h3>
                    <div className={`infoClinic-content ${showAll ? 'active':''}`} onClick={handleOnClick} dangerouslySetInnerHTML={{__html: specialist.description}}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicUiHeader;