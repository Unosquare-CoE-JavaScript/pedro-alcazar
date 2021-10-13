
import { Project } from "./models/project"
/* 
 * Using Namespace for struct files
 *  this code show how create and use modules with namespaces
 */
namespace App {
    // Createing a type of data
    type Listener <T> = (items: T[]) => void;

    class State<T> {
        protected listeners: Listener<T>[] = [];

        addListener(listenerFn: Listener <T>){
            this.listeners.push(listenerFn)
        }
    }
    // class ProjectState with inheritance
    class ProjectState extends State<Project>{
        private projects: Project[] = [];
        private static instance: ProjectState
        private constructor(){
            super();
        }
    }
}