
import { Actor, Cast } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { ensure, isNotBlank } from 'tiny-types';


export class Actors implements Cast {
    constructor(private readonly baseApiUrl: string) {
        ensure('apiUrl', baseApiUrl, isNotBlank());
    }
    
    prepare(actor: Actor): Actor {              // `prepare(actor: Actor)` instead of `actor(name: string)`
        return actor.whoCan(                    // add the abilities instead of instantiating the actor
            CallAnApi.at(this.baseApiUrl),
        );
    }
}


