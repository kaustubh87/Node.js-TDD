require('co-mocha');
var data = require('../user-data');

describe('user data', function(){
    it('should have +1 user count after saving', function* (){
        var users = yield data.users.get();

        yield data.users.save({ name: 'Kvin' });

        var newUsers = yield data.users.get();

        newUsers.length.should.equal(users.length + 1);
    });
});