module.exports =  {
    parser:  '@typescript-eslint/parser', 
    extends:  [
      'plugin:react/recommended',
      'prettier/@typescript-eslint',
      'plugin:@typescript-eslint/recommended', 
    ],
   parserOptions:  {
      ecmaVersion:  2018,  
      sourceType:  'module', 
    },
    rules:  {},
  };