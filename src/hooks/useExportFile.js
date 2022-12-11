import { useEffect, useState } from "react";

function ExportFile(data, fileName) {
    const href = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', fileName)
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    return null;
}

export default ExportFile;