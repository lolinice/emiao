//1.引入mockjs
import Mock from 'mockjs'
//2.将数据引进来 -->data是js对象，有三个属性
import data from './data.json'


//2.定义
Mock.mock('/brands',{code:0,data:data.brand}) //需要返回这样的结构{code:0,data(字符串类型):brand数据}
Mock.mock('/categorys',{code:0,data:data.categorys})
Mock.mock('/homepage',{code:0,data:data.homepage})
Mock.mock('/allbrands',{code:0,data:data.allbrands})
