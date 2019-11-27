//将路径下的所有文件引入
const importAll = requireContext => requireContext.keys().forEach(requireContext);

try {
    importAll(require.context('./icons', true, /\.svg$/))
} catch (error) {
    console.log(error);
};
