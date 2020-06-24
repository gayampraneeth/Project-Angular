import { Injectable } from "@angular/core";

export class ToDo {
    constructor(public id: number, public taskName: string, public noOfDays?: number) {

    }
}

export class HelloWorld {
    public message: String;
}
