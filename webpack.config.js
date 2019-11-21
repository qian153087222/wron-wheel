module.exports = {
    entry:{
        index:'./lib/index.tsx'
    },
    module:{
        rules:{
            test:/\.tsx?$/,
            loader:'awesome-typescript-loade'
        }
    }
}