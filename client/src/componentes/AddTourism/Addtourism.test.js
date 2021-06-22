import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { shallow, mount } from 'enzyme';
import AddTourism from './AddTourism';

describe('AddTourism', ()=>{
    let wrapper;
    
        wrapper=mount(<AddTourism/>)
    
    it('AddTourism debe tner un label que diga:nombre', ()=>{
        const{container}=render(<AddTourism/>)
        const element = container.querySelectorAll('input')[0]
        expect(element.innerHTML).toBe('nombre:');
        });
    it('el nombre debe tener la clase warning si tiene un error', ()=>{
        wrapper.find('input[name="nombreActividad"]').simulate('change', {target:{name:'username', value:''}});
        const ele=wrapper.find('input[name="nombreActividad"]');
        expect(ele.hasClass('danger')).toBeFalsy();
    });
})