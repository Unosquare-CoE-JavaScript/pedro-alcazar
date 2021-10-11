
import { Component } from 'base-component';
import { Project } from '../models/project';
import { Draggable } from '../models/drag-drop';

export class ProjectItem extends Component <HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;
    constructor(hostId: string, project: Project){
        super('single-project', hostId, false, project.id);
        this.project= project
    }

    get persons(){
        if (this.project.people === '1'){
            return '1 person';
        }else{
            return `${this.project.people} persons`;
        }
    }

    dragEndHandler(){

    }
    dragStartHandler(){

    }
}