import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [isError, setIsError] = useState(false);
    const throwErrorHandler = () => setIsError(true);

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        <Button onClick={throwErrorHandler}>
            throw error
        </Button>
    );
};
