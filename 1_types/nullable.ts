// nullable types - Enforcement requires "compilerOptions" {"StrictNullChecks": true}

let cannotBeNull : Number = 43;

let canBeNull: number | null = 75;

// "any" lets null be set
let anyTypesCanBeNull: any = null;

