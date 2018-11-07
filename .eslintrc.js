module.exports = {
  "extends": [
    "airbnb"
  ],
  "parser": "babel-eslint",
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  "settings": {
    "extensions": [".js", ".jsx"],
    "import/resolver": {
      "babel-module": {}
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "ISPRODUCTION": false,
  },
  "rules": {
    "no-confusing-arrow": "off",
    "space-unary-ops": [
      "error", {
        "overrides": {
          "!": true,
          "!!": true
        }
      }
    ],
    "max-len": [
      "error", {
        "code": 120
      }
    ],
    "padding-line-between-statements": [
      "error",
      {"blankLine": "always", "prev": "*", "next": "return"},
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
    ]
  }
}
