import React from 'react';


export default function Error() {
    return (
        <>
            <NotFoundPage />
        </>
    );
}



const NotFoundPage = () => {
    return <h1>404 Page NotFound</h1>;
}
