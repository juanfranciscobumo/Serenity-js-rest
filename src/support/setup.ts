import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import { engage } from '@serenity-js/core';
import { Actors } from './Actors';

Before(function () {
    engage(new Actors(this.parameters.baseApiUrl));
});
setDefaultTimeout(15000);