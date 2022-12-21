class EasyThemeConfig {
    options

    currentTheme

    currentThemeIndex = 0

    errorText = "EasyThemeConfig "

    constructor(options, currentThemeIndex = 0) {
        if (!options || options.length === 0) {
            throw new Error(`${this.errorText}config Error;you must be use Object<List>`)
        }
        this.options = options
        this.currentThemeIndex = currentThemeIndex
        this.setDefaultTheme()
    }

    setDefaultTheme() {
        const defaultTheme = this.options[this.currentThemeIndex]
        if (!defaultTheme) {
            throw new Error(`${this.errorText}value Error!`)
        }
        this.currentTheme = defaultTheme
        this.setThemeForCSS()
    }

    setCurrentThemeByIndex(index) {
        if (this.options.length <= index) {
            throw new Error(`${this.errorText}can not find the theme by this index!`)
        }
        this.currentTheme = this.options[index]
        this.currentThemeIndex = index
        this.setThemeForCSS()
    }

    setThemeForCSS() {
        const themeConfig = this.currentTheme.config
        const valueArr = Object.keys(themeConfig)
        for (let i = 0; i < valueArr.length; i++) {
            const key = valueArr[i]
            const value = themeConfig[key]
            document.documentElement.style.setProperty(key, value)
        }
    }

    getOptions() {
        return this.options
    }

    getCurrentTheme() {
        return this.currentTheme
    }

    getCurrentThemeIndex() {
        return this.currentThemeIndex
    }
}

export default EasyThemeConfig