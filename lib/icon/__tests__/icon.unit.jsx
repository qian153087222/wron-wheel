import renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon' 

describe('icon',()=>{
    it('测试ui',()=>{
        const json = renderer.create(<Icon name='qq'/>).toJSON();
        //在当前目录生成一个快照，
        expect(json).toMatchSnapshot();
    })
})
