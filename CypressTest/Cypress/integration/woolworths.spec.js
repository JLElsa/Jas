describe('Create user', () => {
    context('Actions', () => {
        it('Visit site', () => {
            cy.visit('https://www.woolworths.com.au/')
        })
        it('Has title', () => {
            cy.get('title').contains('Woolworths Supermarket - Buy Groceries Online')
        })
        it('Go to sign up page and register an account', () => {
            cy.get('.coreHeader-profile.coreHeader-loginMobileProfile').click()
            cy.get('.hidden-xs.loginForm-label a').click()

            // Enter a non-exisiting user fitst name
            cy.get('#shared-text-input-3').type('makeatestName', { delay: 0 })
                .should('have.value', 'makeatestName')

            // Enter a non-exisiting user last name
            cy.get('#shared-text-input-4').type('testlastname0', { delay: 0 })
                .should('have.value', 'testlastname0')

            // Enter a non-exisiting email, example syntax: ...@sht.sth
            cy.get('#shared-text-input-5').type('randomem123@gmail.com', { delay: 0 })
                .should('have.value', 'randomem123@gmail.com')

            // Enter a random password, according to website format
            cy.get('#signupForm-password').type('Dum1Pwd!!!!!!!!!!!', { delay: 0 })
                .should('have.value', 'Dum1Pwd!!!!!!!!!!!')

            // Enter a random birthday, according to website format
            // check lazy date input
            cy.get('#shared-text-input-7').type('01041991', { delay: 0 })
                .should('have.value', '01/04/1991')
            cy.get('#shared-text-input-7').clear()
            // cy.pause()

            // check formal date input
            cy.get('#shared-text-input-7').type('01/04/1991', { delay: 0 })
                .should('have.value', '01/04/1991')

            cy.get('#shared-text-input-8').type('0460123456', { delay: 0 })
                .should('have.value', '0460123456')
            cy.get('#signupForm-promoSMS').click({ force: true })
            cy.get('#signupForm-promoEmails').click({ force: true })
            cy.get('#signupForm-promoCatalogue-no').click({ force: true })
            cy.get('#signupForm-IdCardChecked').click({ force: true })
            cy.get('.primary-legacy.m.full-width.mobile-full-width').click()
        })
        it('Check account creation successful message', () => {
            // See welcoming pop-up
            cy.get('h2').contains('Welcome, enjoy a little more everyday with Everyday Rewards.')
            // cy.pause()
            cy.get('.rewardsModal-notNowText').click()
        })
        it('Go to my account and check login user details', () => {
            cy.get('.coreHeader-profile.coreHeader-accMobileProfile.ng-star-inserted').click()

            // Enter an exisiting user first name
            cy.get('.personalDetails-col.personalDetails-col--right').contains('makeatestName')
        })
        it('Find target product from browse groceries', () => {
            // Use browse groceries as filter to find watermelon
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
        })
        // Option 1: click watermelon image for more details
        it('Click target by image, add to cart, and check cart', () => {
            cy.get('a[href="/shop/productdetails/120384/woolworths-red-seedless-watermelon-quarter"]:first()').click({ force: true })
            cy.get('.cartControls-addButton.button.button--primary._outOfTrolleyFocus.ng-star-inserted').click({ force: true })
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('1')
        })
        //// Option 2: re-visiting the site again and click target discription to add the second
        it('Click target by image, add to cart, and check cart', () => {
            // Use browse groceries as filter to find watermelon
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
            cy.get('a[href="/shop/productdetails/120384/woolworths-red-seedless-watermelon-quarter"]').eq(1).click()
            cy.get('.button.button--primary.cartControls-quantityButton.cartControls-incrementButton').click({ force: true })
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('2')
        })
        // Option 3: add the third one to cart immediately when it appears after filtering by browse groceries
        it('Click target by image, add to cart, and check cart', () => {
            // Use browse groceries as filter to find watermelon
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
            cy.get('.button.button--primary.cartControls-quantityButton.cartControls-incrementButton').click({ force: true })
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('3')
        })
    })
})
describe('Existing user login directly and check the account detail', () => {
    context('Actions', () => {
        it('Visit site', () => {
            cy.visit('https://www.woolworths.com.au/shop/securelogin/')
        })
        it('Enter correct input', () => {
            // Enter an exisiting valid account details
            cy.get('#loginForm-Email').type('blastering@gmail.com', { delay: 0 })
                .should('have.value', 'blastering@gmail.com')
            cy.get('#loginForm-Password').type('Dum1Pwd!', { delay: 0 })
                .should('have.value', 'Dum1Pwd!')
            cy.get('#rememberMe').click({ force: true })
            cy.get('button[type="submit"]').click({force: true})
        })
        // Cypress keeps looping without loging into the exisiting account
        // it('Go to my account to check login user details', () => {
        //     cy.get('.coreHeader-profile.coreHeader-accMobileProfile.ng-star-inserted').click({ delay: 300 })

        //     // Enter an exisiting user first name
        //     cy.get('.personalDetails-col.personalDetails-col--right').contains('blabla')
        // })
    })
})

describe('Existing user checks existence and selects a product', () => {
    context('Actions', () => {
        it('Visit site', () => {
            cy.visit('https://www.woolworths.com.au/')
        })
        it('Has title', () => {
            cy.get('title').contains('Woolworths Supermarket - Buy Groceries Online')
        })
        it('Go to sign up page and register an account', () => {
            cy.get('.coreHeader-profile.coreHeader-loginMobileProfile').click()
            cy.get('.hidden-xs.loginForm-label a').click()

            // Enter an exisiting valid account details
            cy.get('#shared-text-input-3').type('blabla', { delay: 0 })
                .should('have.value', 'blabla')
            cy.get('#shared-text-input-4').type('blaster', { delay: 0 })
                .should('have.value', 'blaster')
            cy.get('#shared-text-input-5').type('blastering@gmail.com', { delay: 0 })
                .should('have.value', 'blastering@gmail.com')
            cy.get('#signupForm-password').type('Dum1Pwd!', { delay: 0 })
                .should('have.value', 'Dum1Pwd!')

            // check lazy date input
            cy.get('#shared-text-input-7').type('01041991', { delay: 0 })
                .should('have.value', '01/04/1991')
            cy.get('#shared-text-input-7').clear()
            // cy.pause()

            // check formal date input
            cy.get('#shared-text-input-7').type('01/04/1991', { delay: 0 })
                .should('have.value', '01/04/1991')

            cy.get('#shared-text-input-8').type('0451123456', { delay: 0 })
                .should('have.value', '0451123456')
            cy.get('#signupForm-promoSMS').click({ force: true })
            cy.get('#signupForm-promoEmails').click({ force: true })
            cy.get('#signupForm-promoCatalogue-no').click({ force: true })
            cy.get('#signupForm-IdCardChecked').click({ force: true })
            cy.get('.primary-legacy.m.full-width.mobile-full-width').click()
        })
        it('Expect the account exists', () => {
            // An existing user tries to create an account again, system shows block message
            cy.get('p.title').contains('The sign up was not successful.')
            // cy.pause()
        })
        it('Go to login with existing account', () => {
            cy.get('.coreHeader-profile.coreHeader-loginMobileProfile').click()
            cy.get('#loginForm-Email').type('blastering@gmail.com', { delay: 0 })
                .should('have.value', 'blastering@gmail.com')
            cy.get('#loginForm-Password').type('Dum1Pwd!', { delay: 0 })
                .should('have.value', 'Dum1Pwd!')
            cy.get('#rememberMe').click({ force: true })
            cy.get('button[type="submit"]').click()
        })

        // Cypress keeps looping without loging into the exisiting account
        // it('Go to my account to check login user details', () => {
        //     cy.pause()
        //     cy.get('.coreHeader-profile.coreHeader-accMobileProfile.ng-star-inserted').click()
        //     cy.get('.personalDetails-col.personalDetails-col--right').contains('blabla')
        // })

        it('Find target product from browse groceries', () => {
            // Use browse groceries as filter to find watermelon
            cy.visit('https://www.woolworths.com.au/')
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
        })
        // Option 1: click watermelon image for more details
        it('Click target by image, add to cart, and check cart', () => {
            cy.get('a[href="/shop/productdetails/120384/woolworths-red-seedless-watermelon-quarter"]:first()').click({ force: true })
            cy.get('.cartControls-addButton.button.button--primary._outOfTrolleyFocus.ng-star-inserted').click({ force: true })
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('1')
        })
        //// Option 2: click target by discription for more details by re-visiting the site again
        it('Click target by image, add to cart, and check cart', () => {
            // Re-visit the site
            cy.visit('https://www.woolworths.com.au/')
            // Use browse groceries as filter to find watermelon
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
            cy.get('a[href="/shop/productdetails/120384/woolworths-red-seedless-watermelon-quarter"]').eq(1).click()
            cy.get('.cartControls-addButton.button.button--primary._outOfTrolleyFocus.ng-star-inserted').click({ force: true })
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('1')
        })
        // Option 3: add to cart when it first appear
        it('Click target by image, add to cart, and check cart', () => {
            // Re-visit the site
            cy.visit('https://www.woolworths.com.au/')
            // Use browse groceries as filter to find watermelon
            cy.get('.categoryHeaderSmallFormat-browseButton').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg"]:first()').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit"]').click({ force: true })
            cy.get('a[href="/shop/browse/fruit-veg/fruit/melons-mangoes"]').click({ force: true })
            cy.get('.cartControls-addButton.button.button--primary._outOfTrolleyFocus.ng-star-inserted').eq(2).click()
            cy.get('a[href="/shop/cart"]').click({force: true})
            cy.get('.cart-item-quantity-amount').contains('1')
        })
    })
})