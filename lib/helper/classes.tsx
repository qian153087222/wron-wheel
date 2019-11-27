//className合并工具
//filter传入为Boolean，那么就只返回正确的
const classes = (...name:(string | undefined)[]):string => name.filter(Boolean).join(' ');
    
export default classes;