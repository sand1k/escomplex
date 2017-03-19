'use strict'

const defineSyntax = require('./define-syntax')

const ForOfStatement = settings => defineSyntax({
  lloc: 1,
  cyclomatic: settings.forof ? 1 : 0,
  operators: 'forof',
  children: [ 'left', 'right', 'body' ]
})

const ClassBody = settings => defineSyntax({
  children: [ 'body' ]
})

const ClassDeclaration = settings => defineSyntax({
  lloc: 1,
  operators: 'class',
  operands: node => node.id.name,
  children: [ 'superClass', 'body' ]
})

const ImportDeclaration = settings => defineSyntax({
  lloc: 1,
  operators: 'import',
  children: [ 'specifiers', 'source' ],
  dependencies: node => ({
    line: node.loc.start.line,
    type: 'Module',
    path: node.source.value
  })
})

const ExportAllDeclaration = settings => defineSyntax({
  lloc: 1,
  operators: 'export',
  children: [ 'source' ]
})

const ExportDefaultDeclaration = settings => defineSyntax({
  lloc: 1,
  operators: 'export',
  children: [ 'declaration' ]
})

const ExportNamedDeclaration = settings => defineSyntax({
  lloc: 1,
  operators: 'export',
  children: [ 'declaration', 'specifiers', 'source' ]
})

const MethodDefinition = settings => defineSyntax({
  children: [ 'value' ],
  methodName: node => node.key
})

module.exports = {
  ClassBody,
  ClassDeclaration,
  ExportAllDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  ForOfStatement,
  ImportDeclaration,
  MethodDefinition
}
