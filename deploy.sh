#patch API不变，修复bug
#minor api有变化，变化不大，完全不影响现有代码
#major api变化很大，影响现有代码
# sh ./deploy.sh patch*运行当前代码
npm version $1 &&\
 git push -u wronwheel master