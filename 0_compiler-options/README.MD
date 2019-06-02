# Compiler Options
## No emit on error 
`"noEmitOnError":true`
Prevent the generation of JS files when there is a TS error.

## Source Map
`"sourceMap": true`
Creates a source mapping file; allows direct TS debugging after compilation.

2 files created off the ts file
- something.js
- something.js.map

## No Implicit Any
`"noImplicitAny":true`
Errors when any declaration / definition results in an implicit `any`

## Remove Comments
`"removeComments":true`
Removes comments on compile to JS

## Strict Null Checks
`"strictNullChecks":true`
Check that null is not set to a variable where it has not been explicitly allowed using unions.
Refer to the 1_types/nullable.ts and 1_types/union.ts files.

## No unused parameters
`"noUnusedParameters":true`
Verifies methods do not add parameters that are not used.

