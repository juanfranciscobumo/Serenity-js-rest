import { Given } from "@cucumber/cucumber";
import { actorCalled } from "@serenity-js/core";

Given('{string} execute the petition', function (nombre: string) {
    actorCalled(nombre)
});