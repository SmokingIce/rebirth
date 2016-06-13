import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Dropdown} from '../dropdown';
import { RouterActive} from '../router-active';

@Component({
    selector: 'blog-navbar',
    providers: [],
    directives: [Dropdown, RouterActive],
    pipes: [],
    styles: [require('./blog-navbar.scss')],
    template: require('./blog-navbar.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogNavbar {
    constructor() {

    }
}