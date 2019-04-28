import React from 'react';
import { FirstComponent } from './first.component';

export class SecondComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    This is the second component!!!!
                    <FirstComponent/>
                    
                </h2>
            </div>
        )
    }
}