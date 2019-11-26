//className合并工具
const classes = (...name:(string | undefined)[]):string => {
    //Boolean传入为Boolean，那么久只返回正确的
    return name.filter(Boolean).join(' ');
};

export default classes;