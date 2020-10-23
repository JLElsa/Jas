# Cypress tests for woolworths website
## 1. New account
Go to Woolworths website
Go to login
Go to sign up
User creates an account
User receives welcome message
User browse for product
User add a product to cart
User checks the cart to view all added products

## 2. Exisitng account
Example Account:
first name: blabla
last name: blaster
email: blastering@gmail.com
password: Dum1Pwd!
birthday: 01041991
phone: 0451123456

## 2.1 Use exisiting acccount to login
Go to login
Enter valid account details
User browse for product
User add a product to cart
User checks the cart to view all added products

## 2.2 Createing an exisitng account again, after it fails, go to login
Go to Woolworths website
Go to login
Go to sign up
User enters an exitising account
User receives error message
Go to login
Enter valid account details
User browse for product
User add a product to cart
User checks the cart to view all added products

## 3. Adding product by three different methods
- Option 1: click watermelon image for more details
- Option 2: re-visiting the site again and click target  
    - Use discription to add the second
- Option 3: add the third one to cart immediately when it appears after filtering by browse groceries
    - Use browse groceries as filter to find watermelon

