import {Component} from '@angular/core';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {SubComponent} from './puzzle/sub.component'; 
@Component({
    selector: 'my-app',
    template: `
        <my-puzzle>
        </my-puzzle>

        <section class="parent"> 
            <h2>Welcome to parent Component</h2> 
           	<p>Please enter your name: </p>
            <input type="text" [(ngModel)]="ParentName"/>
            <br>
            {{ParentName}}
            <section class="child"> 
                <my-sub [SubName] = "ParentName"></my-sub>
            </section>  
        </section>
    `,
    directives: [PuzzleComponent, SubComponent]
})
export class AppComponent {
    ParentName: string = 'SomeData'
}