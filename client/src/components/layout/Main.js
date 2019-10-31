import React from 'react';

const Main = props => (
    <main className="py-5">
        <div className="container">
            { props.children }
        </div>
    </main>
);

export default Main;