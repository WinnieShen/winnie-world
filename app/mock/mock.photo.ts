export class Photo {
    constructor(
        public id: number,
        public description: string,
        public photoPath: string,
        public takeTime:string,
        secretLevel:number
    ) { }
}