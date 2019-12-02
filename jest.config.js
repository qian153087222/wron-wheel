//https://jestjs.io/docs/en/configuration.html
module.exports = {
    verbose:true,
    clearMocks:false,
    //配置circle CI 持续化集成
    collectCoverage:true,//是否收集测试覆盖率
    collectCoverageFrom:["{lib,include}/**/*.{ts,tsx}","!**/node_modules/**"],
    //测试目录，但不会收集__xx__目录，任意node_modules都不测试
    coverageDirectory:'coverage',//生成报告放在哪
    coverageReporters:['text','lcov'],//有哪些报告，text控制台输出，lcov著名的分析报告
    reporters: [ "default", "jest-junit" ],
    moduleFileExtensions:['js','jsx','ts','tsx'],
    moduleDirectories:['node_modules'],
    globals:{
        'ts-jest':{
            tsConfig:'tsconfig.test.json'
        }
    },
    moduleNameMapper:{
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':'<rootDir>/test/__mocks__/file-mock.js',
        '\\.(css|less|sass|scss)$':'<rootDir>/test/__mocks__/object-mock.js'
    },
    testMatch:['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform:{
        '^.+unit\\.(js|jsx)$':'babel-jest',
        '^.+\\.(ts|tsx)$':'ts-jest'
    },
    setupFilesAfterEnv:['<rootDir>test/setupTest.js']
}