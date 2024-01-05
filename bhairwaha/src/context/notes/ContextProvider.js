import React, { useState } from 'react';
import NoteContext from './NoteContext';

const ContextProvider = ({ children }) => {
    const [value, setValue] = useState('Default value');

    return (
        <NoteContext.Provider value={{ value, setValue }}>
            {children}
        </NoteContext.Provider>
    );
};

export default ContextProvider;