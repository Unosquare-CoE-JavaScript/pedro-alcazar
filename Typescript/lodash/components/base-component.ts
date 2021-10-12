
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostelement : T;
    element: U;
    constructor(
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean,
        newElementId: string
    ) {
        this.templateElement =  document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostelement = document.getElementById(hostElementId)! as T;
        this.element = document.getElementById(newElementId)! as U;
    }
}