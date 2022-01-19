import { Then, When } from "@cucumber/cucumber";
import { Ensure } from "@serenity-js/assertions";
import { actorInTheSpotlight, Log } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { CreateUserBuilder } from "../builders/CreateUserBuilder";
import { CreateUserResponse } from "../interfaces/dto/CreateUserResponse";
import { ElJsonEs } from "../questions/ElJsonEs";
import { CreateUsers } from "../tasks/CreateUsers";

When('juan enter the user Data', (table) =>
    actorInTheSpotlight().attemptsTo(
        CreateUsers.withData(CreateUserBuilder
            .withName(table.rowsHash()['nombre'])
            .andJob(table.rowsHash()['trabajo']))));

Then('could see the json with user data', function () {
  actorInTheSpotlight().attemptsTo(
    Ensure.that(LastResponse.body<CreateUserResponse>().answeredBy(actorInTheSpotlight()).nombre,
      ElJsonEs.igualA("Juan")),
      Ensure.that(LastResponse.body<CreateUserResponse>().answeredBy(actorInTheSpotlight()).trabajo,
      ElJsonEs.igualA("SoftwareEngineer")))});