import renderer from 'react-test-renderer';
import React from 'react';
import button from '../button';
//Enzyme是由Airbnb开源的一个React的JavaScript测试工具
/**
 * enzyme支持三种方式的渲染：
shallow：浅渲染，是对官方的Shallow Renderer的封装。将组件渲染成虚拟DOM对象，只
会渲染第一层，子组件将不会被渲染出来，因而效率非常高。不需要DOM环境， 并可以使用jQuery的方式访问组件的信息；
render：静态渲染，它将React组件渲染成静态的HTML字符串，然后使用Cheerio这个库解析这段
字符串，并返回一个Cheerio的实例对象，可以用来分析组件的html结构。
mount：完全渲染，它将组件渲染加载成一个真实的DOM节点，用来测试DOM API的交互和组件
的生命周期，用到了jsdom来模拟浏览器环境。
 */
import { mount } from 'enzyme';

describe('button', () => {
    it('测试buttonui', () => {
        const json = renderer.create(<button name='Primary' />).toJSON();
        //在当前目录生成一个快照，生成__snapshots__文件,对的保存
        expect(json).toMatchSnapshot();
    })
    it('onClick', () => {
        let n = 1;
        const fn = () => {
            n = n + 1;
        };
        const component = mount(<button name='Primary' onClick={fn} />);
        //simulate模拟
        component.find('button').simulate('click');
        expect(n).toEqual(2);
    })
})
