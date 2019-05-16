import React from 'react'

import Comments from './Comments'
import Comment from './Comment'

import { shallow } from 'enzyme'
import { italic } from 'ansi-colors';

describe('<Comments />', () => {
    it('should render Comments', () => {
        const comments = {
            a: {id: 'a', comment: 'Comment 1'},
            b: {id: 'b', comment: 'Comment 2'}
        }
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find(Comment).length).toBe(2)

        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
        expect(wrapper.find(Comment).get(1).props.c).toBe(comments.b)

        expect(wrapper.find(Comment).get(0).key).toBe(comments.a.id)
        expect(wrapper.find(Comment).get(1).key).toBe(comments.b.id)

    })

    it('should render with no Comments', () => {
        const comments = {}
        const wrapper = shallow(<Comments comments={comments} />)

        expect(wrapper.find(Comment).length).toBe(0)


    })
})