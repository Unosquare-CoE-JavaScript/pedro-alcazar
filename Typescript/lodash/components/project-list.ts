import { Project } from "../models/project";
import { DragTarget } from "../models/drag-drop";
import { Component } from "base-component";
import { autobind as Autobind} from "../decorators/autobind";

export class ProjectList extends Component <HTMLDivElement, HTMLElement> implements DragTarget{
    assignedProject: Project[] = [];

    constructor( private type: 'active' | 'finished' ){
        super('project-list','app',false, `${type}-projects`);
    }

    @Autobind
    dragLeaveHandler(){

    }

    dropHandler(){

    }
    dragOverHandler(){

    }
}
