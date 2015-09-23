### Step 1 - Start

1. Install ionic `$ npm install -g ionic`
2. Start ionic tabs template  `$ ionic start whatsapp tabs`

### Step 2 - Mock Whatsapp chats view, coding style and structure

1. Apply [John Papa](https://github.com/johnpapa/angular-styleguide) coding style 
    - Seperate components to their own files:
        * `config.js`
        * `routes.js`
        * `controllers/chats.controller.js`
        * `controllers/chat-detail.controller.js`
3. Mock Whatsapp tabs
4. Mock Whatsapp chats view
    * Add `timestamp` to lastMessage
    * Add `filters/calendar.filter.js`
    * Add moment.js - `$ bower install moment --save`
5. Setup sass:
    * `$ npm install`
    * `$ ionic setup sass`
6. Add `chats.scss`
7. Change data scheme:
    * `id` -> `_id`
    * `face` -> `picture`
    * `lastText` -> `lastMessage { text, timestamp }`

### Step 3 - Connect to Meteor server

1. Create server:
    * `$ meteor create server`
    * `$ rm server.*`
    * `$ mkdir lib && touch lib/collection.js`
    * Define `Chats`, `Messages` collections
    * `$ touch bootstrap.js`
    * Move the bootstrap data from `Chats` service to initiate the `Chats` collection.
    * `$ meteor add momentjs:moment`
2. `$ bower install meteor-client-side angular-meteor --save`
3. Define collections at the client in `collections.js`
4. Change the controllers to work with the Meteor Collection and Object:
    * Use `$scope.$meteorCollection`
    * Use `$scope.$meteorObject`
    * Remove `Chats` service
