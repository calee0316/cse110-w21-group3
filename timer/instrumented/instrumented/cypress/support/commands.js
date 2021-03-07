function cov_2l8dfwj1gp() {
  var path = "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/instrumented/cypress/support/commands.js";
  var hash = "8e13c7cb65b7a15c70ee8755c7fbbc0e848c96f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/instrumented/cypress/support/commands.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 98
        }
      },
      "1": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 55
        }
      },
      "2": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 44
        }
      },
      "3": {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "4": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 50
        }
      },
      "6": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "7": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "8": {
        start: {
          line: 23,
          column: 23
        },
        end: {
          line: 23,
          column: 37
        }
      },
      "9": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 28,
          column: 6
        }
      },
      "10": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 28
        }
      },
      "11": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "12": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "cov_e6okv7ysw",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 20
          },
          end: {
            line: 26,
            column: 21
          }
        },
        loc: {
          start: {
            line: 26,
            column: 32
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 28
          }
        }, {
          start: {
            line: 17,
            column: 33
          },
          end: {
            line: 17,
            column: 49
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }, {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 19,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 19,
            column: 21
          }
        }, {
          start: {
            line: 19,
            column: 25
          },
          end: {
            line: 19,
            column: 53
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      sources: ["commands.js"],
      names: [],
      mappings: ";;;;;;;;;;;;;;;;;;;;;;;;AAeY;;;;;;;;;AAfZ;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,OAAO,+BAAP",
      sourcesContent: ["// ***********************************************\n// This example commands.js shows you how to\n// create various custom commands and overwrite\n// existing commands.\n//\n// For more comprehensive examples of custom\n// commands please read more here:\n// https://on.cypress.io/custom-commands\n// ***********************************************\n//\n//\n// -- This is a parent command --\n// Cypress.Commands.add(\"login\", (email, password) => { ... })\n//\n//\n// -- This is a child command --\n// Cypress.Commands.add(\"drag\", { prevSubject: 'element'}, (subject, options) => { ... })\n//\n//\n// -- This is a dual command --\n// Cypress.Commands.add(\"dismiss\", { prevSubject: 'optional'}, (subject, options) => { ... })\n//\n//\n// -- This will overwrite an existing command --\n// Cypress.Commands.overwrite(\"visit\", (originalFn, url, options) => { ... })\nimport \"cypress-localstorage-commands\"\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8e13c7cb65b7a15c70ee8755c7fbbc0e848c96f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l8dfwj1gp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2l8dfwj1gp();

function cov_e6okv7ysw() {
  cov_2l8dfwj1gp().f[0]++;
  var path = (cov_2l8dfwj1gp().s[0]++, "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/cypress/support/commands.js");
  var hash = (cov_2l8dfwj1gp().s[1]++, "dfc77bca1e9b2c3681792c99d3c48340a7f75aeb");
  var global = (cov_2l8dfwj1gp().s[2]++, new Function("return this")());
  var gcv = (cov_2l8dfwj1gp().s[3]++, "__coverage__");
  var coverageData = (cov_2l8dfwj1gp().s[4]++, {
    path: "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/cypress/support/commands.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dfc77bca1e9b2c3681792c99d3c48340a7f75aeb"
  });
  var coverage = (cov_2l8dfwj1gp().s[5]++, (cov_2l8dfwj1gp().b[0][0]++, global[gcv]) || (cov_2l8dfwj1gp().b[0][1]++, global[gcv] = {}));
  cov_2l8dfwj1gp().s[6]++;

  if ((cov_2l8dfwj1gp().b[2][0]++, !coverage[path]) || (cov_2l8dfwj1gp().b[2][1]++, coverage[path].hash !== hash)) {
    cov_2l8dfwj1gp().b[1][0]++;
    cov_2l8dfwj1gp().s[7]++;
    coverage[path] = coverageData;
  } else {
    cov_2l8dfwj1gp().b[1][1]++;
  }

  var actualCoverage = (cov_2l8dfwj1gp().s[8]++, coverage[path]);
  {
    cov_2l8dfwj1gp().s[9]++;

    // @ts-ignore
    cov_e6okv7ysw = function () {
      cov_2l8dfwj1gp().f[1]++;
      cov_2l8dfwj1gp().s[10]++;
      return actualCoverage;
    };
  }
  cov_2l8dfwj1gp().s[11]++;
  return actualCoverage;
}

cov_2l8dfwj1gp().s[12]++;
cov_e6okv7ysw(); // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQVAiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIGNvbW1hbmRzLmpzIHNob3dzIHlvdSBob3cgdG9cbi8vIGNyZWF0ZSB2YXJpb3VzIGN1c3RvbSBjb21tYW5kcyBhbmQgb3ZlcndyaXRlXG4vLyBleGlzdGluZyBjb21tYW5kcy5cbi8vXG4vLyBGb3IgbW9yZSBjb21wcmVoZW5zaXZlIGV4YW1wbGVzIG9mIGN1c3RvbVxuLy8gY29tbWFuZHMgcGxlYXNlIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2N1c3RvbS1jb21tYW5kc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImxvZ2luXCIsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImRyYWdcIiwgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZGlzbWlzc1wiLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoXCJ2aXNpdFwiLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuaW1wb3J0IFwiY3lwcmVzcy1sb2NhbHN0b3JhZ2UtY29tbWFuZHNcIlxuIl19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7OztpQkFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxPQUFBLCtCQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIGNvbW1hbmRzLmpzIHNob3dzIHlvdSBob3cgdG9cbi8vIGNyZWF0ZSB2YXJpb3VzIGN1c3RvbSBjb21tYW5kcyBhbmQgb3ZlcndyaXRlXG4vLyBleGlzdGluZyBjb21tYW5kcy5cbi8vXG4vLyBGb3IgbW9yZSBjb21wcmVoZW5zaXZlIGV4YW1wbGVzIG9mIGN1c3RvbVxuLy8gY29tbWFuZHMgcGxlYXNlIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2N1c3RvbS1jb21tYW5kc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImxvZ2luXCIsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImRyYWdcIiwgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZGlzbWlzc1wiLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoXCJ2aXNpdFwiLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuaW1wb3J0IFwiY3lwcmVzcy1sb2NhbHN0b3JhZ2UtY29tbWFuZHNcIlxuIl19