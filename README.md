### How To Use



#### npm package

```shell
npm i easy-theme-config
```



#### Add your config file

```javascript
// theme-config.js
const themeConfig = [
    {
        theme: "default",
        config: {
            "--proj-background": "#efefef",
            "--proj-text-color": "#000000"
        }
    },
    {
        theme: "dark",
        config: {
            "--proj-background": "#000000",
            "--proj-text-color": "#FFFFFF"
        }
    },
    {
        theme: "pink",
        config: {
            "--proj-background": "#ff97c3",
            "--proj-text-color": "#3360be"
        }
    },
    {
        theme: "blue",
        config: {
            "--proj-background": "#2e9aff",
            "--proj-text-color": "#FFFFFF"
        }
    },
    {
        theme: "green",
        config: {
            "--proj-background": "#45e0a6",
            "--proj-text-color": "#7b878d"
        }
    }
]

export default themeConfig
```



#### css

```css
html, body {
    background-color: var(--proj-background);
  	color: var(--proj-text-color);
}
```



#### Init 

```javascript
// specify first theme 使用这种方式指定第一种主题
var ETC = new EasyThemeConfig(themeConfig)
    
// specify default theme 使用这种方式指定默认的主题
// var ETC = new EasyThemeConfig(themeConfig, 1)
```



#### Change your theme

```javascript
// ETC.setCurrentThemeByIndex([themeIndex])
ETC.setCurrentThemeByIndex(4)
```

