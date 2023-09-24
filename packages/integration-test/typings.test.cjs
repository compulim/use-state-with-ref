const { createProgram, flattenDiagnosticMessageText, getPreEmitDiagnostics } = require('typescript');

test('with initial value should work', () => {
  // GIVEN: TypeScript compiler to compile ./typings/withInitialValue.ts.
  const program = createProgram(['./typings/withInitialValue.ts'], { noEmit: true, strict: true });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should have no errors.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(0);
});

test('without initial value should work', () => {
  // GIVEN: TypeScript compiler to compile ./typings/withoutInitialValue.ts.
  const program = createProgram(['./typings/withoutInitialValue.ts'], { noEmit: true, strict: true });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should have no errors.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(0);
});
