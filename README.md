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

### Step 4 - Add chat view

1. Imitate Whatsapp's chat ui:
 * Add `chat-detils.html`
 * Add `chat-detils.scss`
 * Add pictures: `chat-background.png`, `message-other.png`, `message-mine.png`
 * Add angular-moment `$ bower install angular-moment --save`
2. Add `input.directive.js` to better mobile experience 
3. Server: Add `'newMessage'` method
    * `$ meteor add check`
    * Add `methods.js`
4. Client: Add `'newMessage'` stub
    * Add `stubs.js`

### Step 5 - Add users

1. Add accounts-phone 
    * Server: 
        - `$ meteor add okland:accounts-phone`
        - Add `sms.js` and `settings.json`
    * Client:
        - `$ bower install accounts-phone --save`
        - Require the scripts in `index.html` 
        
            ```
            <script src="lib/accounts-base-client-side/dist/accounts-base-client-side.bundle.min.js"></script>
            <script src="lib/accounts-phone/dist/accounts-phone.bundle.min.js"></script>
            ```
2. Add login flow:
    * Add `'login'`, `'confirmation'`, `'profile'` states
    * Server: Add `'updateName'` method 
    * Add 'login', 'profile' style files
3. Ensure that user is logged in:
    * Ensure user before 'tab', 'profile' states - resolve `$meteor.requireUser()`
    * Redirect to login route - `auth.js`
    * Server: Ensure that user logged in before preform methods
4. Server: Add `userId` to message 
5. Add `'settings'` tab with logout button

### Step 6 - Create and remove chat

1. Add new chat modal view - add controller and template
2. Add `newChat` method and stub
3. Add `chatName` and `chatPicture` filters to get data by user _id
4. `$ meteor remove insecure`
5. Add `'removeChat'` method and change in `ChatsCtrl`
