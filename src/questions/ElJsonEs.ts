import { Expectation, equals } from '@serenity-js/assertions';

export class ElJsonEs {
    static igualA(json: any) {
        return Expectation
            .to('check the json')
            .soThatActual(equals(json));
    }
}