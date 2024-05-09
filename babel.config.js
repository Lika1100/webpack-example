const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    process.env.NODE_ENV === 'development' && 'react-refresh/babel'
].filter(Boolean);

const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    //"mobx"
    
]

module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);

    return {
       presets,
        plugins
    }
}