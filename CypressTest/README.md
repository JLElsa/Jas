Find the test file [link]()
1. Go to Cypress folder
2. Go to integration folder
3. File named "woolworths.spec.js"
    - Note:
        - First time run all the tests cases will pass.
            - New user account details are in the test(1. New account)
        - The second time to run the whole tests will need the tester to **manually enter new user details** to create a new user(1. New account).

# Cypress tests for woolworths website
## 1. New account
- Go to Woolworths website
- Go to login
- Go to sign up
- User creates an account
- User receives welcome message
- User browse for product
- User add a product to cart with 3 different approaches
- Check cart with 1 product
- User add a product to cart
- Check cart with 2 product
- User add a product to cart
- Check cart with 3 product

## 2. Exisitng account
- Example Account:
    - first name: blabla
    - last name: blaster
    - email: blastering@gmail.com
    - password: Dum1Pwd!
    - birthday: 01041991
    - phone: 0451123456

## 2.1 Use exisiting acccount to login
- Go to login
- Enter valid account details
- User browse for product
- User add a product to cart with 3 different approaches
- User checks the cart to view all added products

## 2.2 Createing an exisitng account again, after it fails, go to login
- Go to Woolworths website
- Go to login
- Go to sign up
- User enters an exitising account
- User receives error message
- Go to login
- Enter valid account details
- User browse for product
- User add a product to cart
- User checks the cart to view all added products

## 3. Adding product by three different methods
- Option 1: click watermelon image for more details
- Option 2: re-visiting the site again and click target  
    - Use discription to add the second
- Option 3: add the third one to cart immediately when it appears after filtering by browse groceries
    - Use browse groceries as filter to find watermelon

