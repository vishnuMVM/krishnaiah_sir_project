import React from "react";

const LanguageContext=React.createContext({
activelanguage:"English",
changelanguage:()=>{}
});

export default LanguageContext;