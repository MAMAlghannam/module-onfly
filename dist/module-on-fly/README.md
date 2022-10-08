# ModuleOnFly

https://www.angulararchitects.io/en/aktuelles/module-federation-light-using-microfrontends-with-angular-already-today/

- [x] Global styles -> ```ViewEncapsulation.None for entry component```
- [x] Assets:
    - in angular.json of the project using this onfly-module
        ```
            "architect": {
                "build": {
                ...
                "options": {
                    ...
                    "assets": [
                        "src/favicon.ico",
                        "src/assets",
                        {
                            "glob": "**/*",
                            "input": "./node_modules/moduleOnFly/assets",
                            "output": "/onfly-assets/"
                        }
                    ],
                ...
                }
                ...
            }
            ...
        }
        ```
- [] Dependencies