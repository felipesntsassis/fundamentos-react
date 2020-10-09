import React, { cloneElement } from 'react';

export default props => {
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i });
                })
                // Outra forma:
                // React.Children.map(props.children, child => {
                //     return cloneElement(child, props);
                // })
            }
        </div>
    );    
}