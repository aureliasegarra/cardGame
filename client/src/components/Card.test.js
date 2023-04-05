const assert = require('assert');
const React = require('react');
const { shallow } = require('enzyme');
const Card = require('./Card');

describe('Card Component', function() {
    it('should render without throwing an error', function() {
        const wrapper = shallow(<Card />);
        assert.equal(wrapper.find('.card').exists(), true);
    });

    it('should render the card name', function() {
        const cardName = 'Ace of Spades';
        const wrapper = shallow(<Card name={cardName} />);
        assert.equal(wrapper.find('.card-name').text(), cardName);
    });

    it('should render the card image', function() {
        const cardImage = 'ace_of_spades.png';
        const wrapper = shallow(<Card image={cardImage} />);
        assert.equal(wrapper.find('.card-image').prop('src'), cardImage);
    });
});
