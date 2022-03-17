type Textual1 = string | number;
type Numeric1 = number | boolean;
type Universal1 = Textual | Numeric;

function plus2(a: number): number;
function plus2(a: number, b: number): number;
function plus2(a: string, b: string): string;
function plus2(a: string, b: number): string;
function plus2(a: Textual1, b: Textual1 = 0): Universal1 {
    // type guard to use union type
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + ' ' + b.toString();
    }
    return a + b;
}

const resultName = plus2('Angga', 'Ari') // as string;
resultName.split(' ');