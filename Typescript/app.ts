
import { Project } from "./models/project"
 

namespace App {
    type Listener <T> = (items: T[]) => void;

    class State<T> {
        protected listeners: Listener<T>[] = [];

        addListener(listenerFn: Listener <T>){
            this.listeners.push(listenerFn)
        }
    }

    class ProjectState extends State<Project>{
        private projects: Project[] = [];
        private static instance: ProjectState
        private constructor(){
            super();
        }
    }
}