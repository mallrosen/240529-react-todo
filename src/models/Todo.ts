export class Todo {
    id: number
    done: boolean
    constructor(public todo:string){
    this.id = Date.now()
    this.done = false
    }
}