# Newsletter

A basic subscription form that takes user email and adds it to a database. The backend provides API's to record the email and also the functionality to list all subscriptions.

* Frontend:
React with Tailwind CSS.

* Backend:
Django with sqlite database.

## Dependencies:

* python>=3.4
* pipenv 
* nodejs >= 12.13.0 
* yarn

## Usage:


```
git clone https://github.com/keviv7/Newsletter.git
cd Newsletter/backend
pipenv shell
pipenv install --skip-lock
python manage.py runserver
```

Now, open a new Terminal window:

```
cd Newsletter/frontend
yarn install
yarn start
```
