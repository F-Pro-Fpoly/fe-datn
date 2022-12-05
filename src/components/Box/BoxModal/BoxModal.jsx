import { Box } from "@mui/material";
import "./BoxModal.scss"

function BoxModal({children, style = {}}) {
    return ( 
        <Box
            className="boxModal"
            style={style}
        >
            {children}
        </Box>
     );
}

export default BoxModal;