export const MENU = [
  {
    id: 'burger',
    name: '🍔 Burger',
    slug: 'burger',
    items: [
      { id: 'hamburger', name: 'Hamburger', description: 'Beef 150g, karamellisierte Zwiebeln, frische Tomaten und Gewürzgurken', price: 8.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'cheese-burger', name: 'Cheese Burger', description: 'Beef 150g, Cheddar, karamellisierte Zwiebeln, frische Tomaten und Gewürzgurken', price: 9.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'double-cheese-burger', name: 'Double Cheese Burger', description: '2x Beef 150g, Cheddar, karamellisierte Zwiebeln, frische Tomaten und Gewürzgurken', price: 11.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'champignon-burger', name: 'Champignon Burger', description: 'Beef 150g, Cheddar, Champignons und karamellisierte Zwiebeln', price: 10.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'bbq-bacon-burger', name: 'BBQ Bacon Burger', description: 'Beef 150g, Cheddar, Rinder-Bacon, karamellisierte Zwiebeln und frische Tomaten', price: 11.0, allergens: ['1','3','a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'bacon-egg-burger', name: 'Bacon Egg Burger', description: 'Beef 150g, Rinder-Bacon, Ei, Cheddar, karamellisierte Zwiebeln und Tomaten', price: 10.0, allergens: ['1','3','a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'blue-cheese-bacon', name: 'Blue-Cheese Bacon', description: 'Beef 150g, französischer Blauschimmelkäse, Rinder-Bacon, karamellisierte Zwiebeln und frische Tomaten', price: 11.0, allergens: ['1','3','a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'chili-cheese-burger', name: 'Chili Cheese Burger', description: 'Beef 150g, Cheddar, Jalapenos, karamellisierte Zwiebeln und frische Tomaten', price: 10.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'crispy-chicken-burger', name: 'Crispy Chicken Burger', description: 'Crispy Chicken 130g, Cheddar, Jalapeños, karamellisierte Zwiebeln, frische Tomaten', price: 10.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'chicken-lemon-burger', name: 'Chicken Lemon Burger', description: '150g mariniertem Hähnchenbrustfilet, Cheddar, karamellisierte Zwiebeln, frische Tomaten und Gewürzgurken', price: 10.0, allergens: ['a','d','g','l','m'], image_url: '', is_available: true },
      { id: 'ehsos-burger', name: "Ehso's Burger", description: 'Beef 150g, Cheddar, Sucuk, Schafskäse, karamellisierte Zwiebeln, frische Tomaten und Gewürzgurken', price: 12.0, allergens: ['1','2','3','a','d','g','l','m'], image_url: '', is_available: true }
    ]
  },

  {
    id: 'sauces',
    name: 'Extra Saucen',
    slug: 'saucen',
    items: [
      { id: 'knoblauch-sauce', name: 'Knoblauch', description: 'Knoblauchsauce', price: 1.5, allergens: ['3','d','l'], image_url: '', is_available: true },
      { id: 'kraeuter-sauce', name: 'Kräuter', description: 'Kräutersauce', price: 1.5, allergens: ['1','3','d','l'], image_url: '', is_available: true },
      { id: 'chili-sauce', name: 'Chili', description: 'Chilisauce', price: 1.5, allergens: ['2','3','d','l'], image_url: '', is_available: true },
      { id: 'daenische-sauce', name: 'Dänische', description: 'Dänische Sauce', price: 1.5, allergens: ['1','3','d','l'], image_url: '', is_available: true },
      { id: 'burgersauce', name: 'Burgersauce', description: 'Burgersauce', price: 1.5, allergens: ['2','a','d','l'], image_url: '', is_available: true },
      { id: 'curry-sauce', name: 'Curry', description: 'Currysauce', price: 1.5, allergens: ['2','3','d','l'], image_url: '', is_available: true },
      { id: 'ehsos-special-spicy', name: "Ehso's Speciale Spisy-sauce", description: "Hausbesondere scharfe Sauce", price: 1.5, allergens: ['2','3','d','l'], image_url: '', is_available: true },
      { id: 'bbq-sauce', name: 'BBQ', description: 'BBQ Sauce', price: 1.5, allergens: [], image_url: '', is_available: true },
      { id: 'trueffelmayo', name: 'Trüffelmayo', description: 'Trüffelmayo', price: 1.5, allergens: [], image_url: '', is_available: true },
      { id: 'sour-creme', name: 'Sour Creme', description: 'Sour Creme', price: 1.5, allergens: ['d','g','l'], image_url: '', is_available: true }
    ]
  },

  {
    id: 'croque',
    name: 'Croque',
    slug: 'croque',
    items: [
      // Pute variants
      { id: 'pute-mini', name: 'Pute (Mini)', description: 'Putenbrust, Tomaten und Edamer — Mini (ca. 18 cm)', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'pute-normal', name: 'Pute (Normal)', description: 'Putenbrust, Tomaten und Edamer — Normal (ca. 26 cm)', price: 11.5, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'pute-maxi', name: 'Pute (Maxi)', description: 'Putenbrust, Tomaten und Edamer — Maxi (ca. 36 cm)', price: 16.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },

      // Salami
      { id: 'salami-mini', name: 'Salami (Mini)', description: 'Rindersalami, Gewürzgurken und Edamer', price: 8.0, allergens: ['1','2','3','a','g'], image_url: '', is_available: true },
      { id: 'salami-normal', name: 'Salami (Normal)', description: 'Rindersalami, Gewürzgurken und Edamer', price: 11.5, allergens: ['1','2','3','a','g'], image_url: '', is_available: true },
      { id: 'salami-maxi', name: 'Salami (Maxi)', description: 'Rindersalami, Gewürzgurken und Edamer', price: 16.0, allergens: ['1','2','3','a','g'], image_url: '', is_available: true },

      // More croque variants
      { id: 'pute-ananas-mini', name: 'Pute Ananas (Mini)', description: 'Putenbrust, Ananas und Edamer', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'pute-bacon-mini', name: 'Pute Bacon (Mini)', description: 'Putenbrust, Tomaten, Rinder-Bacon und Edamer', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'spicy-chicken-mini', name: 'Spicy Chicken (Mini)', description: 'Spicy Chicken, Tomaten, rote Zwiebeln und Edamer', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'crispy-chicken-mini', name: 'Crispy Chicken (Mini)', description: 'Crispy Chicken, Tomaten, Jalapenos und Cheddar', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'sucuk-mini', name: 'Sucuk (Mini)', description: 'Knoblauchwurst, Tomaten und Edamer', price: 8.0, allergens: ['1','2','3','a','g'], image_url: '', is_available: true },
      { id: 'sucuk-egg-mini', name: 'Sucuk Egg (Mini)', description: 'Knoblauchwurst, gekochte Ei, Tomaten und Edamer', price: 8.0, allergens: ['1','2','3','a','g'], image_url: '', is_available: true },

      // Additional croque items (also available in Normal/Maxi but added as Mini for brevity)
      { id: 'chicken-bacon-mini', name: 'Chicken Bacon (Mini)', description: 'Hähnchenbrust, Rinder-Bacon, Tomaten, karamellisierte Zwiebeln und Edamer', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'chicken-bacon-egg-mini', name: 'Chicken Bacon Egg (Mini)', description: 'Hähnchenbrust, gekochte Ei, Rinder-Bacon, Tomaten, karamellisierte Zwiebeln und Edamer', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'croque-burger-mini', name: 'Burger (Croque) (Mini)', description: 'Burgerfleisch, Tomaten, karamellisierte Zwiebeln und Cheddar', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'thunfisch-mini', name: 'Thunfisch (Mini)', description: 'Thunfisch, Tomaten und Edamer', price: 8.0, allergens: ['a','c','g'], image_url: '', is_available: true },
      { id: 'hotdog-mini', name: 'Hot Dog (Mini)', description: 'Hot Dog Wurst, dänische Gurken, Röstzwiebeln, Ketchup und Edamer', price: 8.0, allergens: ['1','3','a','g','l'], image_url: '', is_available: true },
      { id: 'frikadelle-mini', name: 'Frikadelle (Mini)', description: 'Frikadelle, Tomaten, Ketchup und Edamer', price: 8.0, allergens: ['a','g','l'], image_url: '', is_available: true },
      { id: 'schinken-mini', name: 'Schinken (Mini)', description: 'Schinken, Tomaten und Edamer', price: 8.0, allergens: ['a','g','l'], image_url: '', is_available: true },
      { id: 'hawaii-mini', name: 'Hawaii (Mini)', description: 'Schinken, Ananas und Edamer', price: 8.0, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'taco-beef-mini', name: 'Taco Beef (Mini)', description: 'Rinderhack, Tomaten, Ketchup, Rotezwiebeln und Edamer', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'schafskaese-mini', name: 'Schafskäse (Mini)', description: 'Schafskäse, Gurken und Tomaten', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'mozzarella-mini', name: 'Mozzarella (Mini)', description: 'Tomaten und Mozzarella', price: 8.0, allergens: ['a','g'], image_url: '', is_available: true }
    ]
  },

  {
    id: 'wraps',
    name: 'WRAP',
    slug: 'wraps',
    items: [
      { id: 'wrap-crispy-chicken', name: 'Crispy Chicken', description: 'Crispy Chicken, Jalapenos und Chesterkäse', price: 8.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'wrap-chicken-bacon', name: 'Chicken Bacon', description: 'Hähnchenbrustfilet, Rinder-Bacon, Tomaten, karamellisierte Zwiebeln', price: 8.5, allergens: ['1','3','a','g'], image_url: '', is_available: true },
      { id: 'wrap-taco-beef', name: 'Taco Beef', description: 'Taco Beef, Jalapenos, Chesterkäse, karamellisierte Zwiebeln, Tomaten', price: 8.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'wrap-thunfisch-kapern', name: 'Thunfisch Kapern', description: 'Thunfisch, Kapern und rote Zwiebeln', price: 8.5, allergens: ['a','c','g'], image_url: '', is_available: true },
      { id: 'wrap-bacon-ei', name: 'Bacon Ei', description: 'Rinder-Bacon, Ei, Tomaten und karamellisierte Zwiebeln', price: 8.5, allergens: ['1','3','a','d','g'], image_url: '', is_available: true },
      { id: 'wrap-chicken-egg', name: 'Chicken Egg', description: 'Hähnchenbrustfilet, Ei, Tomaten', price: 8.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'wrap-spicy-chicken', name: 'Spicy Chicken', description: 'Hähnchenbrustfilet, Jalapenos, Tomaten, karamellisierte Zwiebeln', price: 8.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'wrap-burger', name: 'Burger (Wrap)', description: 'Burgerfleisch, Tomaten, karamellisierte Zwiebeln und Edamer', price: 8.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'wrap-schafskaese', name: 'Schafskäse', description: 'Schafskäse, Oliven, Tomaten, karamellisierte Zwiebeln', price: 8.5, allergens: ['9','13','a','g'], image_url: '', is_available: true }
    ]
  },

  {
    id: 'finger-food',
    name: 'Finger Food',
    slug: 'finger-food',
    items: [
      { id: 'chicken-wings-6', name: 'Chicken Wings 6 Stück', description: '', price: 6.5, allergens: ['a'], image_url: '', is_available: true },
      { id: 'chicken-nuggets-6', name: 'Chicken Nuggets 6 Stück', description: '', price: 6.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'chili-cheese-nuggets', name: 'Chili Cheese Nuggets 6 Stück', description: '', price: 5.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'potato-pops', name: 'Potato Pops mit Tako Beef & Cheese', description: '', price: 7.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'mozzarella-sticks', name: 'Mozzarella Sticks 6 Stück', description: '', price: 5.5, allergens: ['a','g'], image_url: '', is_available: true },
      { id: 'knoblauchbrot', name: 'Knoblauchbrot mit Sour Creme', description: '', price: 4.5, allergens: ['a','d','g','l'], image_url: '', is_available: true },
      { id: 'pommes', name: 'Pommes', description: '', price: 3.0, allergens: [], image_url: '', is_available: true }
    ]
  },

  {
    id: 'crepes',
    name: 'Crepes',
    slug: 'crepes',
    items: [
      { id: 'crepe-plain', name: 'Crepe ohne alles', description: '', price: 4.9, allergens: ['a','d','g'], image_url: '', is_available: true },
      { id: 'crepe-zimt-zucker', name: 'Zimt und Zucker', description: '', price: 5.5, allergens: ['a','d','g'], image_url: '', is_available: true },
      { id: 'crepe-apfelmus', name: 'Apfelmus', description: '', price: 5.5, allergens: ['a','d','g'], image_url: '', is_available: true },
      { id: 'crepe-nutella', name: 'Nutella', description: '', price: 6.2, allergens: ['a','d','e','g','h'], image_url: '', is_available: true },
      { id: 'crepe-nutella-cinnamon', name: 'Crepe Nutella, Zimt, Zucker', description: '', price: 6.2, allergens: ['a','d','e','g','h'], image_url: '', is_available: true },
      { id: 'crepe-nutella-banana', name: 'Crepe Nutella, Banana', description: '', price: 6.2, allergens: ['a','d','e','g','h'], image_url: '', is_available: true },
      { id: 'crepe-kinder-schokolade', name: 'Crepe Kinder Schokolade', description: '', price: 6.2, allergens: ['a','d','e','g'], image_url: '', is_available: true }
    ]
  },

  {
    id: 'family-box',
    name: 'Family Box',
    slug: 'family-box',
    items: [
      { id: 'box-1', name: 'Box 1', description: "4x Burger nach Wahl (Classic, Cheese, Chili Cheese, Crispy Chicken) + 6'er Nuggets + 2 Pommes + 6 Mozzarella Sticks + 1 Liter Softdrink nach Wahl", price: 50.0, allergens: [], image_url: '', is_available: true },
      { id: 'box-2', name: 'Box 2', description: "2x Burger nach Wahl (Classic, Cheese, Chili Cheese, Crispy Chicken) + 6'er Wings + 2 Pommes + 1 Liter Softdrink nach Wahl", price: 35.0, allergens: [], image_url: '', is_available: true },
      { id: 'box-3', name: 'Box 3', description: "2x Burger nach Wahl + 2x Croque mini + 2x Wraps + 2 Creppes + 1 Liter Softdrink nach Wahl", price: 58.0, allergens: [], image_url: '', is_available: true }
    ]
  },

  {
    id: 'drinks',
    name: 'Getränke',
    slug: 'drinks',
    items: [
      { id: 'cola-033', name: 'Cola 0,33l', description: '', price: 3.5, allergens: ['2','11'], image_url: '', is_available: true },
      { id: 'cola-1l', name: 'Cola 1,0l', description: '', price: 4.0, allergens: ['2','11'], image_url: '', is_available: true },
      { id: 'cola-zero-033', name: 'Cola Zero 0,33l', description: '', price: 3.5, allergens: ['2','4','11'], image_url: '', is_available: true },
      { id: 'cola-zero-1l', name: 'Cola Zero 1,0l', description: '', price: 4.0, allergens: ['2','4','11'], image_url: '', is_available: true },
      { id: 'fanta-033', name: 'Fanta 0,33l', description: '', price: 3.5, allergens: ['2','3'], image_url: '', is_available: true },
      { id: 'fanta-1l', name: 'Fanta 1,0l', description: '', price: 4.0, allergens: ['2','3'], image_url: '', is_available: true },
      { id: 'mezzo-mix-033', name: 'Mezzo Mix 0,33l', description: '', price: 3.5, allergens: ['2','3','11'], image_url: '', is_available: true },
      { id: 'mezzo-mix-1l', name: 'Mezzo Mix 1,0l', description: '', price: 4.0, allergens: ['2','3','11'], image_url: '', is_available: true },
      { id: 'red-bull-025', name: 'Red Bull 0,25l', description: '', price: 3.5, allergens: ['2','11'], image_url: '', is_available: true },
      { id: 'sprite-033', name: 'Sprite 0,33l', description: '', price: 3.5, allergens: [], image_url: '', is_available: true },
      { id: 'sprite-1l', name: 'Sprite 1,0l', description: '', price: 4.0, allergens: [], image_url: '', is_available: true },
      { id: 'vio-still-05', name: 'Vio Still Mineralwasser 0,5l', description: '', price: 2.5, allergens: [], image_url: '', is_available: true }
    ]
  }
]

