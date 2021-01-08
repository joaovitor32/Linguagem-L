import ResolveExpression from '../../modules/ResolveExpression.js';


describe('Test - Resolve Expression correctness',()=>{

    test('Resolve Expression usual case',()=>{

        expect(ResolveExpression([
            '(',    'mult', '(',
            'soma', '(',    '2',
            ',',    '1',    ')',
            ',',    '1',    ')',
            ',',    '1',    ')'
          ] ,'soma')).toBe(4);

    })

    test('Resolve Expression error - Parentheses error',()=>{

        expect(()=>ResolveExpression([
            '(',  '(',  'mult', '(',
            'soma', '(', ')',')',   '2',
            ',',    '1',    ')',
            ',',    '1',    ')',
            ',',    '1',    ')'
          ] ,'soma')).toThrow(Error);

    })


    test('Resolve Expression error - Syntax error',()=>{

        expect(()=>ResolveExpression([
            'mult', '(',
            'soma', '(', ')',')',   '2',
            ',',    '1',    ')',
            ',',    '1',    ')',
            ',',    '1',    ')'
          ] ,'soma')).toThrow(Error);

    })

    test('Comma error - Parentheses error',()=>{

        expect(()=>ResolveExpression([
            '(', 'mult', '(',
            'soma', '(', ',',   '2',
            ',',    '1',    ')',
            ',',    '1',    ')',
            ',',    '1',    ')'
          ] ,'soma')).toThrow(Error);

    })

    test('Comma error - Wrong number of arguments',()=>{

        expect(()=>ResolveExpression([
            '(',    'mult', '(',
            'soma', '(',    '2',
            ',', '3',   '1',    ')',
            ',',    '1',    ')',
            ',',    '1',    ')'
          ]  ,'soma')).toThrow(Error);

    })

});