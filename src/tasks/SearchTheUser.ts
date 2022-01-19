import { Log, PerformsActivities, Task, UsesAbilities } from "@serenity-js/core";
import { GetRequest, LastResponse, Send } from "@serenity-js/rest";

export class SearchTheUser implements Task {
    private email: string;
    private clave: string;
    constructor(private code: string) {
        this.code = code;
    }
    static withCode(code: string) {
        return new SearchTheUser(code);
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(Send.a(GetRequest.to('api/users/' + this.code)))
    }

}