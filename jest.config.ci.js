const base = require('./jest.config');

module.exports = Object.assign({}, base, {
    reporters: [ "jest-junit" ],
    //配置circle CI 持续化集成
    collectCoverage: true,//是否收集测试覆盖率
    collectCoverageFrom: ["{lib,include}/**/*.{ts,tsx}", "!**/node_modules/**"],
    //测试目录，但不会收集__xx__目录，任意node_modules都不测试
    coverageDirectory: 'coverage',//生成报告放在哪
    coverageReporters: ['text', 'lcov'],//有哪些报告，text控制台输出，lcov著名的分析报告
})