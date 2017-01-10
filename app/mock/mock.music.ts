export class Music{
    constructor(
        public id: number,
        public description: string,
        public name: string,
        public musicPath:string,
        public author:string,
        public playListId:number
    ) { }
}