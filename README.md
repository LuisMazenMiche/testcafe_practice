# testcafe_practice
This is a test Demo created by luis manuel Sanchez Paez

There were a lot complications for this demos, 

First the dependecies were a problem to run the front, I had to downgrade to a different Node version to make it work
Also had to downgrade visual studio for the app to run I was having this error

npm ERR! gyp ERR! find VS **************************************************************
npm ERR! gyp ERR! find VS You need to install the latest version of Visual Studio
npm ERR! gyp ERR! find VS including the "Desktop development with C++" workload.
npm ERR! gyp ERR! find VS For more information consult the documentation at:
npm ERR! gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
npm ERR! gyp ERR! find VS **************************************************************

After that I had to use a different Node version (16) to even run Testcafe but after some time it worked.

Anyway, I got to relearn a lot of testcafe stuff that was really interesing, I ended up using the request method to performe
the API calls I felt that it was quite straigh forward to use.

Also I included POM for the creation of the elements.

The test however is not finish, Locating an specific device element on the webpage turned out quit troblesome,
When trying to call "Selector('list-devices').child('div').nth(-1).whitattribute(devicename).whitexactext(Devicelist[0].name) to try and get 
The last device on the list Just did not seem right. But I had no more time left on the challenge and really had to move on.

I really want to learn how this Selector should be made, And I'd Love to hear some feedback from you guys.
