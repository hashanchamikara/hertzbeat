# ng-alain-plugin-theme

NG-ALAIN theme plugin.

[![NPM version](https://img.shields.io/npm/v/ng-alain-plugin-theme.svg?style=flat-square)](https://www.npmjs.com/package/ng-alain-plugin-theme)
![Ci](https://github.com/ng-alain/plugin-theme/workflows/Ci/badge.svg)

## Features

- **themeCss** Generate theme styles for theme switching
- **colorLess** Generate `color.less`, dynamically customize colors

## Usage

Install `ng-alain-plugin-theme` to `devDependencies`.

```bash
# via yarn
yarn add -D ng-alain-plugin-theme
# via npm
npm i ng-alain-plugin-theme --save-dev
```

You can use `npx` to complete the generated project `color.less` and theme style, like this:

```bash
# Generate theme styles for theme switching
npx ng-alain-plugin-theme -t=themeCss
# Generate `color.less`, dynamically customize colors
npx ng-alain-plugin-theme -t=colorLess

# DEBUG MODE
npx ng-alain-plugin-theme -t=themeCss -debug
```

## Theme Styles

You muse add `ng-alain.json` file in root path, for example, you want to generate `dark` and `dust` style:

```json
{
  "$schema": "./node_modules/ng-alain/schema.json",
  "theme": {
    "list": [
      {
        "theme": "dark"
      },
      {
        "key": "dust",
        "modifyVars": {
          "@primary-color": "#F5222D"
        }
      }
    ]
  }
}
```

> We provide a completed [JSON Schema](https://github.com/ng-alain/delon/blob/master/packages/schematics/schema.json) that you can write very conveniently.

Execute the following command:

```bash
npx ng-alain-plugin-theme -t=themeCss
```

You can refer to how [ng-alain scaffold](https://github.com/ng-alain/ng-alain/blob/master/src/app/layout/default/setting-drawer/setting-drawer.component.ts#L241) uses `style.dark.css`.

## Dynamically Customize Colors

If you using [NG-ALAIN](https://ng-alain.com/) scaffold, execute the following command with default parameters:

```bash
npx ng-alain-plugin-theme -t=colorLess
```

You can refer to how [delon document site](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/footer/footer.component.ts#L47-L89) uses `color.less`.

Or use `ng-alain.json` to change the default parameters:

```json
{
  "$schema": "./node_modules/ng-alain/schema.json",
  "colorLess": {
    "variables": ["@primary-color"],
    "ngZorroAntd": "./node_modules/ng-zorro-antd/",
    "styleFilePath": "./src/styles.less",
    "themeFilePath": "./src/styles/theme.less",
    "outputFilePath": "./src/assets/color.less"
  }
}
```

## License

MIT
