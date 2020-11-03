import divi from './utils/divi.js';
import multi from './utils/multi.js';
import soma from './utils/soma.js';
import sqrt from './utils/sqrt.js';
import exp from './utils/exp.js';
import subt from './utils/subt.js';
import maior from './utils/maior.js';
import menor from './utils/menor.js';
import resto from './utils/resto.js';
import fatorial from './utils/fatorial.js';
import TrocaSinal from './utils/trocaSinal.js';
import pow from './utils/pow.js';

let operators = {
    ['^']: [{ associativity: "Right", precedence: 4 }],
    ['*']: [{ associativity: "Left", precedence: 3 }],
    ['/']: [{ associativity: "Left", precedence: 3 }],
    ['+']: [{ associativity: "Left", precedence: 2 }],
    ['-']: [{ associativity: "Left", precedence: 2 }],
    ['%']: [{ associativity: "Left", precedence: 3 }],
    ['>']: [{ associativity: "Left", precedence: 1 }],
    ['<']: [{ associativity: "Left", precedence: 1 }],
    ['!']: [{ associativity: "Right", precedence: 6 }],
    ['s']: [{ associativity: "Right", precedence: 3 }],
}

let OperatorsList = {
    ['+']: [(a, b) => { return `soma(${a},${b})` }, { args: 2 }],
    ['!']: [(a) => { return `fatorial(${a})` }, { args: 1 }],
    ['*']: [(a, b) => { return `mult(${a},${b})` }, { args: 2 }],
    ['^']: [(a, b) => { return `expo(${a},${b})` }, { args: 2 }],
    ['-']: [(a, b) => { return `subt(${a},${b})` }, { args: 2 }],
    ['/']: [(a, b) => { return `divi(${a},${b})` }, { args: 2 }],
    ['>']: [(a, b) => { return `maior(${a},${b})` }, { args: 2 }],
    ['<']: [(a, b) => { return `menor(${a},${b})` }, { args: 2 }],
    ['%']: [(a, b) => { return `resto(${a},${b})` }, { args: 2 }],
    ['s']: [(a) => { return `TrocaSinal(${a})` }, { args: 1 }],
  };
  

let FunctionsList = {
    ['sqrt']: [(a) => { return sqrt(a) }, { args: 1 }],
    ['mult']: [(a, b) => { return multi(a, b) }, { args: 2 }],
    ['subt']: [(a, b) => { return subt(a, b) }, { args: 2 }],
    ['soma']: [(a, b) => { return soma(a, b) }, { args: 2 }],
    ['divi']: [(a, b) => { return divi(a, b) }, { args: 2 }],
    ['exp']: [(a) => { return exp(a) }, { args: 2 }],
    ['expo']: [(a,b) => { return pow(a,b) }, { args: 2 }],
    ['maior']: [(a,b) => { return maior(a,b) }, { args: 2 }],
    ['menor']: [(a,b) => { return menor(a,b) }, { args: 2 }],
    ['resto']: [(a,b) => { return resto(a,b) }, { args: 1 }],
    ['fatorial']: [(a) => { return fatorial(a) }, { args: 1 }],
    ['TrocaSinal']: [(a) => { return TrocaSinal(a) }, { args: 1 }],
  };

export {operators,FunctionsList,OperatorsList};
