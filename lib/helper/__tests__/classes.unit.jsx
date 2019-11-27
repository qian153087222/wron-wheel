import classes from '../classes';

describe('classes',()=>{
    it('接受1个className',()=>{
        const res = classes('className');
        expect(res).toEqual('className');
    })
    it('接受2个className',()=>{
        const res = classes('className','class');
        expect(res).toEqual('className class');
    })
    it('接受3个className',()=>{
        const res = classes('className','class','clss');
        expect(res).toEqual('className class clss');
    })
    it('接受随意传递',()=>{
        const res = classes('className','中文',null,undefined,false);
        expect(res).toEqual('className 中文');
    })
    it('不传递',()=>{
        const res = classes('');
        expect(res).toEqual('');
    })
})
