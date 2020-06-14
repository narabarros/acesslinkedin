exports.config = {

    allScriptsTimeout: 15000,
    baseUrl: 'https://www.linkedin.com/home',
    userName: '',
    password: '',
    framework: 'jasmine',

    params: {
        userName: '',
        password: '',
    }, 

    specs: [
        '*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        chromeOptions:{

        args: [ "--no-sandbox", "--start-maximized" ]
        }
    },
    
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    } 
};
