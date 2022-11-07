function ClinicUiHeader({specialist = {}}) {
    return ( 
        <div className="infoClinic">
            <div className="text">
                <div className="container">
                    <h3>{specialist.name}</h3>
                    <div className="">
                        {specialist.description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicUiHeader;