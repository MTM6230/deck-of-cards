const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const families = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * create a cards array
 *
 * Loop through the suits
 *    Loop through the ranks
 *      Change the suit and rank inside the template literal
 *      push card to cards
 *
 * Retrieve deck from HTML
 * Insert cards to deck
 *
 * Add an Event Listener to the deck
 *    Look for an element with class of 'card' using the closest() method
 *    If the element exists
 *      Toggle the class 'flipped'
 */

/*
<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>
*/
