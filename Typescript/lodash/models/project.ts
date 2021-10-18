/*  
 * Enum status of projects
 */
export enum ProjectStatus{
    Active,
    Finished
}

/* 
 * Main Class, 
 */
export class Project{
    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public people: string, 
        public status: ProjectStatus
    ){}
}
