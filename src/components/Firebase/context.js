import React from "react";

const FirebaseContext = React.createContext(null);

//The createContext() function essentrially creates 2 components. The FirebaseContext.Provider component is used to provide a Firebase instance
// once at thr top-level of the React component tree. The FirebaseContext.Consumer component is used to retrieve the Firebase instance if it
//is needed in the React component.

export default FirebaseContext;
