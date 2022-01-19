import { Log, PerformsActivities, Task, UsesAbilities } from "@serenity-js/core";
import { GetRequest, LastResponse, PostRequest, Send } from "@serenity-js/rest";
import { request } from "http";
import { Users } from "../models/Users";

export class CreateUsers implements Task {
    private users: Users;
    constructor(users: Users) {
        this.users = users;
    }
    static withData(users: Users) {
        return new CreateUsers(users);
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(Send.a(PostRequest.to('api/users').with(this.users)),
            Log.the('Json response', LastResponse.body()))
    }

}