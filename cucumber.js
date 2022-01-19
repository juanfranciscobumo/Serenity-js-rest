module.exports = {
    default: `
        --publish-quiet
        --require=src/features/*.ts
        --require=src/**/*.ts
        --require=src/**/*.json
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"https://reqres.in/"}
    `,
}
