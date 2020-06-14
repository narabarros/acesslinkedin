describe ('teste de acesso ao linkedin',() => {
    it ('abre o linkedin e testa a tela de login', () => {

        //ignora o angular
        browser.ignoreSynchronization = true

        //chama a url declarada noo arquivo config 
        browser.get(browser.baseUrl)
        browser.sleep(1000)

        element(by.className("nav__button-secondary")).click()
        browser.sleep(1000)
        
        element(by.id("username")).click()

        //passa parametro para preenchimento com as credenciais configuradas na config
        element(by.id("username")).sendKeys(browser.params.userName)
        browser.sleep(1000)

        element(by.id("password")).click()

        element(by.id("password")).sendKeys(browser.params.password)
        browser.sleep(1000)

        element(by.className("btn__primary--large from__button--floating")).click()
        browser.sleep(1000)

    })
})