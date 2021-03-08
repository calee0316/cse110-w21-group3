function cov_1ctfwqfk23() {
  var path = "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/cypress/plugins/index.js";
  var hash = "318e0884e269431c40adc948cb48b5135b773920";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ruanjun/Documents/GitHub/cse110-w21-group3/timer/cypress/plugins/index.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "1": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "2": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 17
          },
          end: {
            line: 18,
            column: 18
          }
        },
        loc: {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "318e0884e269431c40adc948cb48b5135b773920"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ctfwqfk23 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ctfwqfk23();
cov_1ctfwqfk23().s[0]++;

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  cov_1ctfwqfk23().f[0]++;
  cov_1ctfwqfk23().s[1]++;

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('@cypress/code-coverage/task')(on, config); // include any other plugin code...
  // It's IMPORTANT to return the config object
  // with any changed environment variables


  cov_1ctfwqfk23().s[2]++;
  return config;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJvbiIsImNvbmZpZyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsRUFBRCxFQUFLQyxNQUFMLEtBQWdCO0FBQUE7QUFBQTs7QUFDL0I7QUFDQTtBQUNBQyxFQUFBQSxPQUFPLENBQUMsNkJBQUQsQ0FBUCxDQUF1Q0YsRUFBdkMsRUFBMkNDLE1BQTNDLEVBSCtCLENBSS9CO0FBRUE7QUFDQTs7O0FBUCtCO0FBUS9CLFNBQU9BLE1BQVA7QUFDRCxDQVREIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgcGx1Z2lucy9pbmRleC5qcyBjYW4gYmUgdXNlZCB0byBsb2FkIHBsdWdpbnNcbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmIGxvYWRpbmdcbi8vIHRoZSBwbHVnaW5zIGZpbGUgd2l0aCB0aGUgJ3BsdWdpbnNGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3BsdWdpbnMtZ3VpZGVcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYSBwcm9qZWN0IGlzIG9wZW5lZCBvciByZS1vcGVuZWQgKGUuZy4gZHVlIHRvXG4vLyB0aGUgcHJvamVjdCdzIGNvbmZpZyBjaGFuZ2luZylcblxuLyoqXG4gKiBAdHlwZSB7Q3lwcmVzcy5QbHVnaW5Db25maWd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKG9uLCBjb25maWcpID0+IHtcbiAgLy8gYG9uYCBpcyB1c2VkIHRvIGhvb2sgaW50byB2YXJpb3VzIGV2ZW50cyBDeXByZXNzIGVtaXRzXG4gIC8vIGBjb25maWdgIGlzIHRoZSByZXNvbHZlZCBDeXByZXNzIGNvbmZpZ1xuICByZXF1aXJlKCdAY3lwcmVzcy9jb2RlLWNvdmVyYWdlL3Rhc2snKShvbiwgY29uZmlnKVxuICAvLyBpbmNsdWRlIGFueSBvdGhlciBwbHVnaW4gY29kZS4uLlxuXG4gIC8vIEl0J3MgSU1QT1JUQU5UIHRvIHJldHVybiB0aGUgY29uZmlnIG9iamVjdFxuICAvLyB3aXRoIGFueSBjaGFuZ2VkIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICByZXR1cm4gY29uZmlnXG59XG4iXX0=