import React, { useState } from 'react';

import WithStateUI from './WithState.UI';

const WithState = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <WithStateUI
            isClicked={isClicked}
            setClicked={setClicked}
        />
        );
}

export default WithState;
