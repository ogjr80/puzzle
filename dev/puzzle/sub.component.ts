import {Component} from '@angular/core'; 
@Component({
    selector: 'my-sub',
    template: `
        <h2>Welcome to my Child Component</h2> 
        <p>Hey! {{SubName}}</p>
    `, 
    inputs: ['SubName']
})
export class SubComponent{
    SubName: string = 'ChildComponentValue'; 
}