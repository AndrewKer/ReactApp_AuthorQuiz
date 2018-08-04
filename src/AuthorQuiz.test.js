import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
//npm install enzyme enzyme-adapter
import Enzyme,{mount,shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

const state = {
  turnData:{
    books:['book1','book2', 'book3', 'book4', 'book5'],
    author:{
      name: 'Author 1',
      imageUrl: 'images/authors/author1.jpg',
      imageSource: '',
      books: ['book1']
    }
  },
  highlight:'none'
}

describe("Author Quiz", ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />, div);
  });

  describe("When no answer has been selected", ()=>{
    let wrapper;
    beforeAll(()=>{
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />);
    });

    it("should have no background color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("When the wrong answer has been selected",()=>{
    let wrapper;

    beforeAll(()=>{
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({},state,{highlight:'wrong'}))} onAnswerSelected={()=>{}} />);
    });

    it("should have a red background color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("When the correct answer has been selected",()=>{
    let wrapper;

    beforeAll(()=>{
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({},state,{highlight:'correct'}))} onAnswerSelected={()=>{}} />);
    });

    it("should have a green background color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });
});



