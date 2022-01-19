import { actorInTheSpotlight, Log } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest'
import { Ensure, equals } from '@serenity-js/assertions';
import { Then, When } from '@cucumber/cucumber';
import { SearchTheUser } from '../tasks/SearchTheUser';
import { ElJsonEs } from '../questions/ElJsonEs';
import consulta from "../files/consultaUsuarios.json";
import { ResponseUser } from '../interfaces/dto/ResponseUser';

When('enter the code for the user {string}', (code: string) =>
  actorInTheSpotlight().attemptsTo(SearchTheUser.withCode(code)));

Then('the user could see the response code {int}', (code: number) =>
  actorInTheSpotlight().attemptsTo(Ensure.that(LastResponse.status(), equals(code))));

Then('could see the json with the search', () =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(LastResponse.body<ResponseUser>().answeredBy(actorInTheSpotlight()),
      ElJsonEs.igualA(consulta))));